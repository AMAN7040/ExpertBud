import React from "react";
import HeroSecContent from "./HeroSecContent";
import BusinessSec from "./BusinessSec";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/HeroSection_bg.png')] bg-cover h-[calc(100vh-70px)] flex flex-col md:flex-row md:justify-evenly lg:justify-around items-center">
      <div className="absolute inset-0 backdrop-blur-[15px] bg-[#EFF2F4]/60 z-0" />
      <div className="relative z-10 w-[clamp(360px,70vw,550px)] sm:w-[clamp(400px,80vw,650px)] md:w-[clamp(450px,50vw,700px)] mt-5 md:mt-0">
        <HeroSecContent />
      </div>
      <div className="relative h-60 sm:w-[50vw] w-80 md:w-1/3 md:h-1/2 lg:w-1/3 lg:h-[609px]"> 
        <BusinessSec/>
      </div>
    </section>
  );
};

export default HeroSection;
