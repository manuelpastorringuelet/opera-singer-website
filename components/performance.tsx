"use client";

import React from "react";
import { format, isSameMonth, isSameYear } from "date-fns";
import { AddToCalendarButton } from "add-to-calendar-button-react";

import { Performance } from "@/types";

const PerformanceComponent = (performance: Performance) => {
  return (
    <>
      <div className="relative flex flex-col gap-8">
        <div className="flex text-left">
          {/* Performance Type */}
          <h2 className="writing-vertical-rl text-32xl capitalize text-primary/80 sm:text-3xl">
            {performance.type}
          </h2>
          <div className="max-w-sm">
            {/* Performance Title */}
            <h3 className="text-4xl font-bold sm:text-5xl">
              {performance.title}
            </h3>
            {/* Composer */}
            <h4 className="text-2xl font-normal sm:text-3xl">
              {performance.composer}
            </h4>
            {/* Role */}
            <p className="text-sm underline sm:text-base">{performance.role}</p>
            {/* Conductor */}
            <p className="text-sm sm:text-base">
              Conductor: {performance.conductor}
            </p>
            {/* Producer (if available) */}
            {performance.producer && (
              <p className="text-sm sm:text-base">
                Production: {performance.producer}
              </p>
            )}

            <br />
            {/* Performance Dates */}
            <div className="text-sm sm:text-base">
              {performance.dates.map((date, index, array) => {
                const currentDate = new Date(date);

                // Format Date
                const formattedDate = format(currentDate, "do MMMM yyyy");

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
                  <p className="flex justify-between" key={index}>
                    {formattedDateParts.join(" ")}
                    {index < array.length - 1 && ", "}
                  </p>
                );
              })}
            </div>

            {/* Performance Location */}
            <a
              href={`https://www.google.com/maps/search/?q=${encodeURIComponent(
                performance.location,
              )}`}
              className="text-sm sm:text-base"
            >
              {performance.location}
            </a>

            {/* Add to Calendar Button */}
            <div className="absolute bottom-0 right-0">
              <AddToCalendarButton
                size="1|1|1"
                listStyle="modal"
                availability="busy"
                hideTextLabelButton
                hideBackground
                buttonStyle="round"
                name={performance.title}
                description={`${performance.type} of ${performance.title} by ${performance.composer} at ${performance.location}`}
                options={["Apple", "Google", "Outlook.com"]}
                location={performance.location}
                startDate={performance.dates[0].toString()}
                endDate={performance.dates[0].toString()}
                startTime="10:15"
                endTime="23:30"
                timeZone="Europe/Berlin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceComponent;
