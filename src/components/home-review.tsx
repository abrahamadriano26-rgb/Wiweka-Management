const HomeReview = () => {
  const reviews = [
    {
      name: "Budi Santoso",
      position: "Director, PT Maju Bersama",
      review:
        "Wiweka Management provides professional and responsive services. Their team has been incredibly helpful in managing our tax obligations and financial reporting. Highly recommended!",
    },
    {
      name: "Dewi Lestari",
      position: "Owner, Lestari Boutique",
      review:
        "As an SME owner, I truly appreciate the accounting services provided by Wiweka Management. Their team explains everything clearly, and the entire process is efficient and hassle-free.",
    },
    {
      name: "Sari Wijaya",
      position: "Entrepreneur",
      review:
        "The team at Wiweka Management is friendly, professional, and easy to communicate with. They helped us better understand our tax obligations while providing valuable advice for our business growth.",
    },
    {
      name: "Jonathan Lim",
      position: "Business Owner",
      review:
        "A trustworthy firm with an experienced team. We have complete peace of mind knowing that our accounting and tax matters are handled professionally.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-darkslateblue
        shadow-[inset_0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
        overflow-hidden
        text-white
        font-inter

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
      {/* ================= JUDUL ================= */}
      <div className="w-full flex flex-col items-center">
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-11
            lg:text-5xl

            font-medium
            text-center
            leading-[1.2]

            [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
          "
        >
          Customer Review
        </h2>

        {/* Garis */}
        <div
          className="
            w-40
            sm:w-48
            md:w-50

            h-px

            bg-white
            opacity-80

            mt-7
            sm:mt-8
            md:mt-9
          "
        />
      </div>

      {/* ================= REVIEWS ================= */}
      <div
        className="
          w-full
          max-w-300
          mx-auto

          mt-10
          sm:mt-12
          md:mt-14

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-8
          md:gap-10
          lg:gap-x-16
          lg:gap-y-12
        "
      >
        {reviews.map((item) => (
          <div
            key={item.name}
            className="
              w-full

              flex
              flex-col
              sm:flex-row

              items-stretch
              sm:items-center

              gap-4
              sm:gap-6

              mx-auto
            "
          >
            {/* ================= NAMA ================= */}
            <div
              className="
                w-full
                sm:w-32
                md:w-36
                lg:w-32

                shrink-0

                text-center
                sm:text-left
              "
            >
              <b
                className="
                  block
                  text-base
                  md:text-4.25
                  leading-[1.3]
                "
              >
                {item.name}
              </b>

              <span
                className="
                  block
                  mt-2

                  text-sm
                  md:text-3.75

                  leading-[1.4]
                  font-medium
                "
              >
                {item.position}
              </span>
            </div>

            {/* ================= CARD ================= */}
            <div
              className="
                w-full

                min-h-48
                md:min-h-52

                bg-white
                rounded-3.75

                shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.25)]

                p-4
                sm:p-5
                md:p-6

                flex
                flex-col
                justify-between
              "
            >
              {/* Review */}
              <p
                className="
                  text-sm
                  sm:text-3.75
                  md:text-base

                  leading-normal

                  font-semibold
                  text-slateblue
                "
              >
                {item.review}
              </p>

              {/* Rating */}
              <div className="flex items-center mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="
                      text-yellow-400
                      text-lg
                      md:text-xl
                    "
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeReview;