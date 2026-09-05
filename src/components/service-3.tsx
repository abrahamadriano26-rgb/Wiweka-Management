const OurService3 = () => {
  return (
    <section
      className="
        w-full
        min-h-63.75

        bg-darkslateblue
        overflow-hidden

        flex
        flex-col
        items-center

        px-4
        sm:px-6
        md:px-8
        lg:px-12

        py-10
        sm:py-11
        md:py-12
        lg:py-12.5

        text-white
        font-inter
        text-center
      "
    >
      {/* ================= JUDUL ================= */}
      <h1
        className="
          m-0

          text-[1.75rem]
          sm:text-[2rem]
          md:text-[2.25rem]
          lg:text-[3rem]

          font-thin
          italic
          leading-[1.1]

          [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
        "
      >
        WHY CHOOSE WIWEKA MANAGEMENT?
      </h1>

      {/* ================= GARIS ================= */}
      <div
        className="
          mt-3
          sm:mt-4
          md:mt-5
          lg:mt-6

          w-35
          sm:w-40
          md:w-45
          lg:w-50

          h-0.5

          bg-white
          opacity-80
        "
      />

      {/* ================= SPACER ================= */}
      <div className="h-4 sm:h-5 md:h-6 lg:h-8" />

      {/* ================= DESKRIPSI ================= */}
      <p
        className="
          m-0

          max-w-150
          sm:max-w-175
          md:max-w-200
          lg:max-w-225

          text-[0.8125rem]
          sm:text-[0.875rem]
          md:text-[0.9375rem]
          lg:text-[1rem]

          font-normal
          leading-relaxed

          text-center
        "
      >
        We provide professional, reliable, and personalized business
        solutions to support your company&apos;s sustainable growth.
      </p>

      {/* ================= 3 POINT ================= */}
      <div
        className="
          mt-8
          sm:mt-9
          md:mt-10

          flex
          w-full
          max-w-317.5

          flex-row
          items-stretch
          justify-center
        "
      >
        {/* ================= PROFESSIONAL TEAM ================= */}
        <div
          className="
            flex
            w-1/3
            flex-col
            items-center
            gap-3

            px-4
            sm:px-6
            md:px-8
          "
        >
          <h3
            className="
              m-0

              text-[1rem]
              sm:text-[1.125rem]
              md:text-[1.25rem]

              font-semibold
              leading-[1.2]

              text-center
              text-white
            "
          >
            Professional Team
          </h3>

          <p
            className="
              m-0
              max-w-40
              sm:max-w-48
              md:max-w-56

              text-[0.8125rem]
              sm:text-[0.875rem]
              md:text-[0.9375rem]

              font-normal
              leading-relaxed

              text-center
              text-white/90
            "
          >
            Our experienced team is ready to provide the best solutions for
            your business.
          </p>
        </div>

        {/* ================= GARIS 1 ================= */}
        <div
          className="
            w-px
            shrink-0
            self-stretch
            bg-white
            opacity-70
          "
        />

        {/* ================= TRUSTED SERVICE ================= */}
        <div
          className="
            flex
            w-1/3
            flex-col
            items-center
            gap-3

            px-4
            sm:px-6
            md:px-8
          "
        >
          <h3
            className="
              m-0

              text-[1rem]
              sm:text-[1.125rem]
              md:text-[1.25rem]

              font-semibold
              leading-[1.2]

              text-center
              text-white
            "
          >
            Trusted Service
          </h3>

          <p
            className="
              m-0
              max-w-40
              sm:max-w-48
              md:max-w-56

              text-[0.8125rem]
              sm:text-[0.875rem]
              md:text-[0.9375rem]

              font-normal
              leading-relaxed

              text-center
              text-white/90
            "
          >
            We deliver reliable and accurate services tailored to your
            business needs.
          </p>
        </div>

        {/* ================= GARIS 2 ================= */}
        <div
          className="
            w-px
            shrink-0
            self-stretch
            bg-white
            opacity-70
          "
        />

        {/* ================= BUSINESS GROWTH ================= */}
        <div
          className="
            flex
            w-1/3
            flex-col
            items-center
            gap-3

            px-4
            sm:px-6
            md:px-8
          "
        >
          <h3
            className="
              m-0

              text-[1rem]
              sm:text-[1.125rem]
              md:text-[1.25rem]

              font-semibold
              leading-[1.2]

              text-center
              text-white
            "
          >
            Business Growth
          </h3>

          <p
            className="
              m-0
              max-w-40
              sm:max-w-48
              md:max-w-56

              text-[0.8125rem]
              sm:text-[0.875rem]
              md:text-[0.9375rem]

              font-normal
              leading-relaxed

              text-center
              text-white/90
            "
          >
            We support your business with strategic insights to achieve
            sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurService3;