"use client";

import { useState } from "react";

import { ModeToggle } from "./mode-toggle";

import { MobileNav } from "./mobile-nav";
import { Icons } from "./icons";
import ListPages from "./list-pages";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.logo />}
          <span className="font-bold">Menu</span>
        </button>
        {showMobileMenu && <MobileNav />}

        <nav className="hidden md:inline-flex">
          <ListPages />
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
