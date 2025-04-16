import React from "react";
import Logo from "./Logo";
import SubNav from "./SubNav";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-17.5 border bg-white/50 backdrop-blur-md border-b shadow-[0_2px_8px_#0000000A] border-secondary z-30 ">
      <nav className="flex justify-between items-center h-[70px] w-full px-[clamp(4px,6vw,8%)] z-30">
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
