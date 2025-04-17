import React from "react";
import HeroSecContent from "./HeroSecContent";
import BusinessSec from "./BusinessSec";
import StepSec from "./StepSec";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/HeroSection_bg.png')] bg-cover h-[calc(100vh-70px)]  flex flex-col justify-around  md:flex-row md:justify-evenly  items-center">
      <div className="absolute inset-0 backdrop-blur-[15px] bg-[#EFF2F4]/60 z-0" />
      <div className=" relative z-10 w-[clamp(360px,70vw,550px)] sm:w-[clamp(400px,80vw,650px)] md:w-[clamp(450px,50vw,700px)] mt-5 md:mt-0">
        <HeroSecContent />
      </div>
      <div className="relative h-[50vw] min-h-60  w-[50vw] min-w-58 sm:w-[50vw] md:w-1/3 md:h-1/2 lg:w-1/3 lg:h-[609px] overflow-y-auto">
        <BusinessSec />
      </div>
      <div className="absolute right-8 top-2/3 md:top-1/4 space-y-2 flex flex-col items-end">
        <StepSec />
      </div>
    </section>
  );
};

export default HeroSection;
