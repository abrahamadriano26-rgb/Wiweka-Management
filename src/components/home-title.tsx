
import Image from "next/image";

export default function HomeTitle() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[906px] w-full overflow-hidden bg-[radial-gradient(271.69%_141.42%_at_100%_0%,_#111c3c,_#114dff)] text-left text-lavender"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />

      {/* Main container */}
      <div className="relative mx-auto min-h-[906px] max-w-[1440px] px-6 md:px-10 lg:px-20">

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-start justify-center py-20 lg:block lg:min-h-[906px] lg:py-0">

          {/* Main heading */}
          <h1 className="animate-fade-up mb-6 max-w-[759px] font-inter text-[38px] font-bold leading-[1.2] tracking-tight text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] sm:text-5xl lg:absolute lg:left-0 lg:top-[271px] lg:mb-0 lg:text-[54px]">
            We provide{" "}
            <span className="text-deepskyblue">
              expert management of accounting and tax
            </span>{" "}
            for businesses and individuals.
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-[641px] text-base leading-8 text-lavender sm:text-lg lg:absolute lg:left-0 lg:top-[575px] lg:mb-0 lg:text-xl">
            At Wiweka Management, we provide reliable accounting, tax, and
            business consulting solutions tailored to your business needs.
            Our experienced team helps you stay compliant, manage your
            finances efficiently, and move forward with confidence.
          </p>

          {/* Mobile image */}
          <div className="relative mt-2 h-[420px] w-full max-w-[439px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[520px] lg:hidden">
            <Image
              src="/images/wiweka-office.jpg"
              alt="Wiweka Management"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 439px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Desktop image */}
        <div className="absolute right-10 top-[75px] hidden h-[659px] w-[min(36%,439px)] overflow-hidden rounded-[10px] border border-white/10 shadow-[0px_20px_60px_rgba(0,0,0,0.3)] lg:block xl:right-[50px]">
          <Image
            src="/images/wiweka-office.jpg"
            alt="Wiweka Management"
            fill
            priority
            sizes="(min-width: 1024px) 439px, 36vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}
