import Link from "next/link";

import { Code2, CodeIcon, Codesandbox } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";

import ThemeToggle from "./ThemeToggle";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          {/* <Code2  /> */}
          <Codesandbox  className="size-8 text-emerald-500  animate-pulse"/>
          <span className="bg-gradient-to-r animate-pulse from-emerald-800 to-teal-500 bg-clip-text text-transparent">
            codeHive
          </span>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ThemeToggle/>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;