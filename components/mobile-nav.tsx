import * as React from "react";
import Link from "next/link";

import { cn, pages } from "@/lib/utils";
import ListPages from "./list-pages";

export function MobileNav() {
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <ListPages />
      </div>
    </div>
  );
}
