"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { pages } from "@/lib/pages";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Pages = () => {
  const router = useRouter();

  return (
    <ul className="flex flex-1 flex-col md:flex-row md:items-center md:gap-1">
      {pages.map((page) => (
        <li key={page.name}>
          {page.href ? (
            <Link
              href={page.href}
              className="rounded-md transition-colors hover:bg-primary/90 hover:text-primary-foreground md:p-2"
            >
              {page.name}
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-md flex h-[35.34px] w-fit flex-1 items-center justify-between border-0 bg-transparent p-2 font-normal transition-all hover:underline md:gap-1 [&[data-state=open]>svg]:rotate-180"
                  variant="default"
                >
                  {page.name}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                    size={16}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {page.children?.map((child) => (
                  <DropdownMenuItem
                    className="cursor-pointer p-2 focus:bg-primary/90"
                    key={child.name}
                    onClick={() => router.push(child.href as string)}
                  >
                    {child.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Pages;
