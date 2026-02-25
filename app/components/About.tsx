"use client";
import gsap from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { profileLists, featureLists } from "@/constants";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });
    const subContentSplit = SplitText.create(".sub-content", {
      type: "lines",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline.from([...titleSplit.words, ...subContentSplit.lines], {
      opacity: 0,
      duration: 1.5,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });

    scrollTimeline.from(
      ".anim-image",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.04,
      },
      "-=0.5"
    );
  });

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center gap-16 mb-10">
          <div className="flex-1">
            <span className="badge inline-block mb-6">Best Cocktails</span>
            <h2 className="text-5xl md:text-6xl font-modern-negra leading-tight">
              Where every detail matters—from muddle to garnish
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <p className="text-white/80 text-lg sub-content">
              Every cocktail we serve is a reflection of our obsession with
              detail – from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div className="flex flex-row gap-8 items-center">
              <div className="flex flex-col items-start min-w-[180px]">
                <div className="flex items-center space-x-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/star.png"
                      alt="star"
                      width={24}
                      height={24}
                    />
                  ))}
                </div>
                <p className="text-4xl md:text-5xl font-extrabold leading-none">
                  4.5/5
                </p>
                <p className="text-white/80 text-base md:text-lg leading-none mt-2 font-medium">
                  More than +12000 customers
                </p>
              </div>
              <div className="flex items-center space-x-[-12px] bg-[#2d2d2d] px-4 py-2 rounded-full">
                {profileLists.slice(0, 3).map((profile, index) => (
                  <Image
                    key={index}
                    src={profile.imgPath}
                    alt={`profile-${index}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-black"
                  />
                ))}
                <span className="text-sm bg-[#9d8ff0] text-black rounded-full px-3 py-1 font-bold ml-2">
                  +12k
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="aspect-[4/3] w-full relative anim-image">
            <Image
              src="/images/abt1.png"
              alt="bartender"
              className="rounded-3xl object-cover w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="noisy" />
          </div>
          <div className="bg-[#1c1c1c] rounded-3xl p-6 flex flex-col justify-center aspect-[4/3] w-full relative anim-image">
            <h3 className="font-modern-negra text-3xl border-b border-white/20 pb-2 mb-2">
              Crafted to Impress
            </h3>
            <ul className="space-y-2 text-white/90 text-sm mt-2">
              {featureLists.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Image
                    src="/images/check.png"
                    alt="check"
                    width={20}
                    height={30}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="noisy" />
          </div>
          <div className="aspect-[4/3] w-full relative anim-image">
            <Image
              src="/images/abt5.png"
              alt="party crowd"
              className="rounded-3xl object-cover w-full h-full"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="noisy" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {["/images/abt2.png", "/images/abt3.png", "/images/abt4.png"].map(
            (src, idx) => (
              <div
                key={src}
                className="aspect-[4/3] w-full relative anim-image"
              >
                <Image
                  src={src}
                  alt={`cocktail ${idx + 1}`}
                  className="rounded-3xl object-cover w-full h-full"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="noisy" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;