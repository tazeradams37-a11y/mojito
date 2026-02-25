"use client";
import Image from "next/image";
import { navLinks } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  const navRef = useRef(null);
  useGSAP(() => {
    if (!navRef.current) return;
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: "bottom top",
      },
    });
    navTween.fromTo(
     'nav',
      { background: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <nav ref={navRef} className="flex flex-col md:flex-row md:justify-between items-center px-6 py-4 gap-4 md:gap-0">
      <a href="#home" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <p className="font-bold text-2xl text-amber-400">Just Pour</p>
      </a>

      <ul className="flex items-center gap-4 md:gap-8">
        {(navLinks as NavLink[]).map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-amber-200 hover:text-white transition-colors text-sm md:text-base"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;