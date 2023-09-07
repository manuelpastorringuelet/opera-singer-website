"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-start overflow-hidden">
      <motion.section
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="z-10 flex flex-col gap-3 pt-10 sm:pr-60"
      >
        <h1 className="text-6xl uppercase sm:text-8xl">
          Taryn
          <br />
          Knerr
        </h1>
        <h2 className="left-0 text-2xl sm:text-4xl">Soprano</h2>
        <h3 className="tex flex flex-col gap-1">
          {`"...... the affecting textures`}
          <br />
          {` of Taryn Knerr’s mezzo-soprano voice."`}
          <br />
          <span className="opacity-50">- The New York Times</span>
        </h3>
      </motion.section>
      <motion.image
        className="absolute z-10 h-full overflow-hidden sm:top-0"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          src="/hero.jpg"
          width={2000}
          height={2000}
          alt="hero image"
          className="translate-x-1/4 translate-y-1/2 scale-[210%] object-cover opacity-50  sm:-translate-y-10 sm:translate-x-40 sm:scale-100"
        />
      </motion.image>
    </main>
  );
}
