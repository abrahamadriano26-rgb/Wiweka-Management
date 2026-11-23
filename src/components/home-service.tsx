
import Image from "next/image";

const services = [
  {
    category: "ACCOUNTING",
    title: "Accounting and Bookkeeping",
    description:
      "We help businesses manage financial records, transactions, and accurate financial reports.",
    image: "/images/accounting.jpg",
    alt: "Accounting and bookkeeping services",
  },
  {
    category: "TAX SERVICES",
    title: "Tax Planning and Reporting",
    description:
      "We assist with tax planning, calculation, administration, and reporting.",
    image: "/images/tax.jpg",
    alt: "Tax planning and reporting services",
  },
  {
    category: "BUSINESS ADVISORY",
    title: "Business Consulting and Audit Support",
    description:
      "We help businesses improve performance, make informed decisions, and overcome challenges.",
    image: "/images/consulting.jpg",
    alt: "Business consulting services",
  },
];

export default function OurServiceDesktop() {
  return (
    <section
      id="services"
      className="service-section w-full bg-aliceblue px-6 py-12 text-steelblue sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-7">

        {/* SECTION HEADING */}
        <div className="flex flex-col items-start gap-3">
          <p className="text-xs font-semibold tracking-[2px] leading-[18px]">
            WHAT WE DO
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-1.5px] text-midnightblue sm:text-5xl">
            Our Service
          </h2>

          <p className="text-base leading-7 text-slategray sm:text-lg">
            Practical expertise. A stronger foundation for your business.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.category}
              className="service-card flex min-w-0 flex-col overflow-hidden rounded-[20px] bg-white"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* IMAGE */}
              <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col items-start gap-3 p-6">
                <p className="text-[11px] font-semibold leading-[18px] tracking-[1.2px] text-steelblue">
                  {service.category}
                </p>

                <h3 className="min-h-[56px] text-[22px] font-semibold leading-7 text-midnightblue">
                  {service.title}
                </h3>

                <p className="min-h-[72px] text-base leading-6 text-slategray">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-start justify-between gap-5 pt-2 sm:flex-row sm:items-center">
          <p className="text-sm font-medium leading-[22px] text-slategray">
            Accounting. Tax. Business advisory.
          </p>

          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-midnightblue px-7 py-3 text-sm font-semibold text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-steelblue"
          >
            Read more
          </a>
        </div>

      </div>
    </section>
  );
}
