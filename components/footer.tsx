import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const manuelUrl = "https://www.manuelringuelet.com/";
  const impressumUrl = "/impressum";
  const datenschutzerklärungUrl = "/datenschutzerklarung";

  return (
    <footer>
      <div className="text-center container mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-gray-400">
        <small>
          <span>&copy; Taryn Knerr {currentYear} All rights reserved</span>
          {" | "}
          <Link href={impressumUrl} className="underline">
            Impressum
          </Link>
          {" | "}
          <Link href={datenschutzerklärungUrl} className="underline">
            Datenschutzerklärung
          </Link>
        </small>

        <small>
          <a href={manuelUrl} target="_blank" rel="noopener noreferrer">
            Made with &#9829; by{" "}
            <span className="text-green-400">Manuel Pastor Ringuelet</span>
            <span aria-hidden="true" className="sr-only">
              (opens in a new tab)
            </span>
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
