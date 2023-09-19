import { PortableTextBlock } from "sanity";

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

export type LegalType = {
  _id: string;
  imprint: PortableTextBlock[];
  privacyPolicy: PortableTextBlock[];
};

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
