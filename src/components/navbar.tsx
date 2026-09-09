"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Service", href: "/service" },
    { name: "Customer Review", href: "/review" },
    { name: "Consultation", href: "/consultation" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-[0_0.25rem_0.25rem_rgba(0,0,0,0.15)]">
      
      {/* ================= NAVBAR UTAMA ================= */}
      <div
        className="
          w-full

          h-17
          sm:h-18
          md:h-21.5
          lg:h-21.5

          px-4
          sm:px-6
          md:px-12
          lg:px-20

          flex
          items-center
          justify-between
        "
      >
        {/* ================= LOGO ================= */}
        <div className="flex items-center min-w-0">
          <Image
            src="/Logo.avif"
            alt="Wiweka Management"
            width={120}
            height={73}
            priority
            className="
              w-26
              sm:w-28
              md:w-30
              lg:w-30
              h-auto
              object-contain
            "
          />
        </div>

        {/* ================= MENU DESKTOP ================= */}
        <div
          className="
            hidden
            lg:flex
            items-center
            justify-end
            gap-3
            min-w-0
          "
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  rounded-2.5

                  px-2.5
                  py-2.5

                  text-4
                  whitespace-nowrap

                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "bg-slateblue text-white"
                      : "text-black/70 hover:text-black hover:font-bold"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* ================= HAMBURGER HP + IPAD ================= */}
        <div className="flex items-center justify-end shrink-0 lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              flex-col
              justify-center
              items-center

              gap-1.5

              w-12
              h-12

              sm:w-13
              sm:h-13

              md:w-14
              md:h-14

              rounded-2.5

              hover:bg-black/5

              transition
              duration-200
            "
          >
            {/* GARIS 1 */}
            <span
              className={`
                block

                w-6
                sm:w-6.5
                md:w-7

                h-0.5

                bg-black

                transition-all
                duration-300

                ${
                  isOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }
              `}
            />

            {/* GARIS 2 */}
            <span
              className={`
                block

                w-6
                sm:w-6.5
                md:w-7

                h-0.5

                bg-black

                transition-all
                duration-300

                ${isOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            {/* GARIS 3 */}
            <span
              className={`
                block

                w-6
                sm:w-6.5
                md:w-7

                h-0.5

                bg-black

                transition-all
                duration-300

                ${
                  isOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>
      </div>

      {/* ================= MENU MOBILE + IPAD ================= */}
      <div
        className={`
          lg:hidden

          w-full
          overflow-hidden

          border-t
          border-black/5

          bg-white

          transition-all
          duration-300
          ease-in-out

          ${
            isOpen
              ? "max-h-120 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            w-full

            flex
            flex-col

            px-4
            sm:px-6
            md:px-12

            py-3

            bg-white
          "
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  w-full

                  rounded-2.5

                  px-3.5
                  py-3

                  text-3.5
                  sm:text-3.75
                  md:text-4

                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "bg-slateblue text-white"
                      : "text-black/70 hover:bg-black/5 hover:text-black"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;