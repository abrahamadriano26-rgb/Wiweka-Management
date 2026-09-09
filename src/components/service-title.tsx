const OurServiceTitle = () => {
  return (
    <section
      className="
        w-full
        min-h-63.75

        bg-darkslateblue
        overflow-hidden

        flex
        flex-col
        items-center

        px-4
        sm:px-6
        md:px-8
        lg:px-12

        py-10
        sm:py-11
        md:py-12
        lg:py-12.5

        text-white
        font-inter
        text-center
      "
    >
      {/* JUDUL */}
      <h1
        className="
          m-0

          text-[2.25rem]
          sm:text-[2.5rem]
          md:text-[2.8125rem]
          lg:text-[4rem]

          font-bold
          leading-[1.1]

          [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]
        "
      >
        Our Service
      </h1>

      {/* SPACER */}
      <div className="h-3 sm:h-4 md:h-5 lg:h-6" />

      {/* GARIS */}
      <div
        className="
          w-35
          sm:w-40
          md:w-45
          lg:w-50

          h-0.5

          bg-white
          opacity-80
        "
      />

      {/* SPACER */}
      <div className="h-6 sm:h-7 md:h-8 lg:h-10" />

      {/* DESKRIPSI */}
      <p
        className="
          m-0

          max-w-[20rem]
          sm:max-w-125
          md:max-w-175
          lg:max-w-200

          text-[0.8125rem]
          sm:text-[0.875rem]
          md:text-[0.9375rem]
          lg:text-[1rem]

          font-normal
          leading-normal

          text-center
        "
      >
        Accounting services and professional consultations designed to help
        your business develop.
      </p>
    </section>
  );
};

export default OurServiceTitle;