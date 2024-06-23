import React from "react";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";
import ModeToggle from "./mode-toggle";
import LanguageSelector from "./language-selector";
import Logo from "../logo";
import ConnectWallet from "./connect-wallet";

export default function Navbar() {
  return (
    <nav className="h-[60px] z-30 backdrop-blur-sm fixed top-0 w-screen flex items-center bg-background/50 border-b">
      <div className="container flex justify-between">
        <Link
          href="/"
          className="text-3xl font-bold flex gap-2 justify-center items-center"
        >
          <Logo /> Web Drei
        </Link>
        <div className=" flex items-center gap-4">
          <DesktopNavbar />
        </div>

        <div className="flex items-center gap-2">
          <ConnectWallet />

          {/* <ModeToggle /> */}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
