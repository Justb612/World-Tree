import React from "react";
import "./ChampionVideo.css";

export default function ChampionVideo(args) {
  return (
    <video autoPlay loop muted className="championvideo">
      <source src={args.videoLink} type="video/mp4" />
    </video>
  );
}
