"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type Song = {
  id: number;
  title: string;
  url: string;
};

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    setCurrentSong(currentSong);
  }, [currentSong]);

  const songs = [
    {
      id: 1,
      title: "Music for A While – Henry Purcell",
      url: "/song.m4a",
    },
    {
      id: 2,
      title: "Ein Freier meldet sich schon wieder – Johann Strauss",
      url: "/song2.mp3",
    },
    {
      id: 3,
      title: "Ach, ich fühl's – Wolfgang Amadeus Mozart",
      url: "/song.m4a",
    },
    {
      id: 4,
      title: "Voi che sapete – Wolfgang Amadeus Mozart",
      url: "/song2.mp3",
    },
  ];

  return (
    <section className="flex  flex-col items-center rounded-xl bg-foreground/5">
      <div className="flex flex-1 flex-col  justify-around gap-6">
        <ul className="flex flex-col gap-1">
          {songs.map((song) => (
            <li key={song.id}>
              <Button
                variant="ghost"
                className="cursor-pointer justify-start rounded-md p-2 text-left transition-all duration-300 ease-in-out hover:text-primary/70"
                onClick={() => {
                  setCurrentSong(song);
                }}
              >
                {song.title}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-end gap-1">
          <figure>
            <audio controls autoPlay src={currentSong?.url} className="w-full">
              <a href={currentSong?.url}> Download audio </a>
            </audio>
          </figure>
          <figcaption>
            <h2 className="text-sm font-semibold opacity-50">
              <span className="italic">
                {currentSong?.title ?? "Select a song"}
              </span>
            </h2>
          </figcaption>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
