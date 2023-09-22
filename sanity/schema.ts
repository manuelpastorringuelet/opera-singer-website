import { type SchemaTypeDefinition } from "sanity";

import legal from "./schemas/legal";
import profile from "./schemas/profile";
import critics from "./schemas/critics";
import performances from "./schemas/performances";
import gallery from "./schemas/gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, legal, critics, performances, gallery],
};
