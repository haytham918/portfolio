import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./SpotifyPlaying.css";

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

console.log("Client ID:", SPOTIFY_CLIENT_ID);
console.log("Client Secret:", SPOTIFY_CLIENT_SECRET);
console.log("Refresh Token:", SPOTIFY_REFRESH_TOKEN);

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

let cachedAccessToken = null;
let tokenExpiryTime = null;

// Function to get a new access token using the refresh token
const getAccessToken = async () => {
  const currentTime = Date.now();

  if (cachedAccessToken && tokenExpiryTime && currentTime < tokenExpiryTime) {
    return cachedAccessToken; // Return the cached token if it hasn't expired
  }

  const response = await axios.post(
    TOKEN_ENDPOINT,
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
      client_id: SPOTIFY_CLIENT_ID,
      client_secret: SPOTIFY_CLIENT_SECRET,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  cachedAccessToken = response.data.access_token;
  tokenExpiryTime = currentTime + response.data.expires_in * 1000; // Set expiry time

  return cachedAccessToken;
};

// Function to get currently playing track
const getNowPlaying = async () => {
  const accessToken = await getAccessToken();

  const response = await axios.get(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (
    response.status === 204 ||
    response.status > 400 ||
    !response.data.is_playing
  ) {
    return null;
  }

  const { item, is_playing } = response.data;
  // console.log(response);
  return {
    id: item.id,
    song: item.name,
    artist: item.artists.map((artist) => artist.name).join(", "),
    albumCover: item.album.images[0].url,
    isPlaying: is_playing,
    songUrl: item.external_urls.spotify,
  };
};

export const SpotifyPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await getNowPlaying();
        // Update only if a new song is detected or switching from pausing/playing
        if (
          data &&
          (!nowPlaying ||
            data.id !== nowPlaying.id ||
            data.isPlaying !== nowPlaying.isPlaying)
        ) {
          setNowPlaying(data);
        } else if (data === null && nowPlaying) {
          // Set to null if no track is playing (e.g., app closed or playback stopped)
          setNowPlaying(null);
        }
      } catch (error) {
        console.error("Error fetching currently playing track:", error);
      }
    };

    fetchNowPlaying();

    // Optional: Set up an interval to refresh every 4 seconds
    const interval = setInterval(fetchNowPlaying, 4000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [nowPlaying]);

  return (
    <div className="spotify-playing-container">
      <div className="playing-header">
        <iconify-icon
          icon="logos:spotify-icon"
          width="2.25em"
          height="2.25em"
        ></iconify-icon>
        {!nowPlaying || !nowPlaying.isPlaying ? (
          <h4 className="song-bold-text">Not Playing</h4>
        ) : (
          <h4 className="song-bold-text">Now Playing</h4>
        )}
      </div>

      {nowPlaying && nowPlaying.isPlaying ? (
        <a
          href={nowPlaying.songUrl}
          className="playing-song"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={nowPlaying.albumCover}
            className="album-cover"
            alt={`Album Cover of ${nowPlaying.song}`}
          />
          <div>
            <h4 className="song-bold-text">
              <iconify-icon
                icon="solar:soundwave-square-bold-duotone"
                width="1.5em"
                height="1.5em"
                style={{
                  color: "#0bad0e",
                  animation: "pulse 1.5s ease-in-out infinite",
                  transformOrigin: "center",
                }}
              ></iconify-icon>{" "}
              {nowPlaying.song}
            </h4>
            <span
              style={{
                opacity: 0.8,
                textDecoration: "none",
                color: "var(--text-color)",
              }}
            >
              {nowPlaying.artist}
            </span>
          </div>
        </a>
      ) : null}
    </div>
  );
};
