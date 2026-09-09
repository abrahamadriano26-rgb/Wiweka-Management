const ContactUs2 = () => {
  return (
    <section
      className="
        w-full
        relative
        flex
        flex-col
        items-start
        py-[3.125rem]
        px-[1rem]
        sm:px-[2rem]
        md:px-[3rem]
        lg:px-[5rem]
        box-border
        gap-[1.375rem]
        text-left
        text-[1rem]
        text-black
        font-inter
        bg-white
        shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.25)]
        z-10
      "
    >
      {/* Title - Diturunin */}
      <h1
        className="
          relative
          m-0
          mt-[1.5rem]
          sm:mt-[2rem]
          text-[2.5rem]
          sm:text-[3rem]
          md:text-[3.5rem]
          lg:text-[4rem]
          font-bold
          italic
          [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
        "
      >
        Our Location
      </h1>

      {/* Address & Hours */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-[1.5rem]
          sm:gap-[3rem]
          text-[1rem]
        "
      >
        {/* Address */}
        <div className="w-full sm:w-[9.25rem]">
          <i className="font-bold">
            Address
            <br />
            <br />
          </i>

          <span>
            Jl. Imam Bonjol, Cipta Selaras 12, Denpasar 80119,
            Bali, Indonesia
          </span>
        </div>

        {/* Hours */}
        <div className="w-full sm:w-[8.625rem]">
          <i className="font-bold">
            Hours
            <br />
            <br />
          </i>

          <span>Mon-Fri 9am-5pm</span>
        </div>
      </div>

      {/* Google Maps */}
      <div
        className="
          w-full
          h-[20rem]
          sm:h-[30rem]
          md:h-[35rem]
          lg:h-[40.55625rem]
          overflow-hidden
          rounded-[0.625rem]
          border
          border-gray-300
        "
      >
        <iframe
          src="https://www.google.com/maps?q=Jl.%20Imam%20Bonjol%2C%20Cipta%20Selaras%2012%2C%20Denpasar%2080119%2C%20Bali%2C%20Indonesia&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Wiweka Management Location"
        />
      </div>
    </section>
  );
};

export default ContactUs2;