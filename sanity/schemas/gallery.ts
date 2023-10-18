import { BiImage } from "react-icons/bi";
import { defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: BiImage,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              validation: (Rule) => Rule.required(),
            },
            { name: "photographer", type: "string", title: "Photographer" },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
});
