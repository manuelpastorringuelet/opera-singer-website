import { defineType } from "sanity";

import { Calendar } from "lucide-react";

export default defineType({
  name: "performances",
  title: "Performances",
  type: "document",
  icon: Calendar,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the performance",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Oper", value: "Oper" },
          { title: "Konzert", value: "Konzert" },
          { title: "Gottesdienst", value: "Gottesdienst" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "composer",
      title: "Composer",
      type: "string",
      description: "The composer of the performance",
    },
    {
      name: "composition",
      title: "Composition",
      type: "string",
      description: "The composition of the performance",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "The role in the performance",
    },
    {
      name: "conductor",
      title: "Conductor",
      type: "string",
    },
    {
      name: "producer",
      title: "Producer",
      type: "string",
    },
    {
      name: "dates",
      title: "Dates",
      type: "array",
      description: "The dates of the performance",
      of: [
        {
          type: "date",
          options: {
            dateFormat: "YYYY-MM-DD",
            calendarTodayLabel: "Today",
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "datesAndTimes",
      title: "Dates and Times",
      type: "string",
      description:
        "The dates and times of the performance (eg. 15. September 2023, um 10 Uhr und 18 Uhr",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the performance",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "orchestra",
      title: "Orchestra",
      type: "string",
      description: "The orchestra of the performance",
    },
  ],
});
