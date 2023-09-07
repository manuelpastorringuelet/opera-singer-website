"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ModeToggle } from "./mode-toggle";

import { MenuBar } from "./menubar";
import ListPages from "./list-pages";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <motion.nav
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="md:hidden"
        >
          <MenuBar />
        </motion.nav>
        <div></div>

        <motion.nav
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="hidden self-center md:inline-flex"
        >
          <ListPages />
        </motion.nav>
        <motion.nav
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <ModeToggle />
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
