import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const manuelUrl = "https://www.manuelringuelet.com/";
  const impressumUrl = "/impressum";
  const datenschutzerklärungUrl = "/datenschutzerklarung";

  return (
    <footer className="z-30 bg-background/70">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-6 py-6 text-center md:px-16 lg:flex-row lg:justify-between">
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
          <a href={manuelUrl}>
            Made with &#9829; by{" "}
            <span className="text-green-600 dark:text-green-400">
              Manuel Pastor Ringuelet
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
