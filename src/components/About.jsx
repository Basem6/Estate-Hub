"use client";
import dynamic from "next/dynamic";
const Arrowright = dynamic(() => import("@/src/assets/Chevronright"));
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
//gsap
import { useGSAP , gsap  , SplitText } from "../lib/gsap";
export default function About(){
const videoRef = useRef();
const para2 = useRef();
const section2 = useRef();
useGSAP(()=>{
    const arrows = gsap.utils.toArray(".arr")
    const parasplit2 = SplitText.create(para2.current,{
        type:"lines",
        mask:"lines"
    })
    const timeline = gsap.timeline({defaults:{ease:"none"},
        scrollTrigger:{
        trigger:section2.current,
        start:"10% bottom",
        once: true,
        }
    })
    timeline.to(".text-fill",{
        clipPath: "inset(0 0% 0 0)",
        duration:1.6,
    })
    timeline.fromTo(
        videoRef.current,
        {
        clipPath: "inset(0 0 0 100%)",
        },
        {
        clipPath: "inset(0 0 0 0%)",
        duration:1,
    },"<")
    const tl = gsap.timeline({
        scrollTrigger:{
        trigger:para2.current,
        start:"70% bottom",
        once: true,
        },
        duration:0.6,
    })

    tl.from(arrows,{
        opacity:0.3,
        x:7,
        scale:0.7,
        stagger:0.1
    },0)
    tl.from(parasplit2.lines,{
        yPercent:100,
        stagger:0.08
    })
    return ()=>{
        parasplit2.revert();
    }
},{scope:section2,dependencies:[]})

return(
    <section ref={section2} className="relative  overflow-x-clip md:pt-60 z-2 pt-40   px-2  flex flex-col items-center">
        <div  className="text-wrapper flex justify-end">
            <div className="text-base text-center md:w-1/2 text-xl   md:text-5xl "> 
            <span className="text-black/20">
            Your life’s changing. Don’t just find a
            place — find what’s next.
            </span>
            <span className="text-gray-300/30">We help you
            move forward with clarity, confidence,
            and the right agent by your side.
            </span>
            </div>
            <div className="text-fill text-center md:w-1/2 text-xl  md:text-5xl "> 
            <span className="text-black/90">
            Your life’s changing. Don’t just find a
            place — find what’s next.
            </span>
            <span className="text-gray-400/50">We help you
            move forward with clarity, confidence,
            and the right agent by your side.
            </span>
        </div>
        </div>
        <div ref={videoRef} className="video  md:w-352 md:h-260 p-1 md:p-0 w-full max-w-full h-100 mt-10  rounded-sm md:mt-20">
            <video
            className="w-full h-full object-cover rounded-md"
            src="https://res.cloudinary.com/dhmk6ap4o/video/upload/w_960,q_auto,f_auto/v1784033373/15272608_3840_2160_30fps_wlgnhs.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
        </div>
        <div className="w-full text-center mt-10 md:mt-30 text-2xl md:text-5xl font-semibold">
        Find the Perfect Place to Call Home
        </div>
        <div className="md:mt-30 mt-10"> 
        <Arrowright></Arrowright>
        </div>
        <div ref={para2}  className="w-full text-center px-3 mt-23 md:mt-30 text-xl lg:px-120 font-serif">
        Browse carefully selected homes, apartments, and luxury properties in the best locations. Your dream home is only a few clicks away.
        </div>
        <div className="min-w-full flex  flex-wrap gap-6 md:gap-0   min-h-130 px-10 mt-50 justify-between">
        <div className="">
            <h4 className="text-4xl mb-10">Real Estate,</h4>
            <button className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm  text-white transition-colors duration-300 hover:bg-black/80">
            <span className="relative">Find Properties</span>
            <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
            />
            </button>
        </div>
        <div className="md:w-1/2 p-3">
            <h6 className="mb-9 relative md:right-10">Steps:</h6>
            <div className="flex gap-9 flex-col">
            <div className="flex gap-2.5 items-start">
                <div className="size-4 bg-black opacity-10 rounded-full"></div>
                <p className="max-w-5/6  md:text-xl relative bottom-1.5"><span>Search Properties. </span><span className="opacity-40">Browse thousands of verified homes and filter by location, price, property type, and amenities.</span></p>
            </div>
            <div className="flex gap-2.5 items-start">
                <div className="size-4 bg-black opacity-10 rounded-full"></div>
                <p className="max-w-5/6   md:text-xl relative bottom-1.5"><span>Schedule a Visit. </span><span className="opacity-40">Book a property tour at your convenience and explore your favorite listings in person.</span></p>
            </div>

            <div className="flex gap-2.5 items-start">
                <div className="size-4 bg-black opacity-10 rounded-full"></div>
                <p className="max-w-5/6   md:text-xl relative bottom-1.5"><span>Move Forward. </span><span className="opacity-40">Complete the paperwork with confidence and enjoy your new home with ease.</span></p>
            </div>
            </div>
        </div>
        </div>
    </section>
)
}