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
    <main className="mx-auto grid w-full flex-1 overflow-y-auto overflow-x-hidden text-foreground sm:container ">
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
        className="z-10 mx-auto flex flex-col items-start gap-3 self-center overflow-hidden px-8 pr-20 sm:px-0"
      >
        <h1
          className={cn(
            "text-6xl font-semibold uppercase sm:text-8xl",
            montserrat.className,
          )}
        >
          {/* Render the first name with equal-width letters */}
          <EqualWidthName name={profile.firstName} />
          <br />
          {/* Render the last name with equal-width letters */}
          <EqualWidthName name={profile.lastName} />
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
        className="absolute bottom-[123.2px] right-0 top-auto overflow-hidden dark:bottom-auto dark:top-0 sm:bottom-[91.2px]"
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
        {/* Light mode Image */}
        <Image
          priority
          src={profile.heroLightImage.image}
          width={2235}
          height={1705}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          alt={profile.heroLightImage.alt}
          className="xl:max-h-screen-85 mt-[88px] inline-flex max-w-screen-sm translate-x-52 object-cover opacity-90 dark:hidden sm:translate-x-28 md:max-w-screen-sm lg:translate-x-0 xl:block xl:w-full xl:max-w-screen-xl"
        />

        {/* Dark mode Image */}
        <Image
          priority
          src={profile.heroDarkImage.image}
          width={2235}
          height={1705}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          alt={profile.heroDarkImage.alt}
          className="xl:max-h-screen-85 mt-[88px] hidden max-w-screen-sm translate-x-52 object-cover opacity-90 dark:inline-flex  sm:translate-x-28 md:max-w-screen-sm lg:translate-x-0 xl:block xl:w-full xl:max-w-screen-xl"
        />
      </motion.div>
    </main>
  );
}

// A reusable component to render a name with equal-width letters
function EqualWidthName({ name }: { name: string }) {
  return (
    <>
      {name.split("").map((letter, index) => (
        <span key={index} className="inline-block w-11 sm:w-[72px]">
          {letter}
        </span>
      ))}
    </>
  );
}
