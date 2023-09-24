"use client";

import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

import { About } from "@/types";

interface BioProps {
  about: About[];
  language: string;
}

const Bio = ({ about, language }: BioProps) => {
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
      {about.map((data) => {
        return (
          <PortableText
            key={data._id}
            value={language === "deutsch" ? data.germanBio : data.englishBio}
          />
        );
      })}
    </motion.div>
  );
};

export default Bio;
