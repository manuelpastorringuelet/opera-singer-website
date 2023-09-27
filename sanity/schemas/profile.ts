import { defineType } from "sanity";
import { BiUser } from "react-icons/bi";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
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
      name: "heroDarkImage",
      title: "Hero Dark Image",
      type: "image",
      description: "Upload a hero dark Image",
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
      name: "heroLightImage",
      title: "Hero Light Image",
      type: "image",
      description: "Upload a hero light Image",
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
  ],
});
