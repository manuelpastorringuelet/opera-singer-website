"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { pages } from "@/lib/pages";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Pages = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ul className="flex flex-1 flex-col md:flex-row md:items-center md:gap-1">
      {pages.map((page) => (
        <li key={page.name}>
          {page.href ? (
            <Link
              href={page.href}
              className={cn(
                "rounded-md transition-colors hover:bg-primary/90 hover:text-primary-foreground md:p-2",
                pathname === page.href && "ring-2 ring-primary",
              )}
            >
              {page.name}
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={cn(
                    "text-md group-[ring-2 ring-primary]: flex h-[35.34px] w-fit flex-1 items-center justify-between border-0 bg-transparent p-2 font-normal text-foreground transition-all hover:underline md:gap-1 [&[data-state=open]>svg]:rotate-180",
                    page.children?.find((child) => child.href === pathname) &&
                      "ring-2 ring-primary",
                  )}
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
