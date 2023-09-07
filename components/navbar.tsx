import { ModeToggle } from "./mode-toggle";

import { MenuBar } from "./menubar";
import ListPages from "./list-pages";

const Navbar = () => {
  return (
    <header className="z-30 mb-20 border-b border-zinc-800 px-6 py-6 md:mb-28 md:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="md:hidden">
          <MenuBar />
        </div>
        <div></div>

        <nav className="hidden self-center md:inline-flex">
          <ListPages />
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
