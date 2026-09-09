const ContactUs1 = () => {
  return (
    <section
      className="
        w-full
        min-h-[32.125rem]
        relative
        bg-darkslateblue
        overflow-hidden
        text-left
        text-[1rem]
        text-white
        font-inter
        flex
        items-center
        justify-center
        py-[3.125rem]
        px-[1rem]
        sm:px-[2rem]
        shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.25)]
        z-10
      "
    >
      {/* Container */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          w-full
          max-w-[75rem]
          items-center
          gap-[2rem]
          lg:gap-[4rem]
        "
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[40%] flex flex-col items-start">
          <h1
            className="
              m-0
              text-[2.5rem]
              sm:text-[3rem]
              md:text-[3.5rem]
              lg:text-[4rem]
              font-bold
              italic
              leading-none
              [text-shadow:0_0.25rem_0.25rem_rgba(0,0,0,0.25)]
            "
          >
            CONTACT US
          </h1>

          <div
            className="
              mt-[1.5rem]
              w-[17.1875rem]
              h-[0.125rem]
              bg-white/60
              rounded-full
            "
          />
        </div>

        {/* RIGHT SIDE / FORM */}
        <div className="w-full lg:w-[60%]">
          <form
            className="
              w-full
              flex
              flex-col
              bg-white/10
              backdrop-blur-sm
              rounded-[0.9375rem]
              p-[2rem]
              sm:p-[2.5rem]
              md:p-[3rem]
            "
          >
            {/* Name */}
            <label
              htmlFor="name"
              className="
                mb-[0.625rem]
                text-[1rem]
                font-medium
                text-white
              "
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="
                w-full
                h-[2.6875rem]
                rounded-[0.625rem]
                border
                border-black
                bg-white
                px-[1.125rem]
                text-black
                placeholder:text-darkgray
                outline-none
                focus:ring-2
                focus:ring-white/50
                transition
              "
            />

            {/* Email */}
            <label
              htmlFor="email"
              className="
                mt-[1.375rem]
                mb-[0.625rem]
                text-[1rem]
                font-medium
                text-white
              "
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email Address"
              className="
                w-full
                h-[2.6875rem]
                rounded-[0.625rem]
                border
                border-black
                bg-white
                px-[1.125rem]
                text-black
                placeholder:text-darkgray
                outline-none
                focus:ring-2
                focus:ring-white/50
                transition
              "
            />

            {/* Message */}
            <label
              htmlFor="message"
              className="
                mt-[1.375rem]
                mb-[0.625rem]
                text-[1rem]
                font-medium
                text-white
              "
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="
                w-full
                h-[7.6875rem]
                resize-none
                rounded-[0.625rem]
                border
                border-black
                bg-white
                px-[1.125rem]
                py-[0.75rem]
                text-black
                placeholder:text-darkgray
                outline-none
                focus:ring-2
                focus:ring-white/50
                transition
              "
            />

            {/* Submit */}
            <div className="mt-[1.875rem] flex justify-start">
              <button
                type="submit"
                className="
                  w-[8rem]
                  h-[2.75rem]
                  rounded-[0.625rem]
                  border
                  border-black
                  bg-white
                  text-black
                  text-[1rem]
                  font-medium
                  italic
                  transition-all
                  hover:bg-gray-100
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  shadow-[0_0.25rem_0.5rem_rgba(0,0,0,0.15)]
                "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs1;
