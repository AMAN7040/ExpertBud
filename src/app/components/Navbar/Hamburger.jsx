"use client";
import React, { useCallback, useState } from "react";
import Sidebar from "./Sidebar";

const Hamburger = () => {
  const [isSideBar, setSideBar] = useState(false);

  const toggleSideBar = useCallback(() => {
    setSideBar((prev) => !prev);
  }, []);

  return (
    <div className="flex justify-center items-center md:hidden hover:bg-gray-200 rounded-full p-1 transition duration-100 ease-out">
      <div
        className="flex justify-center items-center text-dark"
        onClick={toggleSideBar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <Sidebar isSideBar={isSideBar} closeSideBar={toggleSideBar} />
    </div>
  );
};

export default Hamburger;
