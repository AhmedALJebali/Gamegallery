"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const NAV_LINKS = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/about",
      label: "About Us",
    },
    {
      link: "/portfolio",
      label: "Portfolio",
    },
    {
      link: "/news",
      label: "News",
    },
    {
      link: "/contact",
      label: "Contact Us",
    },
  ];

  return (
    <div className="w-[95%] mx-auto py-8 grid grid-cols-2 text-white ">
      <span className="text-4xl font-black ">Logo</span>
      <ul className="flex justify-between items-center">
        {NAV_LINKS.map((Nav_Link) => (
          <Link
            key={Nav_Link.link}
            href={Nav_Link.link}
            className={`text-xl font-semibold duration-200  ${
              Nav_Link.link === usePathname() ? "=" : ""
            } ${
              Nav_Link.link === "/contact"
                ? "bg-amber-600 px-3 py-3 rounded-md"
                : ""
            } `}
          >
            {Nav_Link.label}
            {Nav_Link.link !== "/contact" && (
              <div
                className={`
                h-1 bg-[#DC7000] transition-all duration-300
                ${Nav_Link.link === usePathname() ? "w-[80%]" : "w-0"}
              `}
              />
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
