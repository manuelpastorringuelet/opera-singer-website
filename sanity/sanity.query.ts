import { QueryParams, groq } from "next-sanity";
import { client } from "./lib/client";

import {
  Critic,
  LegalType,
  ProfileType,
  Performance,
  Gallery,
  Media,
} from "@/types";

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

// export default defineType({
//   name: "legal",
//   title: "Legal",
//   type: "document",
//   icon: GoLaw,
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//     },
//     {
//       name: "content",
//       title: "Content",
//       type: "array",
//       of: [{ type: "block" }],
//     },
//   ],
// });

export async function getLegal(): Promise<LegalType[]> {
  const query = groq`
    *[_type == "legal"]{
      _id,
      title,
      content
    }
  `;

  return client.fetch<LegalType[]>(query, DEFAULT_PARAMS, revalidationOptions);
}

export async function getCritics(): Promise<Critic[]> {
  const query = groq`
    *[_type == "critics"]{
      _id,
      opera,
      role,
      description,
      source,
    }
  `;

  return client.fetch<Critic[]>(query, DEFAULT_PARAMS, revalidationOptions);
}

export async function getPerformances(): Promise<Performance[]> {
  const query = groq`
    *[_type == "performances"]{
      _id,
      title,
  type,
  composer,
  composition,
  role,
  conductor,
  producer,
  dates,
  location,
  orchestra,
    }
  `;

  return client.fetch<Performance[]>(
    query,
    DEFAULT_PARAMS,
    revalidationOptions,
  );
}

export async function getGallery(): Promise<Gallery[]> {
  const query = groq`
    *[_type == "gallery"]{
      _id,
      title,
      images[] {
        alt,
        "image": asset->url,
      },
    }
  `;

  return client.fetch<Gallery[]>(query, DEFAULT_PARAMS, revalidationOptions);
}

export async function getMedia(): Promise<Media[]> {
  const query = groq`
    *[_type == "media"]{
      _id,
      title,
      files[] {
        alt,
        title,
        "file": asset->url,
      },
    }
  `;

  return client.fetch<Media[]>(query, DEFAULT_PARAMS, revalidationOptions);
}
