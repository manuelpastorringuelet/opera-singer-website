import { defineField } from "sanity";

import { Calendar } from "lucide-react";

const performances = {
  name: "performances",
  title: "Performances",
  type: "document",
  icon: Calendar,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the performance",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Oper", value: "opera" },
          { title: "Konzert", value: "concert" },
          { title: "Gottesdienst", value: "churchService" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
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
      of: [
        {
          type: "date",
          options: {
            dateFormat: "YYYY-MM-DD",
            calendarTodayLabel: "Today",
          },
        },
      ],
    },
    {
      name: "datesAndTimes",
      title: "Dates and Times",
      type: "array",
      of: [
        {
          type: "datetime",
          options: {
            dateFormat: "YYYY-MM-DD",
            timeFormat: "HH:mm",
            timeStep: 15,
            calendarTodayLabel: "Today",
          },
        },
      ],
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the performance",
    },
    {
      name: "orchestra",
      title: "Orchestra",
      type: "string",
      description: "The orchestra of the performance",
    },
  ],
};

export default performances;
