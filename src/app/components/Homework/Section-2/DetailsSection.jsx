import Image from "next/image";
import React from "react";

const DetailsSection = () => {
  return (
    <div className="flex justify-center ">
      <div
        className="mx-auto min-w-[80vw] w-[95vw] max-w-[1170px]
    px-6 md:px-[24px] 
    pt-[36px] pb-[36px]
    flex flex-col lg:flex-row items-center gap-y-6 lg:justify-between
    rounded-[16px]
    border-t-[1.11px] border-r-[1.11px] border-b-[8.9px] border-l-[1.11px]
    border-[#FFFFFF]
    bg-[#FFFFFF]"
      >
        <div className="w-full max-w-[241px] h-[55px] gap-[6px] text-center lg:text-left">
          <p className="w-full  h-auto text-dark font-dm-sans font-bold text-[18px] sm:text-[20px] md:text-[23px] leading-[120%] tracking-normal pb-2">
            150+ Students
          </p>
          <p className="w-full  h-auto font-dm-sans text-black font-normal text-[12px] sm:text-[15px] md:text-[16px] leading-[100%] tracking-normal capitalize">
            Trusted us to write their papers
          </p>
        </div>
        <div className="flex gap-10 sm:justify-around w-full max-w-[754.6666px] h-fit sm:h-[58px]  sm:gap-6">
          <div className=" items-center w-full max-w-[201.6667px] h-full  sm:h-[56px] gap-2 sm:gap-3 md:gap-4 flex flex-col sm:flex-row">
            <div className="relative size-7 sm:size:8 md:size-11">
              <Image src={"/star.png"} fill alt="Star icon picture" />
            </div>
            <div className="">
              <p className="w-full  h-auto text-dark font-dm-sans font-bold text-[clamp(14px,2vw,23px)] leading-[120%] tracking-normal pb-2">
                Trustpliot
              </p>
              <div className="w-full flex items-center gap-x-2 md:gap-x-3">
                <div className="relative w-full h-4  md:h-5 shrink-0">
                  <Image src="/star5.png" alt="5 Star icon picture" fill />
                </div>
                <p className="font-dm-sans text-black font-normal text-[11px] sm:text-sm md:text-[16px] leading-none tracking-normal capitalize">
                  4.7
                </p>
              </div>
            </div>
          </div>
          <div className="items-center w-full max-w-[214px] h-full  sm:h-[56px] gap-2 sm:gap-3 md:gap-4 flex flex-col sm:flex-row">
            <div className="relative size-7 sm:size:8 md:size-11">
              <Image src={"/Light.png"} fill alt="Light spaceship picture" />
            </div>
            <div>
              <h6 className="w-full  h-auto text-dark font-dm-sans font-bold text-[clamp(14px,2vw,23px)] leading-[120%] tracking-normal pb-2">
                Sitejabber
              </h6>
              <div className="w-full flex items-center gap-x-2 md:gap-x-3">
                <div className="relative w-full h-4  md:h-5 shrink-0">
                  <Image src="/LightStar.png" alt="5 Star icon picture" fill />
                </div>
                <p className="font-dm-sans text-black font-normal text-[11px] sm:text-sm md:text-[16px] leading-none tracking-normal capitalize">
                  4.0
                </p>
              </div>
            </div>
          </div>
          <div className="items-center w-full max-w-[211px] h-full  sm:h-[56px] gap-2 sm:gap-3 md:gap-4 flex flex-col sm:flex-row">
            <div className="relative h-7 sm:h-8 w-7 md:h-11 md:w-10">
              <Image src={"/Logoimg.png"} fill alt="Light spaceship picture" />
            </div>
            <div className="max-w-[154px] ">
              <h6 className="w-full  h-auto text-dark font-dm-sans font-bold text-[clamp(14px,2vw,23px)] leading-[120%] tracking-normal pb-2">
                ExpertBuddy{" "}
              </h6>
              <div className="max-w-[154px]  flex items-center gap-x-2 md:gap-x-3">
                <div className="relative w-[80px] h-4 md:w-[114px] md:h-5 shrink-0">
                  <Image src="/ExpertStar.png" alt="5 Star icon picture" fill />
                </div>
                <p className="font-dm-sans text-black font-normal text-[11px] sm:text-sm md:text-[16px] leading-none tracking-normal capitalize">
                  5.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
