"use client";

import { motion } from "framer-motion";

import { Critic } from "@/types";
import { cn } from "@/lib/utils";
import { lora } from "@/lib/fonts";

interface CriticsProps {
  critics: Critic[];
}

const Critics = ({ critics }: CriticsProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden sm:overflow-x-visible">
      {critics.map((critics, index) => (
        <motion.div
          initial={{ x: 200, opacity: 0 }}
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
          <blockquote className="flex flex-col gap-1 text-end">
            <q
              className={cn(
                "text-start text-lg text-primary/80 sm:text-xl",
                lora.className,
              )}
            >
              {critics.description}
            </q>
            <cite className="text-xxs">- {critics.source}</cite>
            <p className="text-xxs">
              {critics.role} <span>({critics.opera})</span>
            </p>
          </blockquote>
        </motion.div>
      ))}
    </div>
  );
};

export default Critics;
