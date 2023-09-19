import { GoLaw } from "react-icons/go";

const legal = {
  name: "legal",
  title: "Legal",
  type: "document",
  icon: GoLaw,
  fields: [
    {
      name: "imprint",
      title: "Imprint",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "privacyPolicy",
      title: "Privacy Policy",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default legal;
