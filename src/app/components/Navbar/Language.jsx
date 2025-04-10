import React from "react";

function Language() {
  return (
    <div className="flex w-fit md:w-full items-center h-5.5 gap-0.5  lg:gap-x-1.5 xl:gap-x-2 nav">
      <span className="h-[21px] font-dm-sans font-semibold text-[clamp(14px,1.3vw,16px)] text-language">
        English, USD
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="inline-block  text-[#16192C] h-4 w-4 sm:h-4.5 sm:w-4.5 lg:h-5.5 lg:w-5.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default Language;
