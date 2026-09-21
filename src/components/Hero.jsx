"use client";
import { useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Overlay from "../assets/photos/8ef761d302445d24bbb9db1cd19a4857.png"

import MainPhoto from "@/src/assets/photos/magnific_ohM7s2T829.webp";
import rightcloude from "@/src/assets/photos/7d59032b42928f8aa23e7b6c881e3f46.png";
import Cloud2 from "@/src/assets/pngwing.webp";

import { useGSAP, gsap  , SplitText } from "@/src/lib/gsap";

export default function Hero() {
// =========================
// Refs
// =========================

const heroRef = useRef(null);
const textRef = useRef(null);
const btn = useRef(null);
const headline = useRef(null);
const mainpara = useRef(null);

const mainPhotoRef = useRef(null);

const leftCloudRef = useRef(null);
const rightCloudRef = useRef(null);

const animationSectionRef = useRef(null);
const ovellaybackground = useRef(null);


useGSAP(() => {
    const headlineEl = headline.current;

    if (!headlineEl) return;

    const split = SplitText.create(headlineEl, {
        type: "lines",
        mask: "lines",
    });

    const tl = gsap.timeline({
        defaults: {
        ease: "power2.out",
        duration: 0.6,
        },
    });

    // Headline
    tl.from(split.lines, {
        yPercent: 100,
        stagger: 0.04,
    });

    // Background
    if (ovellaybackground.current) {
        tl.from(
        ovellaybackground.current,
        {
            scale: 1.05,
        },
        "<"
        );
    }

    // Clouds
    if (leftCloudRef.current) {
        tl.from(
        leftCloudRef.current,
        {
            y: 80,
        },
        "<"
        );
    }

    if (rightCloudRef.current) {
        tl.from(
        rightCloudRef.current,
        {
            y: 80,
        },
        "<"
        );
    }

    // Main image
    // Don't animate it immediately if it's your LCP element.
    if (mainPhotoRef.current) {
        tl.to(
        mainPhotoRef.current,
        {
            yPercent: -17,
        },
        "<"
        );
    }

    // Paragraph
    if (mainpara.current) {
        tl.from(
        mainpara.current,
        {
            y: 10,
            opacity: 0,
        },
        "-=0.25"
        );
    }

    // Button
    if (btn.current) {
        tl.from(
        btn.current,
        {
            y: 10,
            opacity: 0,
        },
        "<"
        );
    }

    return () => {
        split.revert();
        tl.kill();
    };
    }, {
    scope: heroRef,
    dependencies: [],
});


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
        z-1
        justify-center
        overflow-x-clip
        select-none
        bg-linear-to-b
        from-sky-600/50
        via-sky-200
        to-white
        font-sans
        dark:bg-black
    "
    >
    <div ref={ovellaybackground} className="absolute min-w-full top-0  min-h-full inset-0 pointer-events-none opacity-30 ">
    <Image
        
        src={Overlay}
        sizes="100vw"
        alt=""
        quality={20}
        className="w-full  scale-x-200 left-0 -top-40 absolute md:top-0 h-full object-cover"
    />
    </div>
    <div
    className="
        absolute
        inset-0
        pointer-events-none
        bg-[radial-gradient(circle_at_0%_100%,rgba(255,100,60,0.28),transparent_95%)]
        mask-[linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)]
    ">
    </div>

    <Image
        ref={mainPhotoRef}
        src={MainPhoto}
        alt="Hero"
        width={700}
        height={700}
        priority
        sizes="(max-width: 768px) 100vw, 700px"
        quality={50}
        className="
        absolute
        bottom-10
        md:bottom-0
        z-10
        
        scale-x-125
        translate-y-1/2
        md:scale-x-150
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
        inset-0
        bottom-0
        z-40
        "
    >
        <Image
        
        src={Cloud2}
        alt=""
        width={1600}
        height={500}
        sizes="100vw"
        quality={25}
        className="
            absolute
            md:-bottom-99
            -bottom-84.5
            md:left-1/2
            blur-sm
            max-w-none
            -translate-x-1/2
            object-cover
            scale-100
            md:scale-105
            lg:scale-100
        "
        />
    </div>

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
        md:bottom-30
        "
    >
        <h1
        ref={headline}
        className="
            py-4
            text-4xl
            font-bold
            tracking-tight
            text-gray-900
            md:text-5xl
            
            lg:text-[114px]
            
        "
        >
        Find What Moves You
        </h1>

        <p
        ref={mainpara}
        className="
            mb-5
            max-w-2/3
            text-gray-900/90
            md:max-w-full
            md:text-2xl
            font-semibold
        "
        >
        Expert agents. Real guidance. <span className="text-gray-700/60">A clear path to find what&apos;s next</span>
        </p>

        <button
        ref={btn}
        type="button"
        className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-6
            py-2
            
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
        src={rightcloude}
        alt=""
        width={520}
        height={300}
        quality={35}
        sizes="520px"
        className="
            absolute
            left-0
            md:-translate-x-1/4
            -translate-x-1/2
            top-60
            w-auto
            hidden md:block
            opacity-45
            scale-150
            blur-[2px]
        "
        />

        {/* Right Cloud */}

        <Image
        ref={rightCloudRef}
        src={rightcloude}
        alt=""
        width={500}
        height={300}
        sizes="500px"
        quality={35}
        className="
            absolute
            right-0
            md:translate-x-1/4
            translate-x-2/3
            top-50
            w-auto
            md:opacity-50
            opacity-50
            md:scale-150
            
            blur-[1px]

        "
        />
    </div>
    </main>
);
}
