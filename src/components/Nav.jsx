"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from 'next/navigation'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
export default function Nav() {
const nav=useRef()
useGSAP(()=>{
    gsap.to(nav.current,{
    scrollTrigger:{
    trigger:nav.current,
    start:"top top",
    toggleActions:"play none none reverse"
    },
    yPercent:-100,
    duration:0.7
    })
},[])
const pathname = usePathname();
const links = [
    { href: '/', label: 'Search' },
    { href: '/agents', label: 'Agents' },
    { href: '/join', label: 'Join' },
]
return (
    <div ref={nav} className="fixed min-w-full min-h-10  z-50">
                <div className="w-full h-full flex justify-between items-center px-4 md:px-22 md:py-2 py-6">
                    <div className="pointer-events-none relative w-37 min-h-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 500"
                            className="absolute top-0 scale-125"
                            >
                            <text
                                x="207.312"
                                y="101.836"
                                transform="matrix(2.823799 0 0 2.52825 -465.455055 -139.180376)"
                                style={{
                                fontFamily: "Arial, sans-serif",
                                fontSize: 28,
                                fontWeight: 700,
                                paintOrder: "fill",
                                whiteSpace: "pre",
                                }}
                            >
                                F ND
                            </text>

                            <path
                                d="M187.457 68.085L187.457 85.535L187.457 116.643L171.374 117.722L176.735 91.825L169.588 68.085Z"
                                fill="currentColor"
                                stroke="currentColor"
                                fillRule="nonzero"
                                style={{ paintOrder: "stroke" }}
                            />
                        </svg>
                    </div>
                    <nav className="hidden lg:flex flex-row items-center gap-9 justify-center px-4">
                        {links.map((link) => {
                        const isActive =
                        link.href === "/"
                            ? pathname === "/"
                            : pathname === link.href || pathname.startsWith(`${link.href}/`);
                        return(
                            <Link key={link.href} href={link.href} className={`transition-all  duration-300  py-2    hover:black ${isActive?"black":"text-gray-800"}`}>
                                {link.label}
                            </Link>
                        )
                    }
                        )}    
                        <div className="flex gap-3 items-center">
                            <div className="text-md relative bottom-0.5">Paperwork</div>
                            <ChevronDown size={14}></ChevronDown>
                        </div> 
                        <div className="flex gap-3 items-center">
                            <div className="text-md relative bottom-0.5">Resources</div>
                            <ChevronDown size={14}></ChevronDown>
                        </div> 
                        <div className="flex gap-3 items-center">
                            <div className="text-md relative bottom-0.5">About</div>
                            <ChevronDown size={14}></ChevronDown>
                        </div> 
                    </nav>
                    <div>
                        <button className="group hidden md:inline-flex items-center gap-2 rounded-full bg-black px-4.5 py-2.5 text-sm  text-gray-100 transition-colors duration-300 hover:bg-black/80">
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
    </div>
)
}