import Image from "next/image";
import React from "react";

const Wallet = () => {
  return (
    <div className="flex items-center list-none text-wallet bg-[#FCF4EA] rounded-md h-7.5 w-fit  gap-x-0.5 px-1 lg:px-3 py-1">
      <div className="relative w-4 h-4 lg:w-5 lg:h-5">
        <Image src="/wallet.png" fill alt="Picture of a wallet icon" />
      </div>

      <span
        className="inline-flex items-center font-dm-sans font-semibold 
        text-[clamp(11px,1.25vw,14px)] h-[17px]"
      >
        {" "}
        0 USD
      </span>
    </div>
  );
};

export default Wallet;
