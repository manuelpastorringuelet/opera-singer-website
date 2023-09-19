import { QueryParams, groq } from "next-sanity";
import { client } from "./lib/client";

import { LegalType, ProfileType } from "@/types";

const revalidationOptions = { next: { revalidate: 10 } };
const DEFAULT_PARAMS = {} as QueryParams;

export async function getProfile(): Promise<ProfileType[]> {
  const query = groq`
    *[_type == "profile"]{
      _id,
      firstName,
    lastName,
    voiceType,
    quote,
    quoteSource,
    heroImage { alt, "image": asset->url },
      email,
     englishBio,
      germanBio,
    }
  `;

  return client.fetch<ProfileType[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );
}

export async function getLegal(): Promise<LegalType[]> {
  const query = groq`
    *[_type == "legal"]{
      _id,
      imprint,
      privacyPolicy,
    }
  `;

  return client.fetch<LegalType[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );
}