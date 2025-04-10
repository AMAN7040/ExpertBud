import React from "react";
import Logo from "./Logo";
import SubNav from "./SubNav";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-17.5 border border-secondary z-30 ">
      <nav className="flex justify-between items-center h-[70px] w-full px-[clamp(4px,6vw,8%)]">
        <div className="flex justify-between space-x-5">
          <Hamburger />
          <Logo />
        </div>
        <SubNav />
      </nav>
    </header>
  );
};

export default Navbar;
