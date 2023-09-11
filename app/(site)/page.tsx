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
    <main className="mx-auto grid w-full flex-1 overflow-hidden sm:container sm:grid-cols-2">
      <motion.section
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="z-10 flex flex-col items-start gap-3 px-8 pt-10 sm:justify-self-center sm:px-0 md:pt-12 xl:pt-20"
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
      <motion.div
        className="absolute overflow-hidden"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
      >
        <Image
          src="/hero.png"
          priority
          width={2235}
          quality={100}
          height={1705}
          alt="hero image"
          className="mt-10 translate-x-28 scale-150 object-cover opacity-90 sm:mt-0 sm:translate-x-10 sm:scale-100"
        />
      </motion.div>
    </main>
  );
}
