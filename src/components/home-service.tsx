import Image from "next/image";

const HomeService = () => {
  return (
    <section className="w-full h-117.25 relative bg-white shadow-[inset_0_4px_6px_4px_rgba(0,0,0,0.25)] overflow-hidden text-center text-[13px] text-black font-inter">

      {/* Judul */}
      <h2 className="absolute top-[2.99%] left-[40.63%] text-5xl font-bold text-left [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
        Our Service
      </h2>

      {/* Card Accounting */}
      <div className="absolute top-24.5 left-44.25 w-67.5 h-76.75 rounded-[15px] bg-darkslateblue shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">

        {/* Layer putih transparan */}
        <div className="absolute top-0 left-0 w-full h-70.75 bg-white/70 rounded-[15px] z-0" />

        {/* Gambar */}
        <Image
          src="/service 1.avif"
          alt="Accounting and Bookkeeping"
          width={270}
          height={160}
          className="absolute top-0 left-0 w-67.5 h-40 rounded-[15px] object-cover z-10"
        />

        {/* Judul */}
        <h3 className="absolute top-41.25 left-5.75 text-base font-semibold text-left text-black z-20">
          Accounting and Bookkeeping
        </h3>

        {/* Deskripsi */}
        <p className="absolute top-52 left-2.75 w-61.75 font-semibold text-black z-20">
          We provide professional accounting and bookkeeping services to help
          businesses manage financial records, monitor transactions, and
          prepare accurate financial reports.
        </p>
      </div>

      {/* Card Tax */}
      <div className="absolute top-24.5 left-146.25 w-67.5 h-76.75 rounded-[15px] bg-darkslateblue shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">

        {/* Layer putih transparan */}
        <div className="absolute top-0 left-0 w-full h-70.75 bg-white/70 rounded-[15px] z-0" />

        {/* Gambar */}
        <Image
          src="/service 2.avif"
          alt="Tax Planning and Reporting"
          width={270}
          height={153}
          className="absolute top-0 left-0 w-67.5 h-38.25 rounded-[15px] object-cover z-10"
        />

        {/* Judul */}
        <h3 className="absolute top-41.25 left-7.5 text-base font-semibold text-left text-black z-20">
          Tax Planning and Reporting
        </h3>

        {/* Deskripsi */}
        <p className="absolute top-52 left-0.75 w-66 font-semibold text-black z-20">
          We assist businesses with tax planning, calculation, administration,
          and reporting to help ensure that tax obligations are managed
          properly and efficiently.
        </p>
      </div>

      {/* Card Business Consulting */}
      <div className="absolute top-24.5 left-248.25 w-67.5 h-76.75 rounded-[15px] bg-darkslateblue shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">

        {/* Layer putih transparan */}
        <div className="absolute top-0 left-0 w-full h-70.75 bg-white/70 rounded-[15px] z-0" />

        {/* Gambar */}
        <Image
          src="/service 3.avif"
          alt="Business Consulting and Audit Support"
          width={270}
          height={153}
          className="absolute top-0 left-0 w-67.5 h-38.25 rounded-[15px] object-cover z-10"
        />

        {/* Judul */}
        <h3 className="absolute top-41.25 left-9.5 text-base font-semibold leading-none">
          Business Consulting and 
          <br />
          Audit Support
        </h3>

        {/* Deskripsi */}
        <p className="absolute top-52 left-2.75 w-61.75 font-semibold text-black z-20">
          We provide professional business consultation and audit support to help companies improve performance, make informed decisions, and overcome business challenges.
        </p>
      </div>
    </section>
  );
};

export default HomeService;