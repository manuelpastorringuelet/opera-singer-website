"use client";

import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

import { ProfileType } from "@/types";

interface BioProps {
  profile: ProfileType[];
}

const Bio = ({ profile }: BioProps) => {
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
      {profile.map((data) => {
        return <PortableText key={data._id} value={data.germanBio} />;
      })}
    </motion.div>
  );
};

export default Bio;
