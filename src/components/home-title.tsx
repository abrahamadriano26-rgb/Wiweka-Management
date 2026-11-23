
import Image from "next/image";

const titleLines = [
  {
    text: "We provide",
    color: "text-white",
  },
  {
    text: "expert management of accounting",
    color: "text-deepskyblue",
  },
  {
    text: "and tax",
    color: "text-deepskyblue",
  },
  {
    text: "for businesses and individuals.",
    color: "text-white",
  },
];

export default function HomeTitle() {
  let wordIndex = 0;

  return (
    <section className="hero-section relative w-full overflow-hidden
      bg-[linear-gradient(90.06deg,#0a205f,#154999_99.5%,#d9d9d9)]">

      <div className="hero-content relative mx-auto min-h-[906px] max-w-[1440px]">

        {/* HERO TITLE */}
        <div className="hero-title absolute left-[80px] top-[271px]
          z-10 w-[759px] max-w-[55%]">

          <h1 className="font-inter text-[54px] font-bold
            leading-[1.2] text-white
            [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))]">

            {titleLines.map((line, lineIndex) => (
              <span
                key={lineIndex}
                className={`block ${line.color}`}
              >
                {line.text.split(" ").map((word, index) => {
                  const delay = wordIndex * 0.12;
                  wordIndex++;

                  return (
                    <span
                      key={`${lineIndex}-${index}`}
                      className="inline-block mr-[0.16em]
                      overflow-hidden align-bottom pb-[0.08em]"
                    >
                      <span
                        className="hero-word inline-block"
                        style={{
                          animationDelay: `${delay}s`,
                        }}
                      >
                        {word}
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}

          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="hero-description absolute left-[80px]
          top-[575px] z-10 w-[641px] max-w-[48%]">

          <p className="font-sf-pro text-xl leading-relaxed text-lavender">
            At Wiweka Management, we provide reliable accounting,
            tax, and business consulting solutions tailored to your
            business needs. Our experienced team helps you stay
            compliant, manage your finances efficiently, and move
            forward with confidence.
          </p>

        </div>

        {/* HERO IMAGE */}
        <div className="hero-image absolute bottom-[172px]
          left-[910px] z-0">

          <Image
            src="/images/accounting.jpg"
            alt="Wiweka Management accounting services"
            width={439}
            height={659}
            priority
            sizes="(max-width: 768px) 90vw, 439px"
            className="h-[659px] w-[439px] rounded-[10px]
            object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          />

        </div>

      </div>
    </section>
  );
}
