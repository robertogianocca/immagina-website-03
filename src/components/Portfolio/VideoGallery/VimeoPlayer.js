"use client"; // Required for Next.js App Router
import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

export default function VimeoPlayer({ videoId }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const player = new Player(playerRef.current, {
      id: videoId,
      autopause: false,
      autoplay: false,
      responsive: true,
      controls: true, // Enforces controls visibility
      dnt: false, // Ensure tracking is allowed (sometimes affects UI)
    });

    // Force player controls to stay visible
    player.on("loaded", () => {
      player.setVolume(1); // Ensure volume is set (triggers UI update)
      player.setControls(true); // Force controls visibility
    });

    return () => {
      player.destroy();
    };
  }, [videoId]);

  return (
    <div
      ref={playerRef}
      className="w-full h-[400px] md:h-[600px] lg:h-full"
      data-vimeo-controls="true"
      data-vimeo-mute="false"
      data-vimeo-playsinline="true"
    ></div>
  );
}
