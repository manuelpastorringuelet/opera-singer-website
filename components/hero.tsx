"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Profile } from "@/types";
import { cn } from "@/lib/utils";
import { lora, montserrat } from "@/lib/fonts";

type Props = {
  profile: Profile;
};

export default function Hero({ profile }: Props) {
  const { theme } = useTheme();

  return (
    <main className="mx-auto grid w-full flex-1 overflow-y-auto overflow-x-hidden sm:container sm:grid-cols-2">
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
        <h1
          className={cn(
            "text-6xl font-semibold uppercase sm:text-8xl",
            montserrat.className,
          )}
        >
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <h2
          className={cn(
            "left-0 text-3xl font-semibold text-primary sm:text-5xl",
            montserrat.className,
          )}
        >
          {profile.voiceType}
        </h2>
        <p
          className={cn(
            "flex max-w-[250px] flex-col gap-1 text-3xl sm:max-w-[380px]",
            lora.className,
          )}
        >
          {profile.quote}
        </p>
        <span className="opacity-50">{profile.quoteSource}</span>
      </motion.section>
      <motion.div
        className={cn(
          "absolute right-0 overflow-hidden",
          theme === "dark" ? "top-0" : "bottom-[123.2px] sm:bottom-[91.2px]",
        )}
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
          src={
            theme === "dark"
              ? profile.heroDarkImage.image
              : profile.heroLightImage.image
          }
          width={2235}
          height={1705}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          alt={
            theme === "dark"
              ? profile.heroDarkImage.image
              : profile.heroLightImage.image
          }
          className="xl:max-h-screen-85 mt-[88px] max-w-screen-sm translate-x-52 object-cover opacity-90 sm:translate-x-28 md:max-w-screen-sm lg:translate-x-0 xl:block xl:w-full xl:max-w-screen-xl"
        />
      </motion.div>
    </main>
  );
}
