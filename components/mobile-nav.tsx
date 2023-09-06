import * as React from "react";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import { pages } from "@/lib/utils";
import Link from "next/link";

export function MobileNav() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {pages.map((page) =>
          page.href ? (
            <DropdownMenuItem
              key={page.name}
              onClick={() => router.push(page.href)}
            >
              {page.name}
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              key={page.name}
              className="flex flex-col items-start"
            >
              {page.name}
              {page.children?.map((child) => (
                <DropdownMenuItem
                  key={child.name}
                  onClick={() => router.push(child.href)}
                  className="text-xs"
                >
                  {child.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
