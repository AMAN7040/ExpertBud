import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center space-x-0.5">
        <div className="relative w-7.5 h-8 md:w-9 md:h-10 lg:w-10.5 lg:h-11">
          <Image src="/Logoimg.png" fill alt="Picture of the Logo" />
        </div>

        <div className="hidden sm:block relative w-20 lg:w-25.5 h-5.5">
          <Image src="/Logoname.png" fill alt="Picture of the Brand Name" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
