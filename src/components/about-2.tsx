"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const About2 = () => {
  const router = useRouter();

  const onContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="w-full overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:gap-20">
        
        {/* IMAGE */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-[50px] md:h-[368px] md:w-[368px]">
            <Image
              src="/Logo about.png"
              alt="WIWEKA Management"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 368px, 368px"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-1/2">
          
          {/* WHO WE ARE */}
          <p className="mb-5 text-[14px] font-medium text-[#2D4AA2]">
            WHO WE ARE
          </p>

          {/* TITLE */}
          <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-black md:text-[48px]">
            Building Stronger
            <br />
            <span className="text-[#2D4AA2]">
              Businesses Together.
            </span>
          </h2>

          {/* DESCRIPTION 1 */}
          <p className="mt-7 text-[15px] font-light leading-[25px] text-gray-700 md:text-[16px]">
            WIWEKA Management is a professional partner that helps companies
            manage financial, tax, audit, and business development needs.
          </p>

          {/* DESCRIPTION 2 */}
          <p className="mt-5 text-[15px] font-light leading-[25px] text-gray-700 md:text-[16px]">
            We combine experience, accuracy, innovation, and an understanding
            of business needs to provide relevant and sustainable solutions.
          </p>

          {/* FEATURES */}
          <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 text-[14px] font-medium text-black sm:grid-cols-2">
            <p>✓ Professional Team</p>
            <p>✓ Transparent Process</p>
            <p>✓ Accurate Solution</p>
            <p>✓ Long-Term Partnership</p>
          </div>

          {/* CONTACT BUTTON */}
          <button
            type="button"
            onClick={onContactClick}
            className="mt-8 h-10 w-[140px] rounded-[5px] bg-[#2D4AA2] text-[14px] font-medium text-white transition duration-200 hover:bg-[#243d88] hover:shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About2;