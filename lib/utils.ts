import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pages = [
  // HOME, ABOUT, CALENDAR, LISTEN, GALLERY, REPERTOIRE, CONTACT
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "CALENDAR",
    href: "/calendar",
  },
  {
    name: "LISTEN",
    href: "/listen",
  },
  {
    name: "GALLERY",
    href: "/gallery",
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
