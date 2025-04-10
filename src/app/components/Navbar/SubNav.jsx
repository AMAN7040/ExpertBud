import React from "react";
import NavLinks from "./NavLinks";
import Wallet from "./Wallet";
import Language from "./Language";
import Profile from "./Profile";
import Icons from "./Icons";
import Referral from "./Referral";

const SubNav = () => {
  return (
    <div className="flex h-[50px]">
      <div className="inline-flex space-x-[clamp(12px,2.1vw,36px)]  items-center">
        <div className="hidden md:block ">
          <NavLinks />
        </div>
        <div>
          <Wallet />
        </div>
        <div>
          <Referral />
        </div>
        <div className="hidden md:block">
          <Language />
        </div>
        <div className="hidden md:block">
          <Icons />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default SubNav;
