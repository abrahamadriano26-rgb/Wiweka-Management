const Consultation2 = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[61.125rem]
        overflow-hidden
        bg-white
        font-inter
        text-left
        text-[1.125rem]
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
      {/* Container untuk kedua sisi - nempel */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          w-full
          max-w-[75rem]
          rounded-[0.9375rem]
          overflow-hidden
          shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.15)]
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <div
          className="
            relative
            w-full
            lg:w-[48%]
            min-h-[31.25rem]
            lg:min-h-[51.625rem]
            overflow-hidden
            bg-darkslateblue
          "
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden rounded-[0.9375rem]">
            <img
              src="/images/consultation.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 rounded-[0.9375rem] bg-black/40" />

          {/* Content */}
          <div className="relative z-10 px-[1.5rem] sm:px-[3.5625rem] py-[3.0625rem] h-full flex flex-col justify-center">
            {/* Main Title */}
            <h2
              className="
                m-0
                text-[2rem]
                sm:text-[2.25rem]
                font-medium
                italic
                leading-tight
                text-white
              "
            >
              Professional Guidance
              <br />
              for Your Business
            </h2>

            {/* Description */}
            <p
              className="
                m-0
                mt-[1.5rem]
                max-w-[27.5rem]
                text-[0.9375rem]
                font-normal
                leading-normal
                text-white
              "
            >
              Our experienced team is ready to understand your business needs
              and provide practical solutions tailored to your goals.
            </p>

            {/* Point 1 */}
            <div className="mt-[2.5rem] flex items-start gap-[0.625rem]">
              <div
                className="
                  mt-[0.125rem]
                  flex
                  h-[1.25rem]
                  w-[1.25rem]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <span className="text-[0.75rem] text-darkslateblue">✓</span>
              </div>
              <div>
                <h3 className="m-0 font-semibold text-white">
                  Personalized Solutions
                </h3>
                <p
                  className="
                    m-0
                    mt-[0.4375rem]
                    max-w-[24.9375rem]
                    text-[0.875rem]
                    leading-normal
                    text-white
                  "
                >
                  Consultation tailored to your business needs and objectives.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="mt-[1.5rem] flex items-start gap-[0.625rem]">
              <div
                className="
                  mt-[0.125rem]
                  flex
                  h-[1.25rem]
                  w-[1.25rem]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <span className="text-[0.75rem] text-darkslateblue">✓</span>
              </div>
              <div>
                <h3 className="m-0 font-semibold text-white">
                  Expert Team Support
                </h3>
                <p
                  className="
                    m-0
                    mt-[0.4375rem]
                    max-w-[24.9375rem]
                    text-[0.875rem]
                    leading-normal
                    text-white
                  "
                >
                  Get guidance from experienced professionals who understand
                  your industry.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="mt-[1.5rem] flex items-start gap-[0.625rem]">
              <div
                className="
                  mt-[0.125rem]
                  flex
                  h-[1.25rem]
                  w-[1.25rem]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <span className="text-[0.75rem] text-darkslateblue">✓</span>
              </div>
              <div>
                <h3 className="m-0 font-semibold text-white">
                  Practical Solutions
                </h3>
                <p
                  className="
                    m-0
                    mt-[0.4375rem]
                    max-w-[24.9375rem]
                    text-[0.875rem]
                    leading-normal
                    text-white
                  "
                >
                  Receive actionable advice and strategies to grow your
                  business effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE / FORM ================= */}
        <div
          className="
            relative
            w-full
            lg:w-[52%]
            rounded-r-[0.9375rem]
            border
            border-gray
            bg-white
            px-[1.5rem]
            sm:px-[3.5625rem]
            py-[3.0625rem]
            flex
            flex-col
            justify-center
          "
        >
          {/* Title */}
          <h2
            className="
              m-0
              text-[2rem]
              sm:text-[2.25rem]
              font-medium
              italic
              leading-tight
              text-black
            "
          >
            Book a Consultation
          </h2>

          {/* Subtitle */}
          <p
            className="
              m-0
              mt-[1.125rem]
              max-w-[26.6875rem]
              text-[0.9375rem]
              font-medium
              leading-normal
              text-black
            "
          >
            Complete the form below and our team will contact you to arrange
            your consultation.
          </p>

          {/* ================= FORM ================= */}
          <form className="mt-[2.5rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[2rem] gap-y-[1.5rem]">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[1.125rem] font-medium text-black"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your name"
                  className="
                    mt-[0.8125rem]
                    h-[2.6875rem]
                    w-full
                    rounded-[0.625rem]
                    border
                    border-black
                    bg-white
                    px-[0.8125rem]
                    text-[0.875rem]
                    outline-none
                    placeholder:text-darkgray
                    focus:border-darkslateblue
                    transition
                  "
                />
              </div>

              {/* Service Needed */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-[1.125rem] font-medium text-black"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  defaultValue=""
                  className="
                    mt-[0.8125rem]
                    h-[2.6875rem]
                    w-full
                    rounded-[0.625rem]
                    border
                    border-black
                    bg-white
                    px-[0.8125rem]
                    text-[0.875rem]
                    text-darkgray
                    outline-none
                    focus:border-darkslateblue
                    transition
                  "
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="accounting">Accounting and Bookkeeping</option>
                  <option value="tax">Tax Planning and Reporting</option>
                  <option value="consulting">Business Consulting</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[1.125rem] font-medium text-black"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email Address"
                  className="
                    mt-[0.8125rem]
                    h-[2.6875rem]
                    w-full
                    rounded-[0.625rem]
                    border
                    border-black
                    bg-white
                    px-[0.8125rem]
                    text-[0.875rem]
                    outline-none
                    placeholder:text-darkgray
                    focus:border-darkslateblue
                    transition
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[1.125rem] font-medium text-black"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    mt-[0.8125rem]
                    h-[2.6875rem]
                    w-full
                    rounded-[0.625rem]
                    border
                    border-black
                    bg-white
                    px-[0.8125rem]
                    text-[0.875rem]
                    outline-none
                    placeholder:text-darkgray
                    focus:border-darkslateblue
                    transition
                  "
                />
              </div>
            </div>

            {/* Message - Full Width */}
            <div className="mt-[1.5rem]">
              <label
                htmlFor="message"
                className="block text-[1.125rem] font-medium text-black"
              >
                Tell Us About Your Needs
              </label>
              <textarea
                id="message"
                rows={4}
                className="
                  mt-[0.8125rem]
                  w-full
                  resize-none
                  rounded-[0.625rem]
                  border
                  border-black
                  bg-white
                  p-[0.8125rem]
                  text-[0.875rem]
                  outline-none
                  focus:border-darkslateblue
                  transition
                "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                mt-[1.75rem]
                w-full
                h-[2.6875rem]
                sm:h-[3rem]
                flex
                items-center
                justify-center
                rounded-[0.625rem]
                bg-darkslateblue
                text-[1rem]
                sm:text-[1.125rem]
                font-medium
                text-white
                transition-all
                hover:opacity-90
                active:scale-[0.98]
              "
            >
              Submit Consultation Request
              <span className="ml-[0.625rem]">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation2;