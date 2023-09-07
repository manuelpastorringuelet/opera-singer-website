"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { pages } from "@/lib/pages";

export function MenuBar() {
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
                  <Accordion key={page.name} type="single" collapsible>
                    <AccordionItem className="border-b-0" value="item-1">
                      <AccordionTrigger className="px-3 py-3 text-sm font-medium">
                        {page.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        {page.children?.map((child) => (
                          <ListItem key={child.name} href={child.href}>
                            {child.name}
                          </ListItem>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
