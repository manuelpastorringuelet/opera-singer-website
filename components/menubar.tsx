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

import { pages } from "@/lib/pages";
import { useRouter } from "next/navigation";

export function MenuBar() {
  const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-primary/90 hover:text-primary-foreground z-1-">
            <Menu className="group-data-[state=open]:hidden" />
            <X className="hidden group-data-[state=open]:block" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 px-6 py-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <NavigationMenuLink
                className="py-2"
                onClick={() => router.push("/")}
              >
                HOME
              </NavigationMenuLink>
              {pages.map((page) =>
                page.href ? (
                  <NavigationMenuLink
                    className="py-2"
                    key={page.name}
                    onClick={() => router.push(page.href as string)}
                  >
                    {page.name}
                  </NavigationMenuLink>
                ) : (
                  <Accordion key={page.name} type="single" collapsible>
                    <AccordionItem
                      // className="border-b-0"
                      value="item-1"
                    >
                      <AccordionTrigger className="py-2 font-normal">
                        {page.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        {page.children?.map((child) => (
                          <NavigationMenuLink
                            className="flex flex-col justify-center py-2 pl-2"
                            key={child.name}
                            onClick={() => router.push(child.href as string)}
                          >
                            {child.name}
                          </NavigationMenuLink>
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
