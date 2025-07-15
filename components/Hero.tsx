"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ismobile = useMediaQuery({ maxWidth: 767 });
  const videoTimelineRef = useRef(null);

  const titleref = useRef(null);
  const subtitle = useRef(null);
  const subtitle1 = useRef(null);
  const rightleaf = useRef(null);
  const leftleaf = useRef(null);

  useEffect(() => {
    // === TEXT ANIMATIONS ===
    const splitText = new SplitText(titleref.current, { type: "chars,words" });
    const paragraphSplit = new SplitText(subtitle.current, { type: "lines" });
    const subtitleSplit = new SplitText(subtitle1.current, { type: "lines" });

    splitText.chars.forEach((char) => {
      char.classList.add(
        "bg-gradient-to-t",
        "from-black",
        "via-slate-500",
        "to-slate-100",
        "text-transparent",
        "bg-clip-text"
      );
    });

    gsap.from(splitText.chars, {
      duration: 1.8,
      opacity: 0,
      y: 100,
      stagger: 0.18,
      ease: "expo.out",
    });

    gsap.from(paragraphSplit.lines, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(subtitleSplit.lines, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      delay: 0.5,
      ease: "power2.out",
    });

    // === LEAF SCROLL MOVEMENT ===
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(leftleaf.current, { y: 200 }, 0)
      .to(rightleaf.current, { y: -200 }, 0)
      .to(videoTimelineRef.current, { y: 900 }, 0);


    const startvalue = ismobile ? 'top 50%' : 'center 60%'
    const endvalue = ismobile ? '120% top' :  'bottom top'
    // === SCROLL-CONTROLLED PINNED VIDEO ===
    const video = videoRef.current;
    if (video) {
      const scrubVideo = () => {
        const duration = video.duration;

        ScrollTrigger.create({
          trigger: "#hero",
          start: startvalue, // Adjust start position based on media query
          end: endvalue, // Adjust end position based on media query
          
          scrub: true,
          
          onUpdate: (self) => {
            const scrollProgress = self.progress; // 0 to 1
            video.currentTime = duration * scrollProgress;
          },
        });
      };

      if (video.readyState >= 1) {
        scrubVideo(); // if already loaded
      } else {
        video.addEventListener("loadedmetadata", scrubVideo);
      }

      return () => {
        video?.removeEventListener("loadedmetadata", scrubVideo);
      };
    }
  }, []);

  return (
    <>
      {/* === HERO SECTION === */}
      <div id="hero" className="relative bg-black h-screen">
        <section className="bg-[url(/images/noise.png)] z-60 fixed opacity-35 inset-0 bg-cover bg-center h-screen flex items-center justify-center" />

        <section className="z-10 w-screen overflow-x-hidden h-screen flex relative flex-col items-center max-md:pt-1 justify-center">
          <h1
            ref={titleref}
            className="font-myfont bg-gradient-to-t from-black via-slate-500 to-slate-100 text-transparent bg-clip-text md:text-[24rem] text-6xl"
          >
            Majito
          </h1>

          <Image
            ref={leftleaf}
            src={"/images/hero-left-leaf.png"}
            alt="leaf"
            width={300}
            height={300}
            className="absolute max-md:size-36 object-contain max-md:-left-10 left-0 bottom-16"
          />

          <Image
            ref={rightleaf}
            src={"/images/hero-right-leaf.png"}
            alt="leaf"
            width={300}
            height={300}
            className="absolute origin-center object-contain max-md:size-36 max-md:-right-10 max-md:top-12 right-0 top-0"
          />

          <div className="md:px-16 max-md:flex-col flex flex-row justify-between md:mt-16 w-full">
            <div
              ref={subtitle1}
              className="md:self-start max-md:hidden md:justify-self-start max-md:text-center"
            >
              <p>Cool. Crisp. Classic.</p>
              <p className="font-myfont text-5xl max-md:text-xl max-w-sm text-amber-200">
                Sip the Spirit of Summmer
              </p>
            </div>

            <div className="max-md:flex max-md:justify-center max-md:flex-col max-md:items-center">
              <p
                ref={subtitle}
                className="max-w-sm max-md:text-center max-md:text-sm max-md:text-white/70 text-white"
              >
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes – designed to delight your
                senses.
                <br />
                View cocktails
              </p>
            </div>
          </div>
        </section>
        <div
        ref={videoTimelineRef}
        id="video-section"
        className="w-full md:h-[100%] h-1/2 bottom-0 left-0 md:object-bottom  object-cover bg-black absolute inset-0 z-1 overflow-hidden"
      >
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          className="w-full h-full object-bottom"
          muted
          playsInline
          autoPlay
          preload="auto"
        />
      </div>
      </div>

     
      
    </>
  );
};

export default Hero;
