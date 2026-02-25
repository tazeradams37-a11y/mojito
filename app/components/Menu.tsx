"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { allCocktails } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
const Menu = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = allCocktails.length;
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const startValue = isMobile ? "top 50%" : "center 60%";
  const endValue = isMobile ? "120% top" : "bottom top";
  //Animations
  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { opacity: 0, yPercent: 100 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { opacity: 0, yPercent: 100 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: startValue,
        end: endValue,
        scrub:true
      },
    })
     .to("#m-right-leaf", { y: 200 }, 0)
      .to("#m-left-leaf", { y: -200 }, 0);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };
  const getCocktailAt = (indexOffset: number) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };
  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);
  const prevCocktail = getCocktailAt(-1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <Image
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
        width={200}
        height={200}
      />
      <Image
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
        width={200}
        height={200}
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index == currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white-50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <Image
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
              width={20}
              height={20}
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <Image
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="cocktail">
          <Image
            src={currentCocktail.image}
            alt="cocktail-image"
            height={600}
            width={600}
          />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
