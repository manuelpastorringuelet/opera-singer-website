"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

import { File } from "@/types";

type Props = {
  songs: File[];
};

const MusicPlayer = ({ songs }: Props) => {
  const [currentSong, setCurrentSong] = useState<File | null>(null);

  useEffect(() => {
    setCurrentSong(currentSong);
  }, [currentSong]);

  return (
    <section className="flex  flex-col items-center rounded-xl bg-foreground/5">
      <div className="flex flex-1 flex-col  justify-around gap-6">
        <ul className="flex flex-col gap-1">
          {songs.map((song, index) => (
            <li key={index}>
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
            <audio controls autoPlay src={currentSong?.file} className="w-full">
              <a href={currentSong?.file}> Download audio </a>
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
