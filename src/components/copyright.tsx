import Image from "next/image";

const Copyright = () => {
  return (
    <footer
      className="
        w-full
        bg-white
        overflow-hidden
        text-black
        font-inter
        px-4
        sm:px-8
        md:px-12
        lg:px-20
        pt-10
        sm:pt-12
        md:pt-14
        pb-6
      "
    >
      {/* Main Footer */}
<div
  className="
    w-full
    max-w-7xl
    mx-auto
    flex
    flex-col
    md:flex-row
    md:justify-between
    md:items-start
    gap-8
    md:gap-16
    lg:gap-32
  "
>
  {/* Company */}
  <div className="flex flex-col md:flex-1">
    <div className="text-4.5 sm:text-5 font-medium">
      WIWEKA MANAGEMENT
    </div>

    <p className="mt-3 max-w-140 text-3.5 sm:text-3.75 leading-normal">
      Professional business management solutions for sustainable growth.
    </p>
  </div>

  {/* Contact */}
  <div
    className="
      flex
      flex-col
      gap-3
      md:w-80
      lg:w-88
      shrink-0
    "
  >
    {/* Email */}
    <div className="flex items-center gap-2">
      <Image
        src="/Email.jpg"
        alt="Email"
        width={21}
        height={21}
        className="w-5.25 h-5.25 object-cover shrink-0"
      />

      <span className="text-3.5 sm:text-3.75">
        contact@wiweka-management.com
      </span>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-2">
      <Image
        src="/Telepon.jpg"
        alt="Phone"
        width={26}
        height={26}
        className="w-6.5 h-6.5 object-cover shrink-0"
      />

      <span className="text-3.5 sm:text-3.75">
        +62 8123 871353
      </span>
    </div>
  </div>
</div>

      {/* Divider */}
      <div className="w-full max-w-214 mx-auto mt-10 border-t border-black opacity-25" />

      {/* Copyright */}
      <div className="w-full text-center mt-5 text-3 sm:text-3.25">
        © 2026 Wiweka Management. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Copyright;