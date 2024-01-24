"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ['latin'] })
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolling(window.scrollY > 0);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const navbarClass = `m-0 z-10 flex lg:items-center text-black justify-center flex-wrap border-b border-black px-2 md:px-10 text-sm md:text-md lg:text-lg lg:py-4 ${
    scrolling ? "bg-white fixed top-0 w-full" : "fixed top-0 w-full"
  }`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuClasses = isMobileMenuOpen ? "lg:visible" : "hidden lg:visible";
  const menuAlignment = isMobileMenuOpen
    ? "flex-col bg-black text-slate-100 w-full border-0 m-0 p-0 justify-center items-center p-2"
    : "flex-row-reverse";

  return (
    <>
      <div>
        <nav className={navbarClass}>
          <div className="flex w-full justify-between lg:w-[25%]">
            <div>
              <p className="text-3xl font-medium">TruthTrace</p>
            </div>

            <button
              className="flex justify-center items-center lg:hidden"
              onClick={toggleMobileMenu}
            >
              <Image
                src="/hamburg.png"
                alt="Menu"
                width={48}
                height={48}
              />
            </button>
          </div>

          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${mobileMenuClasses} ${raleway.className}`}
          >
            <div
              className={`text-lg lg:flex-grow flex gap-6 ${menuAlignment} text-black font-medium`}
            >
              <span>
                <Link href="/about" className="inline mt-4 text-lg md:text-xl lg:text-2xl lg:mt-0 hover:underline">
                  About
                </Link>
              </span>
              <span>
                <Link href="/" className="inline mt-4 text-lg md:text-xl lg:text-2xl lg:mt-0 hover:underline">
                  Login
                </Link>
              </span>
              <span>
                <Link href="/link3" className="inline mt-4 text-lg md:text-xl lg:text-2xl lg:mt-0 hover:underline">
                  Home
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
