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
  // date without time
  const date = new Date(props.performance.firstDate);

  // Format the date as a string without the time
  const dateStringWithoutTime = format(date, "yyyy-MM-dd");

  const startTimeString = format(date, "HH:mm");

  // end time is always start time + 2.5 hours
  const endTime = new Date(date.getTime() + 2.5 * 60 * 60 * 1000);

  const endTimeString = format(endTime, "HH:mm");

  return (
    <div
      className={cn(
        "absolute bottom-3 ml-2 inline-flex",
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
        startDate={dateStringWithoutTime}
        endDate={dateStringWithoutTime}
        startTime={startTimeString}
        endTime={endTimeString}
        timeZone="Europe/Berlin"
      />
    </div>
  );
}

const SinglePerformance = (performance: Performance) => {
  const performanceDate = new Date(performance.firstDate);

  const dateString = format(performanceDate, "d. MMMM yyyy, 'um' HH 'Uhr'");

  return (
    <>
      <div className="relative flex flex-col gap-8" key={performance._id}>
        <div className="flex flex-col text-left sm:flex-row sm:gap-2">
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
            className="sm:writing-vertical-rl text-2xl capitalize text-primary/80 sm:text-3xl"
          >
            {performance.type}
          </motion.h3>
          <div className="w-full">
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
                "break-words text-4xl font-bold sm:text-5xl",
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
            >
              <div className="inline-block">
                {/* Performance Dates */}
                <div className="text-sm sm:text-base">
                  {performance.allDates ? performance.allDates : dateString}
                </div>

                {/* Performance Location */}
                <motion.div
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
                  className="text-sm sm:text-base"
                >
                  <a
                    href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
                      performance.location,
                    )}`}
                    className="underline"
                  >
                    {performance.location}
                  </a>
                </motion.div>
              </div>

              {/* Add to Calendar Button */}
              <>
                <CustomAddToCalendarButton
                  performance={performance}
                  dark={false}
                />
                <CustomAddToCalendarButton
                  performance={performance}
                  dark={true}
                />
              </>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePerformance;
