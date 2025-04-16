import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

const Subsection_2 = () => {
  return (
    <div className="w-full space-y-4 md:space-y-5 ">
      <div className="w-full h-32 md:h-37 border border-[#E1D5C9] rounded-[16px] bg-white p-5">
        <p className="font-normal font-dm-sans text-[clamp(10px,3.5vw,18px)] leading-6 text-[#6B7B93]">
          Describe your project briefly
        </p>
      </div>
      <div className="flex space-x-3">
        <Switch id="human-experts-only" />
        <Label
          htmlFor="human-experts-only"
          className="font-semibold font-dm-sans text-[clamp(10px,3.5vw,18px)]  text-[#000000]]"
        >
          Human experts only
        </Label>
      </div>
    </div>
  );
};

export default Subsection_2;
