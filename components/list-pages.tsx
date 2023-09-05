import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { pages } from "@/lib/utils";
import { Button } from "./ui/button";

const ListPages = () => {
  const router = useRouter();

  return (
    <ul className="flex md:flex-row flex-col items-start md:items-center gap-y-6 md:gap-x-4">
      {pages.map((page) => (
        <li key={page.name}>
          {page.href ? (
            <Link
              href={page.href}
              className="hover:bg-primary/90 p-3 rounded-md hover:text-primary-foreground transition-colors"
            >
              {page.name}
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-transparent border-0 text-md"
                  variant="default"
                >
                  {page.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {page.children?.map((child) => (
                  <DropdownMenuItem
                    key={child.name}
                    onClick={() => router.push(child.href)}
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
