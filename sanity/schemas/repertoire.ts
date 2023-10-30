import { defineType } from "sanity";
import { BiMusic } from "react-icons/bi";

export default defineType({
  name: "repertoire",
  title: "Repertoire",
  type: "document",
  icon: BiMusic,
  fields: [
    {
      name: "composer",
      type: "string",
      title: "Composer",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "Oper", value: "Oper" },
          { title: "Konzert", value: "Konzert" },
          { title: "Lied", value: "Lied" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "compositions",
      title: "Compositions",
      type: "array",
      of: [
        {
          type: "object",
          title: "Composition",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "role",
              type: "array",
              title: "Role",
              of: [
                {
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
