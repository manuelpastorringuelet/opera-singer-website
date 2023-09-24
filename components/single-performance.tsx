"use client";

import React from "react";
import { format, isSameMonth, isSameYear } from "date-fns";
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
        "absolute bottom-0 ml-2 inline-flex",
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
        startDate={props.performance.dates[0].toString()}
        endDate={props.performance.dates[0].toString()}
        startTime="10:15"
        endTime="23:30"
        timeZone="Europe/Berlin"
      />
    </div>
  );
}

const SinglePerformance = (performance: Performance) => {
  return (
    <>
      <div className="relative flex flex-col gap-8">
        <div className="flex text-left">
          {/* Performance Type */}
          <motion.h3
            initial={{
              x: 400,
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
                x: 250,
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
                  x: 300,
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
                x: 350,
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
              {performance.dates.map((date, index, array) => {
                const currentDate = new Date(date);

                // Check if it's the last date
                const isLastDate = index === array.length - 1;

                // Check if the month is the same as the next date's month
                const isSameMonthAsNext = isLastDate
                  ? false
                  : isSameMonth(currentDate, new Date(array[index + 1]));

                // Check if the year is the same as the next date's year
                const isSameYearAsNext = isLastDate
                  ? false
                  : isSameYear(currentDate, new Date(array[index + 1]));

                // Determine if month and year should be displayed
                const shouldDisplayMonth =
                  !isSameMonthAsNext || (isLastDate && !isSameMonthAsNext);
                const shouldDisplayYear =
                  !isSameYearAsNext || (isLastDate && !isSameYearAsNext);

                const formattedDateParts = [];

                // Add Month (if needed)
                if (shouldDisplayMonth) {
                  formattedDateParts.push(format(currentDate, "MMMM"));
                }

                // Add Day with Ordinal Suffix
                formattedDateParts.push(format(currentDate, "do"));

                // Add Year (if needed)
                if (shouldDisplayYear) {
                  formattedDateParts.push(format(currentDate, "yyyy"));
                }

                return (
                  <>
                    <span className="inline-block" key={index}>
                      {formattedDateParts.join(" ")}
                      {index < array.length - 1 && ", "}
                    </span>{" "}
                  </>
                );
              })}
            </motion.div>

            {/* Performance Location */}
            <motion.div
              initial={{
                x: 400,
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
