"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const manuelUrl = "https://www.manuelringuelet.com/";
  const impressumUrl = "/impressum";
  const datenschutzerklärungUrl = "/datenschutzerklarung";

  return (
    <footer className="z-0 bg-background">
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
        className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-6 py-5 text-center text-foreground sm:px-16 md:flex-row md:justify-between"
      >
        <small>
          <span>&copy; {currentYear} Taryn Knerr</span>
          {" | "}
          <Link href={impressumUrl} className="underline">
            Impressum
          </Link>
          {" | "}
          <Link href={datenschutzerklärungUrl} className="underline">
            Datenschutzerklärung
          </Link>
        </small>

        <small className="text-xs">
          <a className="text-foreground" href={manuelUrl}>
            Made with &#9829; by{" "}
            <span className="font-semibold">Manuel Pastor Ringuelet</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </small>
      </motion.div>
    </footer>
  );
};

export default Footer;
