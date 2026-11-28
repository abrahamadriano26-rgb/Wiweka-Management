
"use client";

const reviews = [
  {
    initials: "BS",
    name: "Budi Santoso",
    role: "Small Business Owner",
    review:
      "Wiweka Management provides professional and responsive services. Their team has been incredibly helpful in managing our tax obligations and financial reporting. Highly recommended!",
  },
  {
    initials: "FN",
    name: "Fajar Nugroho",
    role: "Entrepreneur",
    review:
      "The team made our accounting process much easier to manage. Their explanations are clear, and the support we receive has been very helpful for our business.",
  },
  {
    initials: "AP",
    name: "Adhi Pratama",
    role: "Company Director",
    review:
      "We appreciate their attention to detail and professional approach. Their financial reporting services have helped us maintain better records and make informed decisions.",
  },
  {
    initials: "FL",
    name: "Feni Lestari",
    role: "Business Consultant",
    review:
      "Working with Wiweka Management has been a positive experience. The team is responsive, organized, and always willing to help us understand our financial needs.",
  },
];

export default function CustomerReview() {
  return (
    <section
      id="customer-review"
      className="customer-review-section w-full px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">

        {/* HEADER */}
        <div className="flex flex-col items-start gap-3">
          <p className="font-inter text-num-12 font-semibold tracking-[2.2px] leading-num-18 text-skyblue">
            CLIENT EXPERIENCES
          </p>

          <h2 className="font-inter text-[38px] font-semibold tracking-[-1.5px] leading-[1.2] text-white sm:text-[48px]">
            Customer{" "}
            <span className="text-skyblue">
              Review
            </span>
          </h2>

          <p className="font-inter text-[16px] leading-7 text-lavender-300 sm:text-[18px]">
            A little peace of mind. In our clients’ own words.
          </p>
        </div>

        {/* REVIEW CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((item, index) => (
            <article
              key={item.initials}
              className={`customer-review-card flex min-w-0 flex-col gap-6 ${
                index === 0 ? "bg-aliceblue-100" : "bg-white"
              }`}
            >
              {/* RATING */}
              <div
                className="font-inter text-[19px] leading-6 tracking-[3px] text-darkgoldenrod"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>

              {/* REVIEW TEXT */}
              <p className="min-h-[234px] font-inter text-[16px] leading-[26px] text-darkslateblue">
                {item.review}
              </p>

              {/* DIVIDER */}
              <div className="h-px w-full shrink-0 bg-lavender-200" />

              {/* CUSTOMER */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full ${
                    index === 0 ? "bg-lightblue" : "bg-aliceblue-200"
                  }`}
                >
                  <span className="font-inter text-num-13 font-semibold leading-num-18 text-midnightblue">
                    {item.initials}
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <p className="font-inter text-[14px] font-semibold leading-num-20 text-darkslateblue">
                    {item.name}
                  </p>

                  <p className="font-inter text-num-12 leading-num-18 text-slategray">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-start justify-between gap-3 text-num-13 text-lavender-100 sm:flex-row sm:items-center">
          <p className="font-inter font-semibold leading-num-20">
            Wiweka Management
          </p>

          <p className="font-inter leading-num-20 text-lavender-300 sm:text-right">
            Tax / Accounting / Financial reporting
          </p>
        </div>

      </div>
    </section>
  );
}
