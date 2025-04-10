import Link from "next/link";
import React from "react";

const links = [
  { href: "/", label: "Find Tutor", color: "text-dark" },
  { href: "/homework", label: "Homework", color: "text-thanos" },
];

const NavLinks = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-center space-x-2 lg:space-x-4 xl:space-x-6 h-6.5">
      {links.map((item) => (
        <Link
          key={item?.label}
          href={item?.href}
          className={`flex items-center text-[clamp(14px,1.5vw,18px)] font-manrope font-medium leading-[100%] h-[25px] ${item?.color} nav`}
        >
          {item?.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
