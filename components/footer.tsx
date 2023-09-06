import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const manuelUrl = "https://www.manuelringuelet.com/";
  const impressumUrl = "/impressum";
  const datenschutzerklärungUrl = "/datenschutzerklarung";

  return (
    <footer>
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-6 py-10 text-center text-gray-400 md:px-16 lg:flex-row lg:justify-between">
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

        <small className="text-xs opacity-80">
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
