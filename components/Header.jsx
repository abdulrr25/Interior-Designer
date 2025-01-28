"use client";

import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Mobilenavigation from "./Mobilenavigation";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <header
      className={`${
        header
          ? "py-2 bg-[#F8E5E9] shadow-lg dark:bg-[#292C3D]"
          : "py-4 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname ==='/' && 'bg-[#FFF]'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-2">
          {/* Logo Section */}
          <Logo />

          <div className="flex items-center gap-x-6">
            {/* Nav Section */}
            <Nav
              containerStyles={"hidden xl:flex items-center gap-x-8"}
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className="xl:hidden px-4">
              <Mobilenavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
