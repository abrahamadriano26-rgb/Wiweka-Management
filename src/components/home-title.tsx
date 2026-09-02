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
      <b
        className="
          relative
          text-8
          sm:text-10
          md:text-12
          lg:text-16
          leading-[1.15]
          [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
        "
      >
        Welcome to,
        <br />
        Wiweka Management
      </b>

      <div
        className="
          w-full
          max-w-80
          sm:max-w-md
          md:max-w-160
          lg:max-w-247.25

          relative
          text-3.75
          sm:text-base
          md:text-lg
          lg:text-2xl

          leading-[1.6]
          text-center
        "
      >
        We provide expert management of accounting and tax for businesses and
        individuals.
      </div>
    </div>
  );
};

export default HomeTitle;