"use client";

import React from "react";
import { format } from "date-fns";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { motion } from "framer-motion";

import { Performance } from "@/types";
import { cn } from "@/lib/utils";
import { lora, montserrat } from "@/lib/fonts";

// Reusable AddToCalendarButton component
function CustomAddToCalendarButton(props: {
  performance: Performance;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute bottom-2 inline-flex",
        props.dark ? "dark:hidden" : "dark:inline-flex",
      )}
    >
      <AddToCalendarButton
        size="1|1|1"
        listStyle="modal"
        availability="busy"
        hideTextLabelButton
        lightMode={props.dark ? undefined : "dark"}
        buttonStyle="round"
        name={props.performance.title}
        description={`${props.performance.type} of ${props.performance.title} by ${props.performance.composer} at ${props.performance.location}`}
        options={["Apple", "Google", "Outlook.com"]}
        location={props.performance.location}
        startDate={props.performance.firstDate.toString()}
        endDate={props.performance.firstDate.toString()}
        startTime="10:15"
        endTime="23:30"
        timeZone="Europe/Berlin"
      />
    </div>
  );
}

const SinglePerformance = (performance: Performance) => {
  const performanceDate = new Date(performance.firstDate);

  const dateString = format(performanceDate, "d. MMMM yyyy, 'um' HH 'Uhr'");
  console.log(dateString);

  return (
    <>
      <div className="relative flex flex-col gap-8">
        <div className="flex gap-2 text-left">
          {/* Performance Type */}
          <motion.h3
            initial={{
              x: 25,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
            }}
            className="writing-vertical-rl text-2xl capitalize text-primary/80 sm:text-3xl"
          >
            {performance.type}
          </motion.h3>
          <div>
            {/* Performance Title */}
            <motion.h2
              initial={{
                x: 50,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
              className={cn(
                "text-4xl font-bold sm:text-5xl",
                montserrat.className,
              )}
            >
              {performance.title}
            </motion.h2>

            {/* Composer */}
            <motion.h4
              initial={{
                x: 75,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
              className={cn("text-2xl font-normal sm:text-3xl", lora.className)}
            >
              {performance.composer}
            </motion.h4>

            {/* Role */}
            <motion.p
              initial={{
                x: 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
              className="text-sm underline sm:text-base"
            >
              {performance.role}
            </motion.p>

            {/* Conductor */}
            <motion.p
              initial={{
                x: 125,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
              className="text-sm sm:text-base"
            >
              Conductor: {performance.conductor}
            </motion.p>

            {/* Producer (if available) */}
            {performance.producer && (
              <motion.p
                initial={{
                  x: 150,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                }}
                className="text-sm sm:text-base"
              >
                Production: {performance.producer}
              </motion.p>
            )}

            <br />

            {/* Performance Dates */}
            <motion.div
              initial={{
                x: 175,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
              className="text-sm sm:text-base"
            >
              {performance.allDates ? performance.allDates : dateString}
            </motion.div>

            {/* Performance Location */}
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
              className="text-sm sm:text-base"
            >
              <a
                href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
                  performance.location,
                )}`}
              >
                {performance.location}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePerformance;
