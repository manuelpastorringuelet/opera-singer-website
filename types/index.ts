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
  quote: PortableTextBlock[];
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
