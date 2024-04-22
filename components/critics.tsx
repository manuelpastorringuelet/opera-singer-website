"use client";

import { motion } from "framer-motion";

import { lora } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Critic } from "@/types";

interface CriticsProps {
  critics: Critic[];
}

const Critics = ({ critics }: CriticsProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden sm:overflow-x-visible">
      {critics.map((critics, index) => (
        <motion.div
          initial={{ x: 50 * (index % 2 === 0 ? -1 : 1), opacity: 0 }} // staggered entrance
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          key={index}
        >
          <blockquote className="flex flex-col text-end">
            <q
              className={cn("text-start text-lg text-primary", lora.className)}
            >
              {critics.description}
            </q>
            <cite className="text-xxs">- {critics.source}</cite>
          </blockquote>
        </motion.div>
      ))}
    </div>
  );
};

export default Critics;
