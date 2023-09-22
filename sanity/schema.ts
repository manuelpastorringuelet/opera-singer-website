import { type SchemaTypeDefinition } from "sanity";

import legal from "./schemas/legal";
import profile from "./schemas/profile";
import critics from "./schemas/critics";
import performances from "./schemas/performances";
import gallery from "./schemas/gallery";
import media from "./schemas/media";
import repertoire from "./schemas/repertoire";
import about from "./schemas/about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    about,
    critics,
    performances,
    gallery,
    media,
    repertoire,
    legal,
  ],
};
