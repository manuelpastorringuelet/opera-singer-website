import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Page {
  name: string;
  href?: string;
  children?: Page[];
}

export const pages = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    children: [
      {
        name: "DEUTSCH",
        href: "/deutsch",
      },
      {
        name: "ENGLISH",
        href: "/english",
      },
    ],
  },
  {
    name: "CALENDAR",
    href: "/calendar",
  },
  {
    name: "LISTEN",
    href: "/music",
  },
  {
    name: "GALLERY",
    children: [
      {
        name: "ON STAGE",
        href: "/onstage",
      },
      {
        name: "PORTRAIT",
        href: "/portrait",
      },
    ],
  },
  {
    name: "REPERTOIRE",
    href: "/repertoire",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];
