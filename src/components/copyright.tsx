import type { NextPage } from "next";
import Image from "next/image";

const Copyright: NextPage = () => {
  return (
    <div className="w-full h-42.5 relative bg-white overflow-hidden text-left text-[14px] text-black font-inter">

      {/* Copyright */}
      <div className="absolute top-33.25 left-144 text-[12px] inline-block w-85.25 h-7.5">
        © 2026 Wiweka Management. All Rights Reserved.
      </div>

      {/* Email */}
      <div className="absolute top-5.5 left-281 flex items-center gap-2">
        <Image
          src="/Email.jpg"
          alt="Email"
          width={21}
          height={21}
          className="h-5.25 w-5.25 relative object-cover"
        />

        <div className="h-3.75 w-59.5 relative inline-block shrink-0">
          contact@wiweka-management.com
        </div>
      </div>

      {/* Phone */}
      <div className="absolute top-11.25 left-281 flex items-center gap-1.25">
        <Image
          src="/Telepon.jpg"
          alt="Phone"
          width={26}
          height={26}
          className="h-6.5 w-6.5 relative object-cover"
        />

        <div className="h-3.25 w-30.75 relative inline-block shrink-0">
          +62 8123 871353
        </div>
      </div>

      {/* Company Name */}
      <div className="absolute top-7 left-22.25 text-[18px]">
        WIWEKA MANAGEMENT
      </div>

      {/* Description */}
      <div className="absolute top-14.5 left-22.25">
        Professional business management solutions for sustainable growth.
      </div>

      {/* Divider */}
      <div className="absolute top-[128.5px] left-[548.5px] border-black border-solid border-t box-border w-85.75 h-px transform-[rotate(-0.2deg)] origin-top-left opacity-25" />

    </div>
  );
};

export default Copyright;