
import type { NextPage } from "next";
import Image from "next/image";

const HomeTitle: NextPage = () => {
  return (
    <section className="home-hero">
      {/* Decorative background */}
      <div
        className="hero-decoration hero-decoration-left"
        aria-hidden="true"
      />

      <div
        className="hero-decoration hero-decoration-right"
        aria-hidden="true"
      />

      <div className="hero-container">
        {/* LEFT: CONTENT */}
        <div className="hero-content">
          <div className="hero-label">
            <span className="hero-label-dot" aria-hidden="true" />
            <span>WIWEKA MANAGEMENT</span>
          </div>

          <h1 className="hero-title">
            We provide{" "}
            <span className="hero-title-accent">
              expert management of accounting and tax
            </span>{" "}
            for businesses and individuals.
          </h1>

          <p className="hero-description">
            At Wiweka Management, we provide reliable accounting,
            tax, and business consulting solutions tailored to
            your business needs. Our experienced team helps you
            stay compliant, manage your finances efficiently,
            and move forward with confidence.
          </p>

          <div className="hero-actions">
            <a
              href="/contact"
              className="hero-button hero-button-primary"
            >
              Contact Us
              <span
                className="hero-button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            <a
              href="/about"
              className="hero-button hero-button-secondary"
            >
              Learn More
            </a>
          </div>

          <div className="hero-stats">
            <span className="hero-stats-line" aria-hidden="true" />
            <span>
              Accounting · Tax · Business Consulting
            </span>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hero-image-wrap">
          <div
            className="hero-image-border"
            aria-hidden="true"
          />

          <div className="hero-image">
            <Image
              src="/images/wiweka-management.jpg"
              alt="Wiweka Management accounting and consulting services"
              width={440}
              height={659}
              sizes="(max-width: 768px) 90vw, (max-width: 1023px) 400px, 440px"
              priority
              className="hero-photo"
            />

            <div className="hero-image-caption">
              <h2>Professional Solutions</h2>
              <p>
                Supporting your business with confidence
                and clarity.
              </p>
            </div>
          </div>

          <div
            className="hero-image-glow"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeTitle;

