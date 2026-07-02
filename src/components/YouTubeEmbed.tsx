"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  start?: number;
  title: string;
}

export default function YouTubeEmbed({
  videoId,
  start,
  title,
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?start=${
          start ?? 0
        }&autoplay=1`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="relative w-full h-full group cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 shadow-lg group-hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-4 h-4 ml-0.5"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
