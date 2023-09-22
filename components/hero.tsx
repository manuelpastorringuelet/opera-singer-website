"use client";

import { Lora } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

import { Profile } from "@/types";
import { cn } from "@/lib/utils";

const lora = Lora({ subsets: ["latin"] });

type Props = {
  profile: Profile;
};

export default function Hero({ profile }: Props) {
  return (
    <main
      className={cn(
        "mx-auto grid w-full flex-1 sm:container sm:grid-cols-2",
        lora.className,
      )}
    >
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
        className="z-10 flex flex-col items-start gap-3 self-center overflow-hidden px-8 sm:justify-self-center sm:px-0 md:ml-auto"
      >
        <h1 className="text-6xl uppercase sm:text-8xl">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <h2 className="left-0 text-3xl text-primary sm:text-5xl">
          {profile.voiceType}
        </h2>
        <p className="flex max-w-[250px] flex-col gap-1 text-3xl sm:max-w-[380px]">
          {profile.quote}
        </p>
        <span className="opacity-50">{profile.quoteSource}</span>
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
