import React from "react";
import NavLinks from "./NavLinks";
import Icons from "./Icons";
import Language from "./Language";

const CloseIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="hover:text-white transition-transform  duration-100 ease-in-out hover:scale-110"
  >
    <path
      d="M6 6L18 18M6 18L18 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Sidebar = ({ isSideBar, closeSideBar }) => {
  return (
    <>
      <div
        className={`fixed z-10 inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-200 md:hidden ${
          isSideBar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSideBar}
      ></div>
      <aside
        className={`z-30 fixed top-0 right-0 h-screen w-[80vw] flex flex-col gap-14 sm:w-[60vw] md:hidden bg-gray-200/70 border-l border-gray-400 transition-transform ease-in-out duration-300 rounded-l-lg text-foreground ${
          isSideBar ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="px-4 py-5 hover:bg-black/50  "
          aria-label="Close sidebar"
          onClick={closeSideBar}
        >
          <CloseIcon size={22} />
        </button>
        <div className="flex px-17 mb-4" onClick={closeSideBar}>
          <NavLinks />
        </div>
        <div className="px-17 mb-4" onClick={closeSideBar}>
          <Language />
        </div>
        <div className="flex px-17" onClick={closeSideBar}>
          <Icons />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
