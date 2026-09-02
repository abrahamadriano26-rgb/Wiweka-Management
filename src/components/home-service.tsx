import Image from "next/image";

const HomeService = () => {
  return (
    <section
      className="
        w-full
        bg-white
        shadow-[inset_0_0.25rem_0.375rem_0.25rem_rgba(0,0,0,0.25)]
        overflow-hidden

        text-center
        text-black
        font-inter

        py-10
        sm:py-12
        md:py-14
        lg:py-16

        px-4
        sm:px-6
        md:px-8
        lg:px-12
      "
    >

      {/* ================= JUDUL ================= */}
      <h2
        className="
          mb-10
          sm:mb-12
          md:mb-14
          lg:mb-12

          text-8
          sm:text-10
          md:text-12
          lg:text-12

          font-bold
          leading-tight

          [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
        "
      >
        Our Service
      </h2>


      {/* ================= CARDS ================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-80
          sm:max-w-160
          md:max-w-176
          lg:max-w-317.5

          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3

          gap-6
          sm:gap-8
          lg:gap-8

          justify-items-center
        "
      >

        {/* ================= ACCOUNTING ================= */}
        <div
          className="
            relative
            w-full
            max-w-64
            sm:max-w-67.5

            h-76
            sm:h-77

            rounded-3.75
            bg-darkslateblue

            shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]

            overflow-hidden
          "
        >
          {/* Background */}
          <div
            className="
              absolute
              top-0
              left-0

              w-full
              h-full

              bg-white/70
              rounded-3.75

              z-0
            "
          />

          {/* Image */}
          <Image
            src="/service 1.avif"
            alt="Accounting and Bookkeeping"
            width={270}
            height={160}
            className="
              absolute
              top-0
              left-0

              w-full
              h-40

              rounded-3.75

              object-cover
              z-10
            "
          />

          {/* Title */}
          <h3
            className="
              absolute
              top-41.25
              left-4
              right-4

              text-4
              font-semibold
              leading-tight
              text-left
              text-black

              z-20
            "
          >
            Accounting and Bookkeeping
          </h3>

          {/* Description */}
          <p
            className="
              absolute
              top-52
              left-3
              right-3

              text-3.25
              sm:text-3.25

              font-semibold
              leading-[1.35]

              text-black

              z-20
            "
          >
            We provide professional accounting and bookkeeping services to help
            businesses manage financial records, monitor transactions, and
            prepare accurate financial reports.
          </p>
        </div>


        {/* ================= TAX ================= */}
        <div
          className="
            relative
            w-full
            max-w-64
            sm:max-w-67.5

            h-76
            sm:h-77

            rounded-3.75
            bg-darkslateblue

            shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]

            overflow-hidden
          "
        >
          {/* Background */}
          <div
            className="
              absolute
              top-0
              left-0

              w-full
              h-full

              bg-white/70
              rounded-3.75

              z-0
            "
          />

          {/* Image */}
          <Image
            src="/service 2.avif"
            alt="Tax Planning and Reporting"
            width={270}
            height={153}
            className="
              absolute
              top-0
              left-0

              w-full
              h-38.25

              rounded-3.75

              object-cover
              z-10
            "
          />

          {/* Title */}
          <h3
            className="
              absolute
              top-41.25
              left-4
              right-4

              text-4
              font-semibold
              leading-tight
              text-left
              text-black

              z-20
            "
          >
            Tax Planning and Reporting
          </h3>

          {/* Description */}
          <p
            className="
              absolute
              top-52
              left-3
              right-3

              text-3.25

              font-semibold
              leading-[1.35]

              text-black

              z-20
            "
          >
            We assist businesses with tax planning, calculation, administration,
            and reporting to help ensure that tax obligations are managed
            properly and efficiently.
          </p>
        </div>


        {/* ================= BUSINESS CONSULTING ================= */}
        <div
          className="
            relative
            w-full
            max-w-64
            sm:max-w-67.5

            h-76
            sm:h-77

            rounded-3.75
            bg-darkslateblue

            shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]

            overflow-hidden
          "
        >
          {/* Background */}
          <div
            className="
              absolute
              top-0
              left-0

              w-full
              h-full

              bg-white/70
              rounded-3.75

              z-0
            "
          />

          {/* Image */}
          <Image
            src="/service 3.avif"
            alt="Business Consulting and Audit Support"
            width={270}
            height={153}
            className="
              absolute
              top-0
              left-0

              w-full
              h-38.25

              rounded-3.75

              object-cover
              z-10
            "
          />

          {/* Title */}
          <h3
            className="
              absolute
              top-41.25
              left-4
              right-4

              text-4
              font-semibold
              leading-tight
              text-left
              text-black

              z-20
            "
          >
            Business Consulting and
            <br />
            Audit Support
          </h3>

          {/* Description */}
          <p
            className="
              absolute
              top-52
              left-3
              right-3

              text-3.25

              font-semibold
              leading-[1.35]

              text-black

              z-20
            "
          >
            We provide professional business consultation and audit support to
            help companies improve performance, make informed decisions, and
            overcome business challenges.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HomeService;
