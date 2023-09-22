"use client";

import { motion } from "framer-motion";

import { Critic } from "@/types";

interface CriticsProps {
  critics: Critic[];
}

const Critics = ({ critics }: CriticsProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-visible">
      {critics.map((critics, index) => (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          transition={{ duration: 2 }}
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
            <q className="text-start text-2xl text-primary/80">
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
