"use client";

import { motion } from "framer-motion";

import { About } from "@/types";
import Image from "next/image";

interface AboutImageProps {
  about: About;
}

const AboutImage = ({ about }: AboutImageProps) => {
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
      className="relative w-full overflow-hidden object-cover sm:h-60 md:h-80 lg:h-96"
    >
      <Image
        priority
        src={about.aboutImage.image}
        width={2235}
        height={1705}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        alt={about.aboutImage.alt}
        className="hidden h-40 object-cover dark:inline-flex sm:h-auto"
      />
      <Image
        priority
        src="/white.jpg"
        width={2235}
        height={1705}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        alt={about.aboutImage.alt}
        className="h-40 self-center object-cover dark:hidden sm:h-auto"
      />
    </motion.div>
  );
};

export default AboutImage;
