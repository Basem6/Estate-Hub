"use client";
import { useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

import FindText from "@/src/assets/TextToSvgComponent";
import RealEstate from "@/src/assets/TextToSvgComponent (1)";
import Textbg from "@/src/assets/Textonbackground";
import Textbg2 from "@/src/assets/Textonbg2";

import MainPhoto from "@/src/assets/photos/magnific_ohM7s2T829.webp";
import Cloud from "@/src/assets/pngwing.com (1).png";
import Cloud2 from "@/src/assets/pngwing.webp";

import { useGSAP, gsap } from "@/src/lib/gsap";

export default function Hero() {
// =========================
// Refs
// =========================

const heroRef = useRef(null);
const textRef = useRef(null);

const mainPhotoRef = useRef(null);

const leftCloudRef = useRef(null);
const rightCloudRef = useRef(null);
const bottomCloudRef = useRef(null);

const animationSectionRef = useRef(null);

const backgroundAnimationRef = useRef(null);
const backgroundAnimation2Ref = useRef(null);

// =========================
// GSAP
// =========================

useGSAP(
    () => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        const animationSection = animationSectionRef.current;

        // -------------------------
        // Main timeline
        // -------------------------

        const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: animationSection,
            start: "center top",
            end: "+=5800",
            scrub: 3,
            toggleActions: "play none none reverse",
        },
        });

        // -------------------------
        // Pin Hero
        // -------------------------

        gsap.to(heroRef.current, {
        scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=4600",
            scrub: 3,
            pin: true,
            refreshPriority: 1,
        },
        });

        // -------------------------
        // Hero text animation
        // -------------------------

        gsap.to(textRef.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "top top",
            end: "+=1000",
            scrub: 3,
        },
        scale: 0.95,
        opacity: 0,
        y: 10,
        });

        // -------------------------
        // Main house animation
        // -------------------------

        gsap.to(mainPhotoRef.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "top top",
            end: "+=1000",
            scrub: 3,
        },
        scale: 1.2,
        y: -30,
        });

        // -------------------------
        // SVG text animation
        // -------------------------

        timeline.to(
        ".rr",
        {
            opacity: 1,
            duration: 0.01,
        },
        "<"
        );

        timeline.from(
        ".text1",
        {
            drawSVG: 0,
            stagger: {
            each: 0.05,
            from: "random",
            },
        },
        "<"
        );

        timeline.from(
        ".text2",
        {
            drawSVG: 0,
            stagger: {
            each: 0.05,
            from: "random",
            },
        },
        "<"
        );

        // -------------------------
        // Main photo fade out
        // -------------------------

        gsap.to(mainPhotoRef.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "bottom top",
            end: "+=5800",
            toggleActions: "play none none reverse",
        },
        delay: 1,
        opacity: 0,
        duration: 1,
        });

        // -------------------------
        // Background animations
        // -------------------------

        gsap.to(backgroundAnimationRef.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "center center",
            end: "+=5800",
        },
       
        opacity: 1,
        duration: 0.8,
        });

        gsap.to(backgroundAnimation2Ref.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "center center",
            end: "+=5800",
        },
        opacity: 1,
        duration: 0.8,
        });

        // -------------------------
        // Left cloud
        // -------------------------

        gsap.to(leftCloudRef.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "top top",
            end: "+=1000",
            scrub: 3,
        },
        x: -120,
        });

        // -------------------------
        // Right cloud
        // -------------------------

        gsap.to(rightCloudRef.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "top top",
            end: "+=1000",
            scrub: 3,
        },
        x: 120,
        });

        // -------------------------
        // Bottom cloud
        // -------------------------

        gsap.to(bottomCloudRef.current, {
        scrollTrigger: {
            trigger: animationSection,
            start: "top top",
            end: "+=1000",
            scrub: 3,
        },
        y: -60,
        });
    });

    // Cleanup
    return () => {
        mm.revert();
    };
    },
    {
    scope: heroRef,
    dependencies: [],
    }
);

// =========================
// JSX
// =========================

