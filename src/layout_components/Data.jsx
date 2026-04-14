import React from "react";
import { SpotifyPlaying } from "./Spotify/SpotifyPlaying";

const Data = () => {
  return (
    <div className="max-w-[560px] text-center md:text-left">
      <h1 className="mb-2 text-[1.95rem] font-bold tracking-[-0.04em] text-title xs:text-[2.15rem] md:text-[2rem] lg:text-[clamp(2.15rem,3.1vw,2.55rem)]">
        Haytham Tang
      </h1>

      <h3 className="relative mb-4 inline-flex items-center pl-[1.9rem] font-kai text-[0.96rem] font-medium tracking-[0.08em] text-title before:absolute before:left-0 before:top-1/2 before:h-px before:w-[1.1rem] before:-translate-y-1/2 before:bg-[rgba(15,23,42,0.18)] xs:text-[1.05rem] xs:pl-[3.4rem] xs:before:w-[2.35rem]">
        唐允轩
      </h3>

      <p className="mb-4 text-base leading-[1.8] text-text">
        Hello there, I&apos;m Yunxuan "Haytham" Tang, a recent Computer Science
        graduate from the University of Michigan with a minor in Electrical
        Engineering. Currently, I am a Software Engineer at{" "}
        <span className="inline-flex items-center gap-1.5 font-medium text-title">
          TikTok
          <iconify-icon
            icon="streamline-logos:tiktok-logo-block"
            width="1.1em"
            height="1.1em"
          />
        </span>
        .
      </p>

      <p className="mb-4 text-base leading-[1.8] text-text">
        Through years of programming, teaching, and research experiences, I have
        built expertise in full-stack development, machine learning, systems, and
        hardware design.
      </p>

      <p className="mt-1 text-[0.86rem] text-textLight md:text-[0.92rem]">
        Updated: Apr. 13, 2026
      </p>
      <SpotifyPlaying />
    </div>
  );
};

export default Data;
