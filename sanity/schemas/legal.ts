import { GoLaw } from "react-icons/go";
import { defineType } from "sanity";

export default defineType({
  name: "legal",
  title: "Legal",
  type: "document",
  icon: GoLaw,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
