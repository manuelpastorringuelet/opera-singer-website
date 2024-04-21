"use client";

import { motion } from "framer-motion";

import { useTheme } from "next-themes";
import { MenuBar } from "./menubar";
import { ModeToggle } from "./mode-toggle";
import Pages from "./pages";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <header className="z-30 bg-background py-6">
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
          duration: 1.2,
        }}
        className="container flex items-center justify-between px-6 sm:px-16"
      >
        {/* Mobile Menu */}
        <div className="md:hidden">
          <MenuBar />
        </div>

        {/* Logo */}
        <div></div>

        {/* Desktop Menu */}
        <motion.nav className="hidden md:inline-flex">
          <Pages />
        </motion.nav>

        {/* Mode Toggle */}
        <ModeToggle />
      </motion.nav>
    </header>
  );
};

export default Navbar;
