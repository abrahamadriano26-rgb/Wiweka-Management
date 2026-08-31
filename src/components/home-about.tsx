const HomeAbout = () => {
  return (
    <section className="w-full h-181.5 bg-darkslateblue overflow-hidden flex flex-col items-center py-11.75 px-20 box-border gap-15 text-left text-white font-inter">

      {/* Judul */}
      <div className="w-7xl relative font-bold text-[3rem]">
        Professional Solutions for Accounting, Tax, and Business Consulting
      </div>

      {/* Deskripsi */}
      <div className="self-stretch h-66 flex items-center justify-center">
        <div className="h-29.5 w-7xl flex items-center justify-center">
          <div className="w-325.5 relative inline-block shrink-0 font-sf-pro text-[1.25rem]">
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
            reliable solutions designed to support their long-term success
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeAbout;