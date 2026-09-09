const About3 = () => {
  const features = [
    {
      number: "01",
      title: "Professional Team",
      description:
        "An experienced and competent team in business management.",
    },
    {
      number: "02",
      title: "Client Focused",
      description:
        "Solutions tailored to the needs and goals of every client.",
    },
    {
      number: "03",
      title: "Growth Oriented",
      description:
        "Helping businesses build stronger and more focused strategies.",
    },
    {
      number: "04",
      title: "Trusted Process",
      description:
        "A structured, transparent, and high-quality work process.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-darkslateblue">
      {/* Container */}
      <div className="mx-auto min-h-129.25max-w-[1440px] px-6 py-12 sm:px-8 lg:px-16">
        
        {/* ================= HEADER ================= */}
        <div className="text-center">
          <p className="text-sm font-medium text-white sm:text-base">
            WHY CHOOSE WIWEKA
          </p>

          <h2 className="mt-5 text-3xl font-medium leading-tight text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:text-4xl lg:text-[48px]">
            More Than A Service,
            <br />
            A Partnership.
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mx-auto mt-12 grid max-w-252.5 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card */}
          {features.map((feature) => (
            <div
              key={feature.number}
              className="relative h-49 w-full rounded-[15px] bg-white p-6 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_15px_rgba(0,0,0,0.25)]"
            >
              {/* Number */}
              <span className="absolute left-6 top-5 text-sm font-medium text-black">
                {feature.number}
              </span>

              {/* Content */}
              <div className="absolute left-6 top-21 right-5">
                <h3 className="text-sm font-medium text-black drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-3 text-xs font-medium leading-relaxed text-black drop-shadow-[0px_2px_4px_rgba(0,0,0,0.25)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About3;