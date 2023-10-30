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
      name: "aboutImageDark",
      title: "About Image Dark",
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
    {
      name: "aboutImageLight",
      title: "About Image Light",
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
