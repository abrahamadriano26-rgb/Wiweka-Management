import type { NextPage } from "next";
import Link from "next/link";

const CustomerReview3: NextPage = () => {
  return (
    <section
      className="
        w-full
        min-h-57.75
        bg-darkslateblue
        overflow-hidden

        flex
        flex-col
        items-center
        justify-center

        text-center

        px-4
        sm:px-6
        md:px-8

        py-15
        sm:py-17.5
        md:py-20

        text-white
        font-inter
      "
    >
      {/* Title */}
      <h2
        className="
          m-0

          text-[24px]
          sm:text-[28px]
          md:text-[32px]
          lg:text-[36px]

          font-medium
          leading-[1.2]

          [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]
        "
      >
        Ready to Build Your Success With Us?
      </h2>

      {/* Description */}
      <p
        className="
          m-0

          mt-7
          sm:mt-7.5
          md:mt-8

          max-w-[320px]
          sm:max-w-125
          md:max-w-175

          text-[13px]
          sm:text-[14px]
          md:text-[15px]

          font-medium
          leading-normal
        "
      >
        Get professional support tailored to your accounting, tax, and
        business needs.
      </p>

      {/* Consultation Button */}
      <Link
        href="/consultation"
        className="
          mt-10
          sm:mt-11
          md:mt-12

          min-w-47.5
          sm:min-w-52.5
          md:min-w-57.5

          min-h-12.5
          sm:min-h-13
          md:min-h-13.5

          rounded-[15px]
          bg-white

          px-7
          sm:px-8
          md:px-9

          py-3.5
          sm:py-3.75
          md:py-4

          flex
          items-center
          justify-center

          text-[14px]
          sm:text-[14px]
          md:text-[15px]

          font-semibold
          text-slateblue!
          text-center
          no-underline

          shadow-[0_2px_4px_rgba(0,0,0,0.15)]

          transition-all
          duration-200

          hover:scale-[1.03]
          hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]

          active:scale-[0.98]

          cursor-pointer
          whitespace-nowrap
        "
      >
        Start a consultation
      </Link>
    </section>
  );
};

export default CustomerReview3;