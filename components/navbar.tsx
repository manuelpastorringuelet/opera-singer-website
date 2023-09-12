"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ModeToggle } from "./mode-toggle";

import Pages from "./pages";
import { MenuBar } from "./menubar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="z-30 border-b border-zinc-800 bg-background py-6">
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
        <div
          onClick={() => router.push("/")}
          className="hidden flex-shrink-0 cursor-pointer rounded-md hover:bg-primary/90 md:inline-flex"
        >
          <Image
            src="/signature.png"
            width={100}
            height={100}
            objectFit="cover"
            alt="signature"
            className="h-9 w-full object-cover dark:invert"
          />
        </div>
        <motion.nav className="hidden md:inline-flex">
          <Pages />
        </motion.nav>
        <ModeToggle />
      </motion.nav>
    </header>
  );
};

export default Navbar;
