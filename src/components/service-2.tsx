import Image from "next/image";

const OurService2 = () => {
  return (
    <section
      className="
        w-full
        bg-white
        shadow-[inset_0_0.25rem_0.375rem_0.25rem_rgba(0,0,0,0.25)]
        overflow-hidden

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
      {/* ================= CARDS ================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-317.5

          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3

          gap-8

          justify-items-center
        "
      >
        {/* ================= ACCOUNTING ================= */}
        <div
          className="
            w-full
            max-w-67.5
            min-h-95

            rounded-[0.9375rem]
            bg-darkslateblue

            shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]

            overflow-hidden

            flex
            flex-col
          "
        >
          {/* PUTIH */}
          <div
            className="
              flex-1
              bg-white/70

              rounded-[0.9375rem]
              overflow-hidden

              flex
              flex-col
            "
          >
            {/* Gambar */}
            <Image
              src="/service 1.avif"
              alt="Accounting and Bookkeeping"
              width={270}
              height={160}
              className="
                w-full
                h-40
                object-cover
                shrink-0
              "
            />

            {/* Content */}
            <div
              className="
                flex
                flex-col
                items-center
                gap-3

                px-4
                pt-3.5
                pb-4.5
              "
            >
              {/* Judul */}
              <h3
                className="
                  text-[1rem]
                  font-semibold
                  leading-[1.2]

                  text-center
                  text-black
                "
              >
                Accounting and Bookkeeping
              </h3>

              {/* Deskripsi */}
              <p
                className="
                  text-[0.8125rem]
                  font-semibold
                  leading-normal

                  text-center
                  text-black
                "
              >
                We provide professional accounting and bookkeeping services to
                help businesses manage financial records, monitor transactions,
                and prepare accurate financial reports.
              </p>
            </div>
          </div>

          {/* BIRU BAWAH */}
          <div className="h-6 shrink-0 bg-darkslateblue" />
        </div>

        {/* ================= TAX ================= */}
        <div
          className="
            w-full
            max-w-67.5
            min-h-95

            rounded-[0.9375rem]
            bg-darkslateblue

            shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]

            overflow-hidden

            flex
            flex-col
          "
        >
          {/* PUTIH */}
          <div
            className="
              flex-1
              bg-white/70

              rounded-[0.9375rem]
              overflow-hidden

              flex
              flex-col
            "
          >
            {/* Gambar */}
            <Image
              src="/service 2.avif"
              alt="Tax Planning and Reporting"
              width={270}
              height={153}
              className="
                w-full
                h-38.25
                object-cover
                shrink-0
              "
            />

            {/* Content */}
            <div
              className="
                flex
                flex-col
                items-center
                gap-3

                px-4
                pt-3.5
                pb-4.5
              "
            >
              {/* Judul */}
              <h3
                className="
                  text-[1rem]
                  font-semibold
                  leading-[1.2]

                  text-center
                  text-black
                "
              >
                Tax Planning and Reporting
              </h3>

              {/* Deskripsi */}
              <p
                className="
                  text-[0.8125rem]
                  font-semibold
                  leading-normal

                  text-center
                  text-black
                "
              >
                We assist businesses with tax planning, calculation,
                administration, and reporting to help ensure that tax
                obligations are managed properly and efficiently.
              </p>
            </div>
          </div>

          {/* BIRU BAWAH */}
          <div className="h-6 shrink-0 bg-darkslateblue" />
        </div>

        {/* ================= BUSINESS CONSULTING ================= */}
        <div
          className="
            w-full
            max-w-67.5
            min-h-95

            rounded-[0.9375rem]
            bg-darkslateblue

            shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]

            overflow-hidden

            flex
            flex-col
          "
        >
          {/* PUTIH */}
          <div
            className="
              flex-1
              bg-white/70

              rounded-[0.9375rem]
              overflow-hidden

              flex
              flex-col
            "
          >
            {/* Gambar */}
            <Image
              src="/service 3.avif"
              alt="Business Consulting and Audit Support"
              width={270}
              height={153}
              className="
                w-full
                h-38.25
                object-cover
                shrink-0
              "
            />

            {/* Content */}
            <div
              className="
                flex
                flex-col
                items-center
                gap-3

                px-4
                pt-3.5
                pb-4.5
              "
            >
              {/* Judul */}
              <h3
                className="
                  text-[1rem]
                  font-semibold
                  leading-[1.2]

                  text-center
                  text-black
                "
              >
                Business Consulting and
                <br />
                Audit Support
              </h3>

              {/* Deskripsi */}
              <p
                className="
                  text-[0.8125rem]
                  font-semibold
                  leading-normal

                  text-center
                  text-black
                "
              >
                We provide professional business consultation and audit
                support to help companies improve performance, make informed
                decisions, and overcome business challenges.
              </p>
            </div>
          </div>

          {/* BIRU BAWAH */}
          <div className="h-6 shrink-0 bg-darkslateblue" />
        </div>
      </div>
    </section>
  );
};

export default OurService2;
