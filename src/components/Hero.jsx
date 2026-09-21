"use client";
import { useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Overlay from "../assets/photos/8ef761d302445d24bbb9db1cd19a4857.png"
import FindText from "@/src/assets/TextToSvgComponent";
import RealEstate from "@/src/assets/TextToSvgComponent (1)";
import Textbg from "@/src/assets/Textonbackground";
import Textbg2 from "@/src/assets/Textonbg2";

import MainPhoto from "@/src/assets/photos/magnific_ohM7s2T829.webp";
import rightcloude from "@/src/assets/photos/7d59032b42928f8aa23e7b6c881e3f46.png";
import Cloud from "@/src/assets/pngwing.com (1).png";
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
const bottomCloudRef = useRef(null);

const animationSectionRef = useRef(null);
const ovellaybackground = useRef(null);

const backgroundAnimationRef = useRef(null);
const backgroundAnimation2Ref = useRef(null);

// =========================
// GSAP
// =========================

// useGSAP(
//   () => {
//     const mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       const hero = heroRef.current;

//       // ========================================
//       // Main Hero Timeline
//       // ========================================

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: hero,
//           start: "top top",
//           end: "+=4600",
//           scrub: 3,

//           // Hero stays fixed during animation
//           pin: true,

//           // IMPORTANT
//           // Allows the next section to come after the pin
//           pinSpacing: true,

//           anticipatePin: 1,
//         },
//       });

//       // ========================================
//       // Hero Text
//       // ========================================

//       timeline.to(
//         textRef.current,
//         {
//           scale: 0.94,
//           y: 20,
//           duration: 1,
//             opacity:0
//         },
//         0
//       );

//       // ========================================
//       // Main House
//       // ========================================

//       timeline.to(
//         mainPhotoRef.current,
//         {
//           scale: 1.4,
//           y: 20,
//           duration: 1,
//         },
//         0
//       );

//       // ========================================
//       // Clouds
//       // ========================================

//       timeline.to(
//         leftCloudRef.current,
//         {
//           x: -120,
//           duration: 1,
//         },
//         0
//       );

//       timeline.to(
//         rightCloudRef.current,
//         {
//           x: 120,
//           duration: 1,
//         },
//         0
//       );

//       timeline.to(
//         bottomCloudRef.current,
//         {
//           y: -60,
//           duration: 1,
//         },
//         0
//       );

//       // ========================================
//       // SVG
//       // ========================================

//       timeline.to(
//         ".rr",
//         {
//           opacity: 1,
//           duration: 0.1,
//         },
//         1
//       );

//       timeline.from(
//         ".text1",
//         {
//           drawSVG: 0,
//           stagger: {
//             each: 0.05,
//             from: "random",
//           },
//           duration: 1,
//         },
//         "<"
//       );

//       timeline.from(
//         ".text2",
//         {
//           drawSVG: 0,
//           stagger: {
//             each: 0.05,
//             from: "random",
//           },
//           duration: 1,
//         },
//         "<"
//       );

//       // ========================================
//       // Hero Content Exit
//       // ========================================

//       timeline.to(
//         mainPhotoRef.current,
//         {
//           opacity: 0,
//           duration: 0.6,
//         },
//         2.2
//       );

//       timeline.to(
//         textRef.current,
//         {
//           opacity: 0,
//           duration: 0.6,
//         },
//         2.2
//       );

//       // ========================================
//       // Background Reveal
//       // ========================================

//       timeline.to(
//         backgroundAnimationRef.current,
//         {
//           opacity: 1,
//           duration: 0.5,
//         },
//         2.8
//       );

//       timeline.to(
//         backgroundAnimation2Ref.current,
//         {
//           opacity: 1,
//           duration: 0.5,
//         },
//         2.8
//       );
//     });

//     return () => {
//       mm.revert();
//     };
//   },
//   {
//     scope: heroRef,
//     dependencies: [],
//   }
// );
useGSAP(()=>{
const headlinetext= SplitText.create(headline.current,{
        type:"lines",
        mask:"lines"
})
const timehero = gsap.timeline({defaults:{ease:"none" , duration:0.7}});
    timehero.from(headlinetext.lines,{
    yPercent:100,
    })
    timehero.from(ovellaybackground.current,{
        scale:1.05,
    },"<")
    timehero.from(leftCloudRef.current,{
        y:200,
    },"<")
    timehero.from(rightCloudRef.current,{
        y:200,
    },"<")
    timehero.to(mainPhotoRef.current,{
        yPercent:-17
    },"<")
    timehero.from(mainpara.current,{
        y:20,
        opacity:0
    },"-=0.3")
    timehero.from(btn.current,{
        y:10,
        opacity:0
    },"<")
},{dependencies:[] , scope:heroRef})

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
    <div ref={ovellaybackground} className="absolute min-w-full min-h-full inset-0 pointer-events-none opacity-50 ">
    <Image
        
        src={Overlay}
        sizes="100vw"
        alt=""
        className="w-full absolute h-full object-cover"
    />
    <Image
        
        src={Overlay}
        sizes="100vw"
        alt=""

        className="w-full absolute top-0  -right-200 h-full object-cover"
    />
    </div>
    <div
    className="
        absolute
        inset-0
        pointer-events-none
        
        bg-[radial-gradient(circle_at_0%_100%,rgba(255,100,60,0.28),transparent_95%)]
        mask-[linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)]
    "></div>
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
            md:bottom-[-396px]
            bottom-[-420px]
            md:left-1/2
            blur-sm
            max-w-none
            -translate-x-1/2
            object-cover
            scale-50
            md:scale-105
            lg:scale-100
            [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]
        "
        />
    </div>

    {/* ========================================
        Desktop SVG Content
    ======================================== */}

    {/* <div
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
     {/* <div
            className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            md:flex
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
    </div> */}

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
        src={rightcloude}
        alt=""
        width={420}
        height={100}
        sizes="420px"
        loading="lazy"
        quality={75}
        className="
            absolute
            left-0
            md:-translate-x-1/4
            -translate-x-1/2
            top-60
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
        width={400}
        height={100}
        sizes="400px"
        loading="lazy"
        quality={65}
        className="
            absolute
            right-0
            md:translate-x-1/4
            translate-x-1/2
            top-50
            md:opacity-50
            opacity-50
            md:scale-150
            scale-125
            blur-[1px]

        "
        />
    </div>
    </main>
);
}
