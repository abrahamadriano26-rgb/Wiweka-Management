const HomeTitle = () => {
  return (
    <div
      className="
        w-full
        min-h-88
        sm:min-h-96
        md:min-h-108
        lg:h-125

        relative
        bg-darkslateblue

        flex
        flex-col
        items-center
        justify-center

        gap-6

        px-4
        sm:px-6
        md:px-8
        lg:px-20

        py-10
        sm:py-12
        md:py-14
        lg:py-16

        box-border
        text-center
        text-white
        font-inter
      "
    >
      {/* Judul */}
      <h1
        className="
          relative
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-[64px]

          font-bold
          leading-[1.15]

          [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]
        "
      >
        Welcome to,
        <br />
        Wiweka Management
      </h1>

      {/* Deskripsi */}
      <p
        className="
          w-full
          max-w-[320px]
          sm:max-w-md
          md:max-w-160
          lg:max-w-247.25

          relative

          text-[15px]
          sm:text-base
          md:text-lg
          lg:text-2xl

          leading-[1.6]
          text-center
        "
      >
        We provide expert management of accounting and tax for businesses and
        individuals.
      </p>
    </div>
  );
};

export default HomeTitle;