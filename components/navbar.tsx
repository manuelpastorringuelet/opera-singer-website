"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ModeToggle } from "./mode-toggle";

import ListPages from "./list-pages";
import { MenuBar } from "./menubar";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="z-30 border-b border-zinc-800 bg-background/70 px-6 py-6 md:px-16">
      <motion.div
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
          duration: 4,
        }}
        className="mx-auto flex max-w-6xl items-center justify-between"
      >
        <nav className="md:hidden">
          <MenuBar />
        </nav>
        <div></div>

        <motion.nav className="hidden self-center md:inline-flex">
          <ListPages />
        </motion.nav>
        <ModeToggle />
      </motion.div>
    </header>
  );
};

export default Navbar;
