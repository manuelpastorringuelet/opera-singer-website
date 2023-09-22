"use client";

import { motion } from "framer-motion";

import { Critic } from "@/types";

interface CriticsProps {
  critics: Critic[];
}

const Critics = ({ critics }: CriticsProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      {critics.map((critics, index) => (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          key={index}
        >
          <blockquote className="flex flex-col gap-1 text-end">
            <q className="text-start text-xl text-primary/80 sm:text-2xl">
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
