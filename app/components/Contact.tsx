"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { openingHours, socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
    })
      .from("#contact h3,  #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <Image
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
        width={200}
        height={200}
      />
      <Image
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
        width={200}
        height={200}
      />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Store</h3>
          <p>123, XYZ. Street, New Delhi, India</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+91 1234567890</p>
          <p>contact@justpour.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}:{time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
          <div className="drink-img">
            <Image
              src="/images/footer-drinks.png"
              alt="footer-drink"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
