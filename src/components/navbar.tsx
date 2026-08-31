"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Service", href: "/service" },
    { name: "Customer Review", href: "/review" },
    { name: "Consultation", href: "/consultation" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full h-21.5 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.15)] flex items-center justify-between px-20">

      {/* Logo */}
      <div className="h-21.5 w-39.25 relative overflow-hidden shrink-0">
        <Image
          src="/Logo.avif"
          alt="Wiweka Management"
          width={120}
          height={73}
          className="absolute top-1.5 left-0 w-full h-18.25 object-contain"
        />
      </div>

      {/* Menu */}
      <div className="flex items-center gap-5">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-[10px] px-2.5 py-2.5 transition-all duration-200 ${
                isActive
                  ? "bg-slateblue text-white"
                  : "text-black/70 hover:text-black hover:font-bold"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

    </nav>
  );
};

export default Navbar;