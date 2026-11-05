
import Image from "next/image";

const services = [
  {
    title: "Accounting and Bookkeeping",
    description:
      "We help businesses manage financial records, transactions, and accurate financial reports.",
    image: "/images/accounting.jpg",
    alt: "Accounting and bookkeeping",
  },
  {
    title: "Tax Planning and Reporting",
    description:
      "We assist with tax planning, calculation, administration, and reporting.",
    image: "/images/tax.jpg",
    alt: "Tax planning and reporting",
  },
  {
    title: "Business Consulting and Audit Support",
    description:
      "We help businesses improve performance, make informed decisions, and overcome challenges.",
    image: "/images/consulting.jpg",
    alt: "Business consulting and audit support",
  },
];

export default function OurServiceDesktop1() {
  return (
    <section
      id="services"
      className="service-section relative isolate w-full overflow-hidden bg-white px-6 py-16 font-inter sm:px-10 lg:min-h-[657px] lg:px-20 lg:py-8"
    >
      {/* Decorative animated circles */}
      <div
        aria-hidden="true"
        className="service-circle service-circle-one"
      />

      <div
        aria-hidden="true"
        className="service-circle service-circle-two"
      />

      <div
        aria-hidden="true"
        className="service-circle service-circle-three"
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-10 max-w-[1120px] text-center">
        <h2 className="text-3xl font-medium text-black sm:text-4xl">
          Our <span className="text-[#4411ff]">Service</span>
        </h2>
      </div>

      {/* Service cards */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="service-card group relative min-h-[400px] overflow-hidden rounded-[15px] bg-[linear-gradient(180deg,#005299_13.94%,#00aeff_100%)] shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Image */}
            <div className="relative h-[168px] w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 360px"
                className="service-card-image object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-[25px] pb-8 pt-5 sm:px-[30px]">
              <h3 className="min-h-[54px] text-center text-lg font-medium leading-7 text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-6 text-white/95">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
