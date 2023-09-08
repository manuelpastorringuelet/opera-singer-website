interface Page {
  name: string;
  href?: string;
  description?: string;
  children?: Page[];
}

export const pages: Page[] = [
  // {
  //   name: "HOME",
  //   href: "/",
  // },
  {
    name: "ABOUT",
    children: [
      {
        name: "DEUTSCH",
        href: "/deutsch",
        description: "Biographie, Repertoire, Presse",
      },
      {
        name: "ENGLISH",
        href: "/english",
        description: "Biography, Repertoire, Press",
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
