"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

import { pages } from "@/lib/pages";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function MenuBar() {
  const router = useRouter();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-primary/90 hover:text-primary-foreground">
            <Menu className="group-data-[state=open]:hidden" />
            <X className="hidden group-data-[state=open]:block" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {pages.map((page) =>
                page.href ? (
                  <ListItem key={page.name} href={page.href} title={page.name}>
                    {page.description}
                  </ListItem>
                ) : (
                  <NavigationMenu
                    key={page.name}
                    className="flex max-w-none justify-start"
                  >
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="p-3">
                          <Button
                            className="items-center border-0 bg-transparent p-0 font-normal hover:bg-transparent"
                            variant="default"
                          >
                            {page.name}
                          </Button>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {page.children?.map((child) => (
                            <ListItem key={child.name} href={child.href}>
                              {child.name}
                            </ListItem>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ),
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
