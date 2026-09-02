import type { NextPage } from "next";

const AboutTitle: NextPage = () => {
  return (
    <section
      className="
        w-full
        min-h-84
        bg-darkslateblue
        overflow-hidden
        text-center
        text-white
        font-inter
        flex
        flex-col
        items-center
        px-4
        sm:px-6
        md:px-12
        lg:px-20
        py-14
        sm:py-16
        md:py-18
        lg:py-20
      "
    >
      {/* Label */}
      <b
        className="
          text-3.5
          sm:text-4
          md:text-4.25
          leading-[1.2]
        "
      >
        ABOUT WIWEKA
      </b>

      {/* Main Title */}
      <h1
        className="
          w-full
          max-w-225
          mt-6
          sm:mt-7
          md:mt-8
          lg:mt-9
          text-8
          sm:text-11
          md:text-13
          lg:text-16
          font-bold
          leading-[1.15]
          [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
        "
      >
        Your Trusted Partner For
        <br />
        Business Growth.
      </h1>

      {/* Description */}
      <p
        className="
          w-full
          max-w-175
          mt-6
          sm:mt-7
          md:mt-8
          lg:mt-9
          px-2
          text-3.5
          sm:text-4
          md:text-4.25
          lg:text-4.5
          leading-[1.6]
          [text-shadow:0_0.125rem_0.25rem_rgba(0,0,0,0.25)]
        "
      >
        Learn about WIWEKA Management and our commitment to supporting
        business growth.
      </p>
    </section>
  );
};

export default AboutTitle;