import { ThumbsUp } from "lucide-react";

const critics = {
  name: "critics",
  title: "Critics",
  type: "document",
  icon: ThumbsUp,
  fields: [
    {
      name: "opera",
      title: "Opera",
      type: "string",
      description: "The name of the opera",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      description: "The role in the opera",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "The description of the role",
    },
    {
      name: "source",
      title: "Source",
      type: "string",
      description: "The source of the quote",
    },
  ],
};

export default critics;