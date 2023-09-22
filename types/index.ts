import { PortableTextBlock } from "sanity";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export type ProfileType = {
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
  heroImage: {
    alt: string;
    image: string;
  };
  email: string;
  germanBio: PortableTextBlock[];
  englishBio: PortableTextBlock[];
};

export interface LegalType extends SanityBody {
  _id: string;
  title: string;
  content: PortableTextBlock[];
}

export type Critic = {
  _id: string;
  opera: string;
  role: string;
  description: string;
  source: string;
};

export type Performance = {
  _id: string;
  title: string;
  type: string;
  composer: string;
  composition: string;
  role: string;
  conductor: string;
  producer: string;
  dates: Date[];
  location: string;
  orchestra: string;
};

export interface Gallery extends SanityBody {
  _id: string;
  title: string;
  images: Picture[];
}

export interface Picture {
  alt: string;
  image: string;
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
  composer: string;
  type: string;
  compositions: Composition[];
}

export interface Composition {
  title: string;
  role: string[];
}
