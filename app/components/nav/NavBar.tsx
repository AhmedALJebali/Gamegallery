"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About Us" },
  { link: "/portfolio", label: "Portfolio" },
  { link: "/news", label: "News" },
  { link: "/contact", label: "Contact Us" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="w-[95%] mx-auto py-6 text-white flex items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-black">Logo</span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ link, label }) => (
            <li key={link}>
              <Link
                href={link}
                className={`relative text-lg font-semibold transition-all duration-200 ${
                  link === pathname ? "text-amber-500" : ""
                } ${
                  link === "/contact"
                    ? "bg-amber-600 px-4 py-2 rounded-md text-white"
                    : ""
                }`}
              >
                {label}
                {/* Underline */}
                {link !== "/contact" && (
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-amber-500 transition-all duration-300 ${
                      link === pathname ? "w-3/4" : "w-0"
                    }`}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-[60]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm transition-transform duration-300 md:hidden z-40 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          {NAV_LINKS.map(({ link, label }) => (
            <Link
              key={link}
              href={link}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl font-semibold transition-all duration-200 ${
                link === pathname ? "text-amber-500" : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
