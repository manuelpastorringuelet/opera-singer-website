import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pages = [
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
    href: "/music",
  },
  {
    name: "GALLERY",
    href: "/portrait",
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
