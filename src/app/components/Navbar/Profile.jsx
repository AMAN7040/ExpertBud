import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center rounded-full  ">
      <div className="relative size-[clamp(40px,4.8vw,50px)]  ">
        <Image src="/profile.png" fill alt="Profile picture" />
      </div>
    </div>
  );
};

export default Profile;
