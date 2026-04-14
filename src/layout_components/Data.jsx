import React from "react";
import { SpotifyPlaying } from "./Spotify/SpotifyPlaying";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Haytham Tang</h1>

      <h3 className="home__subtitle">唐允轩</h3>

      <p className="home__description">
        Hello there, I&apos;m Yunxuan "Haytham" Tang, a recent Computer Science graduate
        from the University of Michigan with a minor in Electrical Engineering.
        Currently, I am a Software Engineer at{" "}
        <span className="home__inline-brand">
          TikTok
          <iconify-icon
            icon="streamline-logos:tiktok-logo-block"
            width="1.1em"
            height="1.1em"
          />
        </span>
        .
      </p>

      <p className="home__description">
        Through years of programming, teaching, and research experiences, I have
        built expertise in full-stack development, machine learning, systems, and
        hardware design.
      </p>

      <p className="home__meta">Updated: Apr. 13, 2026</p>
      <SpotifyPlaying />
    </div>
  );
};

export default Data;
