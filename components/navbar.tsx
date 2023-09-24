"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ModeToggle } from "./mode-toggle";

import Pages from "./pages";
import { MenuBar } from "./menubar";

const Navbar = () => {
  return (
    <header className="z-30 py-6 ">
      <motion.nav
        initial={{
          opacity: 0,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="container flex items-center justify-between px-6 sm:px-16"
      >
        <div className="md:hidden">
          <MenuBar />
        </div>
        <Link
          href="/"
          className="hidden flex-shrink-0 cursor-pointer rounded-md p-[2px] hover:bg-primary/90 md:inline-flex"
        >
          <Image
            priority
            src="/signature.png"
            width={100}
            height={100}
            sizes="(max-width: 640px) 0vw, (max-width: 1200px) 20vw, 70vw"
            alt="signature"
            className="h-8 w-full object-cover dark:invert"
          />
        </Link>
        <motion.nav className="hidden md:inline-flex">
          <Pages />
        </motion.nav>
        <ModeToggle />
      </motion.nav>
    </header>
  );
};

export default Navbar;
