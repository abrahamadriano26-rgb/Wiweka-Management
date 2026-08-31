const HomeReview = () => {
  return (
    <section className="w-full h-135.5 relative shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] bg-darkslateblue overflow-hidden text-left text-[16px] text-white font-inter">

      {/* Judul */}
      <h2 className="h-14.5 w-100.75 absolute top-11.25 left-[calc(50%-201px)] text-[48px] font-medium text-center inline-block [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] z-0">
        Customer Review
      </h2>

      {/* Garis */}
      <div className="h-px w-50 absolute top-40.25 left-[calc(50%-100px)] bg-white opacity-80 z-1" />

      {/* Review Card 1 */}
      <div className="absolute top-43 left-59 w-100 h-37.5 bg-white rounded-[15px] z-2">

        <div className="absolute top-4 left-2.5 w-95 h-12.5 font-semibold text-slateblue">
          Wiweka Management provides professional and responsive services.
          Their team has been incredibly helpful in managing our tax
          obligations and financial reporting. Highly recommended!
        </div>

        <b className="absolute top-4 -left-30.25 w-26 text-white">
          Budi Santoso
        </b>

        <div className="absolute top-11.75 -left-32 w-29.5 font-medium text-white">
          Director, PT Maju Bersama
        </div>

        {/* Rating */}
        <div className="absolute top-30.75 left-2.5 flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-[18px]">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Card 2 */}
      <div className="absolute top-85.75 left-59 w-100 h-37.5 bg-white rounded-[15px] z-3">

        <div className="absolute top-3.5 left-2.5 w-95 h-12.5 font-semibold text-slateblue">
          As an SME owner, I truly appreciate the accounting services provided
          by Wiweka Management. Their team explains everything clearly, and the
          entire process is efficient and hassle-free.
        </div>

        <b className="absolute top-3.5 -left-30.25 w-24.25 text-white">
          Dewi Lestari
        </b>

        <div className="absolute top-10 -left-32 w-29.5 font-medium text-white">
          Owner, Lestari Boutique
        </div>

        {/* Rating */}
        <div className="absolute top-30.75 left-2.5 flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-[18px]">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Card 3 */}
      <div className="absolute top-43 left-230.5 w-100 h-37.5 bg-white rounded-[15px] z-4">

        <div className="absolute top-4 left-4 w-95 h-12.5 font-semibold text-slateblue">
          The team at Wiweka Management is friendly, professional, and easy to
          communicate with. They helped us better understand our tax
          obligations while providing valuable advice for our business growth.
        </div>

        <b className="absolute top-4 -left-27.5 w-22 text-white">
          Sari Wijaya
        </b>

        <div className="absolute top-11.75 -left-30.5 w-29.5 font-medium text-white">
          Entrepreneur
        </div>

        {/* Rating */}
        <div className="absolute top-30.75 left-4 flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-[18px]">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Card 4 */}
      <div className="absolute top-86.5 left-230.5 w-100 h-37.5 bg-white rounded-[15px] z-5">

        <div className="absolute top-3 left-4 w-95 h-12.5 font-semibold text-slateblue">
          A trustworthy firm with an experienced team. We have complete peace
          of mind knowing that our accounting and tax matters are handled
          professionally.
        </div>

        <b className="absolute top-2 -left-27.5 w-26.5 text-white">
          Jonathan Lim
        </b>

        <div className="absolute top-8.5 -left-30.5 w-29.5 font-medium text-white">
          Business Owner
        </div>

        {/* Rating */}
        <div className="absolute top-30 left-4 flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-[18px]">
              ★
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HomeReview;