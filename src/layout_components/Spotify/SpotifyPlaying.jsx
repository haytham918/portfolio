import React, { useEffect, useState } from "react";
import axios from "axios";

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

let cachedAccessToken = null;
let tokenExpiryTime = null;

const getAccessToken = async () => {
  const currentTime = Date.now();

  if (cachedAccessToken && tokenExpiryTime && currentTime < tokenExpiryTime) {
    return cachedAccessToken;
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
  tokenExpiryTime = currentTime + response.data.expires_in * 1000;

  return cachedAccessToken;
};

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
        if (
          data &&
          (!nowPlaying ||
            data.id !== nowPlaying.id ||
            data.isPlaying !== nowPlaying.isPlaying)
        ) {
          setNowPlaying(data);
        } else if (data === null && nowPlaying) {
          setNowPlaying(null);
        }
      } catch (error) {
        console.error("Error fetching currently playing track:", error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 4000);
    return () => clearInterval(interval);
  }, [nowPlaying]);

  return (
    <div className="mt-6 flex w-full max-w-[420px] flex-col gap-3 max-[450px]:max-w-full">
      <div className="flex items-center gap-3.5">
        <iconify-icon icon="logos:spotify-icon" width="2.25em" height="2.25em" />
        <h4 className="flex items-center gap-[0.2em] font-semibold text-title">
          {!nowPlaying || !nowPlaying.isPlaying ? "No music playing" : "Now listening"}
        </h4>
      </div>

      {nowPlaying && nowPlaying.isPlaying ? (
        <a
          href={nowPlaying.songUrl}
          className="flex items-center gap-3 rounded-2xl border border-border bg-white/80 p-3.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={nowPlaying.albumCover}
            className="h-16 w-16 rounded-[0.9rem]"
            alt={`Album Cover of ${nowPlaying.song}`}
          />
          <div>
            <h4 className="flex items-center gap-[0.2em] font-semibold text-title">
              <iconify-icon
                icon="solar:soundwave-square-bold-duotone"
                width="1.5em"
                height="1.5em"
                className="animate-pulse text-[#0bad0e]"
              ></iconify-icon>{" "}
              {nowPlaying.song}
            </h4>
            <span className="text-text/80">{nowPlaying.artist}</span>
          </div>
        </a>
      ) : null}
    </div>
  );
};
