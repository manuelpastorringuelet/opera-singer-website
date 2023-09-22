"use client";

import { motion } from "framer-motion";

import { ProfileType } from "@/types";
import Image from "next/image";

interface AboutImageProps {
  profile: ProfileType;
}

const AboutImage = ({ profile }: AboutImageProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="relative w-full overflow-hidden object-cover sm:h-60 md:h-80"
    >
      <Image
        priority
        src={profile.heroImage.image}
        width={2235}
        height={1705}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        alt={profile.heroImage.alt}
        className="h-40 object-cover sm:h-auto"
      />
    </motion.div>
  );
};

export default AboutImage;
