"use client";

import { motion } from "framer-motion";

import { Repertoire } from "@/types";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";

type RepertoireTypeProps = {
  repertoire: Repertoire[];
  type: string;
};
const RepertoireType = ({ repertoire, type }: RepertoireTypeProps) => {
  // Filter repertoire based on the type prop
  const filteredRepertoire = repertoire.filter((item) => item.type === type);

  // Sort repertoire by composer alphabetically
  filteredRepertoire.sort((a, b) => a.composer.localeCompare(b.composer));

  console.log(filteredRepertoire);

  return (
    <section className="container mx-auto flex flex-1 flex-col gap-12 py-8 sm:gap-16 sm:px-16">
      <div className="grid gap-6 sm:grid-cols-repertoire sm:gap-8 lg:gap-16">
        <motion.h1
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className={cn(
            "text-5xl font-semibold text-primary/80 sm:justify-self-end",
            montserrat.className,
          )}
        >
          {type}
        </motion.h1>
        <ul className="flex flex-1 flex-col gap-4">
          {filteredRepertoire.map((item, index) => (
            <motion.li
              initial={{
                x: 400 * (index % 2 === 0 ? 1 : -1),
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              key={index}
              className="group"
            >
              <h2 className="text-xl font-semibold group-hover:text-primary/80">
                {item.composer}
              </h2>
              <div>
                {item.compositions.map((piece, index) => (
                  <p key={index} className="font-light">
                    {piece.title}
                    {piece.role &&
                      piece.role.length > 0 &&
                      piece.role.filter((item) => item.trim() !== "").length >
                        0 && (
                        <>
                          {" / "}
                          {piece.role
                            .filter((item) => item.trim() !== "") // Remove empty strings
                            .join(", ")}
                        </>
                      )}
                  </p>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RepertoireType;
