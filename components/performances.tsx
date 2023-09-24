"use client";

import { motion } from "framer-motion";

import { Performance } from "@/types";
import SinglePerformance from "@/components/single-performance";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";

type PerformancesProps = {
  performances: Performance[];
};

// Helper function to convert dates to JavaScript Date objects
const convertToDates = (dates: Date[]) => dates.map((date) => new Date(date));

const Performances = ({ performances }: PerformancesProps) => {
  // sort performances by year, extract the year from the date
  performances.sort((a, b) => {
    const earliestDateA = a.dates.map((date) => new Date(date))[0];
    const earliestDateB = b.dates.map((date) => new Date(date))[0];

    return earliestDateA.getFullYear() - earliestDateB.getFullYear();
  });

  // create a new array with only the years, remove duplicates
  const years = [
    ...new Set(
      performances.map((performance) =>
        convertToDates(performance.dates)[0].getFullYear(),
      ),
    ),
  ];

  return (
    <>
      {years.map((year, index) => (
        <>
          <section
            key={index}
            className="container flex flex-col items-start justify-center gap-4 overflow-hidden font-light sm:grid sm:grid-cols-calendar md:gap-10 lg:gap-20"
          >
            <motion.h1
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className={cn(
                "text-4xl font-semibold sm:text-5xl",
                montserrat.className,
              )}
            >
              {year}
            </motion.h1>
            <div className="flex flex-col gap-8">
              {performances
                .filter(
                  (performance) =>
                    performance.dates
                      .map((date) => new Date(date))[0]
                      .getFullYear() === year,
                )
                .map((performance, index) => (
                  <SinglePerformance key={index} {...performance} />
                ))}
            </div>
          </section>
          {
            // add a horizontal rule between each year, except the last
            index !== years.length - 1 && (
              <hr className="w-full opacity-50 sm:w-2/3" />
            )
          }
        </>
      ))}
    </>
  );
};

export default Performances;
