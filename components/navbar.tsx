"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ModeToggle } from "./mode-toggle";

import Pages from "./pages";
import { MenuBar } from "./menubar";
import { HomeIcon } from "lucide-react";
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
    <header className="z-30 border-b border-zinc-800 bg-background/70 py-6">
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
        className="flex items-center justify-between px-6 md:px-16"
      >
        <div className="md:hidden">
          <MenuBar />
        </div>
        <div
          onClick={() => router.push("/")}
          className="hidden cursor-pointer rounded-md p-3 hover:bg-primary/90 md:inline-flex"
        >
          <HomeIcon size={20} />
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
