import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "voiceType",
      title: "Voice Type",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
    {
      name: "quoteSource",
      title: "Quote Source",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Upload a hero picture",
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
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "germanBio",
      title: "German Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "englishBio",
      title: "English Bio",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default profile;
