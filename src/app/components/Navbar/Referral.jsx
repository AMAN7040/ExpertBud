import React from "react";

const Referral = () => {
  return (
    <div className="h-10.5 rounded-xl border-[1.5px] border-referral bg-[#FAF3FD] box-border px-[clamp(3px,1vw,20px)] flex justify-center items-center hover:bg-referral ">
      <button
        type="button"
        aria-label="Refer a friend"
        className="h-5 font-dm-sans font-medium text-[clamp(12px,1.3vw,15px)] leading-2 md:leading-3 lg:leading-5 text-dark hover:text-background"
      >
        Refer a Friend
      </button>
    </div>
  );
};

export default Referral;
