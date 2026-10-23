const AboutTitle = () => {
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
      {/* LABEL */}
      <b
        className="
          text-[0.875rem]
          sm:text-[1rem]
          md:text-[1.0625rem]
          lg:text-[1.125rem]

          leading-[1.2]
        "
      >
        ABOUT WIWEKA
      </b>

      {/* MAIN TITLE */}
      <h1
        className="
          w-full
          max-w-225

          mt-6
          sm:mt-7
          md:mt-8
          lg:mt-9

          text-[2.25rem]
          sm:text-[2.75rem]
          md:text-[3.25rem]
          lg:text-[4rem]

          font-bold
          leading-[1.15]

          [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
        "
      >
        Your Trusted Partner For
        <br />
        Business Growth.
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          w-full
          max-w-175

          mt-6
          sm:mt-7
          md:mt-8
          lg:mt-9

          px-2

          text-[0.8125rem]
          sm:text-[0.875rem]
          md:text-[0.9375rem]
          lg:text-[1rem]

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
