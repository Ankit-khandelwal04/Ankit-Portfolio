"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Extra-Curricular", path: "#extra" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  // Track scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsets = navLinks.map((link) => {
        const el = document.querySelector(link.path);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { path: link.path, offset: rect.top + window.scrollY };
        }
        return null;
      });

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (offsets[i] && scrollPosition >= offsets[i].offset - 150) {
          setActivePath(offsets[i].path);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="pl-4 text-2xl md:text-2xl text-white font-semibold"
        >
          Ankit Khandelwal
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto pr-7" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={activePath === link.path}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
