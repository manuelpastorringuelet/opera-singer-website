"use client";

import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

import { type Bio } from "@/types";

interface BioProps {
  bio: Bio;
}

const Bio = ({ bio }: BioProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="text-justify"
    >
      <PortableText value={bio} />
    </motion.div>
  );
};

export default Bio;
