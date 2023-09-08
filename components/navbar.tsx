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
    <header className="z-30 border-b border-zinc-800 bg-background/70 py-6">
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
          duration: 1.5,
        }}
        className="container flex items-center justify-between px-6 md:px-16 "
      >
        <nav className="md:hidden">
          <MenuBar />
        </nav>
        {/* <div></div> */}
        <motion.nav className="hidden flex-1 md:inline-flex">
          <ListPages />
        </motion.nav>
        <ModeToggle />
      </motion.div>
    </header>
  );
};

export default Navbar;
