"use client";
import  Arrowright  from "@/src/assets/Chevronright";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
//gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);
export default function About(){
const para = useRef();
const para2 = useRef();
const section2 = useRef();
useGSAP(()=>{
    const arrows = gsap.utils.toArray(".arr")
    const parasplit = SplitText.create(para.current,{
        type: "lines",
    })
    const parasplit2 = SplitText.create(para2.current,{
        type:"lines",
        mask:"lines"
    })
    gsap.from(parasplit.lines,{
        scrollTrigger:{
        trigger:para.current,
        start:"top center",
        once: true,
        },
        opacity:0,
        scale:0.7,
        y:30,
        stagger:0.1,
        duration:0.4
    })
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
        stagger:0.12
    },0)
    tl.from(parasplit2.lines,{
        yPercent:100,
        stagger:0.08
    })
    return ()=>{
        parasplit.revert();
        parasplit2.revert();
    }
},{scope:section2,dependencies:[]})

return(
    <section ref={section2} className="nestedsection   z-50 relative  flex flex-col items-center">
        <div ref={para} className="paragrag  w-full  text-2xl text-center  md:text-4xl md:text-end p-4 mt-20 lg:mt-60">
            Experience exceptional homes crafted for<br></br> comfort, elegance, and modern living.<br></br> Discover exclusive properties in the most<br></br> desirable neighborhoods.
        </div>
        <div className="video md:w-352 md:h-260 p-3 md:p-0 w-full max-w-full h-100 mt-3  rounded-md md:mt-8">
            <video
            className="w-full h-full object-cover rounded-md"
            src="https://res.cloudinary.com/dhmk6ap4o/video/upload/v1784033373/15272608_3840_2160_30fps_wlgnhs.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
        </div>
        <div className="w-full text-center mt-10 md:mt-30 text-2xl md:text-5xl font-semibold">
        Find the Perfect Place to Call Home
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