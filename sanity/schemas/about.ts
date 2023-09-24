import { defineType } from "sanity";
import { BiBook } from "react-icons/bi";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  icon: BiBook,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "germanBio",
      title: "German Bio",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "englishBio",
      title: "English Bio",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      description: "Upload an image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
});
