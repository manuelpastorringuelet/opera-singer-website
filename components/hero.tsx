"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";

type Props = {
  profile: ProfileType;
};

export default function Hero({ profile }: Props) {
  return (
    <main className="mx-auto grid w-full flex-1 sm:container sm:grid-cols-2">
      <motion.section
        initial={{
          x: 300,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="z-10 flex flex-col items-start gap-3 overflow-hidden px-8 pt-10 sm:justify-self-center sm:px-0 md:ml-auto md:pt-12 xl:pt-20"
      >
        <h1 className="text-6xl uppercase sm:text-8xl">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <h2 className="left-0 text-2xl sm:text-4xl">Soprano</h2>
        <text className="flex w-full flex-col gap-1">
          <PortableText value={profile.quote} />
        </text>
        <span className="opacity-50">- The New York Times</span>
      </motion.section>
      <motion.div
        className="absolute right-0 top-0 overflow-hidden"
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
          priority
          src={profile.heroImage.image}
          width={2235}
          height={1705}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          alt={profile.heroImage.alt}
          className="xl:max-h-screen-85 mt-[88px] max-w-screen-sm translate-x-52 object-cover opacity-90 sm:translate-x-28 md:max-w-screen-sm lg:translate-x-0 xl:block xl:w-full xl:max-w-screen-xl"
        />
      </motion.div>
    </main>
  );
}
