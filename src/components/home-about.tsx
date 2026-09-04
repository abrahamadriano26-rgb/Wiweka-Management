const HomeAbout = () => {
  return (
    <section
      className="
        w-full
        bg-darkslateblue
        overflow-hidden
        flex flex-col
        items-center
        px-4
        sm:px-6
        md:px-10
        lg:px-20
        py-12
        sm:py-14
        md:py-16
        lg:py-18
        gap-12
        sm:gap-14
        md:gap-16
        lg:gap-20
        text-left
        text-white
        font-inter
      "
    >
      {/* Judul */}
      <h2
        className="
          w-full
          max-w-7xl
          relative
          font-bold
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-[48px]
          leading-[1.2]
          text-center
        "
      >
        Professional Solutions for Accounting, Tax, and Business Consulting
      </h2>

      {/* Deskripsi */}
      <div className="w-full max-w-7xl flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div
            className="
              w-full
              max-w-300
              relative
              font-sf-pro
              text-base
              sm:text-[17px]
              md:text-lg
              lg:text-xl
              leading-[1.7]
            "
          >
            Wiweka Management is a trusted partner in providing professional
            accounting, tax, and business consulting services for local and
            international companies, small and medium-sized enterprises
            (SMEs), and large corporations. We are committed to helping our
            clients manage their finances and fulfill their tax obligations
            accurately, efficiently, and in compliance with applicable
            regulations.

            <br />
            <br />

            Backed by a team of experienced and dedicated professionals, we
            deliver tailored solutions that meet the unique needs of every
            business. Our commitment to quality, reliability, and excellence
            enables our clients to focus on growing their businesses with
            confidence while we take care of their financial and compliance
            needs.

            <br />
            <br />

            Start your business journey with Wiweka Management and discover
            reliable solutions designed to support their long-term success.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;