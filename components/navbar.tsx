"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ModeToggle } from "./mode-toggle";
import Pages from "./pages";
import { MenuBar } from "./menubar";
import { useTheme } from "next-themes";

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
          duration: 1.5,
        }}
        className="container flex items-center justify-between px-6 sm:px-16"
      >
        {/* Mobile Menu */}
        <div className="md:hidden">
          <MenuBar />
        </div>

        {/* Logo */}
        <Link
          rel="preload"
          as="image"
          href="/"
          className="hidden flex-shrink-0 cursor-pointer rounded-md p-[2px] hover:bg-primary/90 md:inline-flex"
        >
          <Image
            priority
            src={theme === "light" ? "/signature.png" : "/signature-white.png"}
            width={105}
            height={32}
            alt="signature"
            className="h-8 max-h-[32px] max-w-[105px] object-cover"
          />
        </Link>

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
