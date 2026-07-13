import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";
export default function Card({photo,wrod,paragrag,count}){
const overlay=useRef()
const animationcard = ()=>{
        gsap.to(overlay.current,{
        y:-200,
        duration:0.8
        })
    }
    const cancelanimationcard = ()=>{
        gsap.to(overlay.current,{
        y:0,
        duration:0.8
        })
}
    return(
            <div  onMouseEnter={animationcard} onMouseLeave={cancelanimationcard} className="category min-w-full min-h-50 flex justify-between  px-9 relative bg-black overflow-hidden">
                    <div className="absolute  top-0  left-0 min-w-full min-h-full">
                    <Image
                    src={photo}
                    alt="buy"
                    width={1000}
                    height={600}
                    priority
                    className="w-full h-full absolute left-0 top-0 object-cover opacity-80"
                    />
                <div className="absolute right-19 text-white  mdtop-14 top-22"><ArrowRight size={90}></ArrowRight></div>
                    </div>
                    <div ref={overlay} className="absolute top-0 left-0 min-w-full min-h-full bg-black"></div>
                    <div className="w-full  z-10 flex justify-between px-7 border-t-gray-300 border pt-4">
                    <div className="flex gap-3.5 w-1/2 text-white  ">
                        <div className="size-6 rounded-full border border-white flex justify-center items-center text-xs"> <span className="relative text-center">{count}</span></div>
                        <div className="md:max-w-2/4 hidden md:block md:text-sm">{paragrag}</div>

                    </div>
                    <h2 className="w-1/2 text-5xl md:text-9xl text-white flex justify-start items-start">
                    <span className="word">{wrod}</span>
                    </h2>
                    </div>
                </div>
        )
}