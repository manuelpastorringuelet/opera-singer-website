import { type SchemaTypeDefinition } from "sanity";

import legal from "./schemas/legal";
import profile from "./schemas/profile";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, legal],
};
