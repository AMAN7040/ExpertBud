import React from "react";
import Subsection_1 from "./Subsection_1";
import Subsection_2 from "./Subsection_2";
import Subsection_3 from "./Subsection_3";
import Subsection_4 from "./Subsection_4";

const HeroSecContent = () => {
  return (
    <div className="h-[60vh] md:h-[609px] ml-2 sm:ml-5 md:ml-12 lg:ml:27 xl:ml-40 space-y-7">
      <Subsection_1 />
      <Subsection_2 />
      <Subsection_3 />
      <Subsection_4 />
    </div>
  );
};

export default HeroSecContent;
