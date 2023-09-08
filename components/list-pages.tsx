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

const ListPages = () => {
  const router = useRouter();

  return (
    <ul className="flex flex-1 flex-col md:flex-row md:items-center md:gap-3 lg:gap-8 xl:gap-12">
      {pages.map((page) => (
        <li key={page.name}>
          {page.href ? (
            <Link
              href={page.href}
              className="rounded-md transition-colors hover:bg-primary/90 hover:text-primary-foreground md:p-2 lg:p-3"
            >
              {page.name}
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-md border-0 bg-transparent font-normal md:p-1 lg:p-3"
                  variant="default"
                >
                  {page.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {page.children?.map((child) => (
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-primary/90 hover:text-primary-foreground"
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

export default ListPages;
