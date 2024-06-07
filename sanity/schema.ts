import { type SchemaTypeDefinition } from "sanity";

import about from "./schemas/about";
import critics from "./schemas/critics";
import gallery from "./schemas/gallery";
import legal from "./schemas/legal";
import media from "./schemas/media";
import performances from "./schemas/performances";
import profile from "./schemas/profile";
import repertoire from "./schemas/repertoire";

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
