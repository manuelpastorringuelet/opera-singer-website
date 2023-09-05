"use client";

import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>
        <div className="sm:hidden hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav className="hidden sm:inline-flex">
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/"
                className="dark:hover:text-purple-400 hover:text-purple-800 duration-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="dark:hover:text-purple-400 hover:text-purple-800 duration-300"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="dark:hover:text-purple-400 hover:text-purple-800 duration-300"
              >
                CALENDAR
              </Link>
            </li>
            <li>
              <Link
                href="/listen"
                className="dark:hover:text-purple-400 hover:text-purple-800 duration-300"
              >
                LISTEN
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="dark:hover:text-purple-400 hover:text-purple-800 duration-300"
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                href="/repertoire"
                className="dark:hover:text-purple-400 hover:text-purple-800 duration-300"
              >
                REPERTOIRE
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="dark:hover:text-purple-400 hover:text-purple-800 duration-300"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