return (
    <main
    ref={heroRef}
    className="
        relative
        flex
        min-h-screen
        flex-1
        flex-col
        items-center
        justify-center
        overflow-x-clip
        select-none
        bg-linear-to-b
        from-sky-400
        via-sky-200
        to-white
        font-sans
        dark:bg-black
    "
    >
    {/* ========================================
        Main Hero Image
        LCP Element
    ======================================== */}

    <Image
        ref={mainPhotoRef}
        src={MainPhoto}
        alt="Hero"
        width={700}
        height={700}
        sizes="(max-width: 768px) 100vw, 700px"
        priority
        fetchPriority="high"
        quality={75}
        className="
        absolute
        bottom-0
        z-10
        translate-y-1/4
        pointer-events-none
        "
    />

    {/* ========================================
        Bottom Cloud
    ======================================== */}

    <div
        className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        z-40
        h-75
        "
    >
        <Image
        ref={bottomCloudRef}
        src={Cloud2}
        alt=""
        width={1700}
        height={500}
        sizes="100vw"
        loading="lazy"
        quality={65}
        className="
            absolute
            bottom-[-296px]
            left-1/2
            hidden md:block
            max-w-none
            -translate-x-1/2
            object-cover
            scale-100
            md:scale-105
            lg:scale-100
            [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]
        "
        />
        <Image
        ref={bottomCloudRef}
        src={Cloud2}
        alt=""
        width={1300}
        height={500}
        sizes="100vw"
        loading="lazy"
        quality={65}
        className="
            absolute
            bottom-[-296px]
            left-1/2
            block md:hidden
            max-w-none
            -translate-x-1/2
            object-cover
            scale-100
            md:scale-105
            lg:scale-100
            [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]
        "
        />
    </div>

    {/* ========================================
        Desktop SVG Content
    ======================================== */}

    <div
        id="se"
        className="
        absolute
        left-0
        top-0
        flex
        min-h-screen
        min-w-full
        items-center
        justify-center
        "
    >
        <div
        
        className="
            relative
            z-20
            hidden
            flex-col
            items-center
            justify-center
            gap-16
            text-center
            opacity-0
            pointer-events-none
            lg:flex
            rr
        "
        >
        <RealEstate />

        <FindText />

        {/* Background SVG animations */}
     <div
            className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            flex
            h-full
            w-full
            hidden
            flex-col
            items-center
            justify-center
            
            text-center
            opacity-0
            lg:flex
            rr
            "
        >
            <div
            ref={backgroundAnimationRef}
            className="absolute top-0  opacity-0 z-20"
            >
            <Textbg />
            </div>

            <div
            ref={backgroundAnimation2Ref} 
            className="absolute bottom-0 opacity-0 z-20"
            >
            <Textbg2 />
            </div>
        </div> 
        </div>
    </div>

    {/* ========================================
        Hero Text
    ======================================== */}

    <div
        ref={textRef}
        className="
        relative
        bottom-14
        flex
        flex-1
        flex-col
        items-center
        justify-center
        text-center
        md:bottom-35
        "
    >
        <h1
        className="
            mb-4
            text-4xl
            font-bold
            text-gray-900
            md:text-5xl
            lg:text-8xl
        "
        >
        Find What Moves You
        </h1>

        <p
        className="
            mb-3
            max-w-2/3
            text-gray-900/90
            md:max-w-full
            md:text-lg
        "
        >
        Expert agents. Real guidance. A clear path to find what&apos;s next
        </p>

        <button
        type="button"
        className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-5
            py-2
            text-sm
            text-white
            transition-colors
            duration-300
            hover:bg-black/80
        "
        >
        <span className="relative bottom-0.5">
            Find Properties
        </span>

        <MoveRight
            size={16}
            aria-hidden="true"
            className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            "
        />
        </button>
    </div>

    {/* ========================================
        Animated Side Clouds
    ======================================== */}

    <div
        ref={animationSectionRef}
        className="
        clouds
        pointer-events-none
        absolute
        left-0
        top-0
        z-0
        min-h-screen
        min-w-full
        "
    >
        {/* Left Cloud */}

        <Image
        ref={leftCloudRef}
        src={Cloud}
        alt=""
        width={420}
        height={100}
        sizes="420px"
        loading="lazy"
        quality={65}
        className="
            absolute
            left-0
            top-50
            hidden md:block
            opacity-80
        "
        />

        {/* Right Cloud */}

        <Image
        ref={rightCloudRef}
        src={Cloud}
        alt=""
        width={400}
        height={100}
        sizes="400px"
        loading="lazy"
        quality={65}
        className="
            absolute
            right-0
            top-20
            opacity-80
        "
        />
    </div>
    </main>
);
}
