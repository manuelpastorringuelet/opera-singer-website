import { PortableTextBlock } from "sanity";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Profile extends SanityBody {
  _id: string;
  firstName: string;
  lastName: string;
  voiceType:
    | "Soprano"
    | "Mezzo-Soprano"
    | "Alto"
    | "Tenor"
    | "Baritone"
    | "Bass";
  quote: string;
  quoteSource: string;
  heroDarkImage: Picture;
  heroLightImage: Picture;
  email: string;
}

export type Bio = PortableTextBlock[];

export interface About extends SanityBody {
  _id: string;
  germanBio: Bio;
  englishBio: Bio;
  aboutImageDark: Picture;
  aboutImageLight: Picture;
}

export interface Legal extends SanityBody {
  _id: string;
  title: string;
  content: PortableTextBlock[];
}

export interface Critic extends SanityBody {
  _id: string;
  opera: string;
  role: string;
  description: string;
  source: string;
  ranking: number;
}

export interface Performance extends SanityBody {
  _id: string;
  title: string;
  type: string;
  composer: string;
  composition: string;
  role: string;
  conductor: string;
  producer: string;
  firstDate: Date;
  allDates: string;
  location: string;
  orchestra: string;
}

export interface Gallery extends SanityBody {
  _id: string;
  title: string;
  images: Picture[];
}

export interface Picture {
  alt: string;
  photographer: string;
  image: string;
  objectPosition: ObjectPosition;
}

export interface Media extends SanityBody {
  _id: string;
  title: string;
  files: File[];
}

export interface File {
  description: string;
  alt: string;
  title: string;
  file: string;
}

export interface Repertoire extends SanityBody {
  composerFirstName: string;
  composerLastName: string;
  type: string;
  compositions: Composition[];
}

export interface Composition {
  title: string;
  role: string[];
}

enum ObjectPosition {
  Center = "object-center",
  Top = "object-top",
  Bottom = "object-bottom",
  Right = "object-right",
  Left = "object-left",
}
