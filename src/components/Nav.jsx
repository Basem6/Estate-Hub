"use client";

import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useGSAP, gsap , SplitText } from "../lib/gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Nav() {
const [openNav, setOpenNav] = useState(false);

const nav = useRef(null);
const mobilenav = useRef(null);
const upperline= useRef(null);
const bottomline= useRef(null);

const pathname = usePathname();

const links = [
    { href: "/", label: "Search" },
    { href: "/agents", label: "Agents" },
    { href: "/join", label: "Join" },
];



useEffect(() => {
    const mobileMenu = mobilenav.current;

    if (!mobileMenu) return;
    const timelineNav = gsap.timeline();
    if (openNav) {
    const splitLinks = SplitText.create(".mobile-link", {
    type: "lines",
    mask: "lines",
  })
    document.body.classList.add("noscroll");

    timelineNav
    .to(upperline.current, {
        y:4,
        duration: 0.3,
        ease: "power2.out",
    })
    .to(bottomline.current, {
        y:-4,
        duration: 0.3,
        ease: "power2.out",
    },"<")
    .to(upperline.current, {
        rotate:45,
        duration: 0.3,
        ease: "power2.out",
    })
    .to(bottomline.current, {
        rotate: -45,
        duration: 0.3,
        ease: "power2.out",
    },"<")
    .from(
      splitLinks.lines,
      {
        yPercent: 100,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
        mobileMenu,
        {
        opacity:1,
        clipPath: "inset(0 0 100% 0)",
        },
        {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.9,
        opacity:1,
        ease: "power3.inOut",
        }
    );
    } else {
    document.body.classList.remove("noscroll");
     timelineNav
     .to(upperline.current, {
        rotate:0,
        duration: 0.3,
        ease: "power2.out",
    })
    .to(bottomline.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
    },"<")
    .to(upperline.current, {
        y:0,
        duration: 0.3,
        ease: "power2.out",
    })
    .to(bottomline.current, {
        y:0,
        duration: 0.3,
        ease: "power2.out",
    },"<")
    gsap.to(mobileMenu, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.7,
        opacity:0,
        ease: "power3.inOut",
    });
    }

    return () => {
    document.body.classList.remove("noscroll");
    };
}, [openNav]);

// ==========================================
// NAV SCROLL ANIMATION
// ==========================================

useGSAP(() => {
    gsap.to(nav.current, {
    scrollTrigger: {
        trigger: nav.current,
        start: "top top",
        toggleActions: "play none none reverse",
    },
    yPercent: -100,
    duration: 0.7,
    });
}, []);

return (
    <>

    <div
        ref={nav}
        className="fixed left-0 top-0 z-50 min-h-10 w-full"
    >
        <div
        className="
            flex
            h-full
            w-full
            items-center
            justify-between
            px-4
            py-6
            md:px-22
            md:py-2
        "
        >
        {/* =================================================
            LOGO
        ================================================= */}
        <div className="logo">

            <Image 
            src="/logo.svg"
            alt="logo" 
            width={80}
            height={80}
            />
        </div>
        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
            className="
            hidden
            flex-row
            items-center
            justify-center
            gap-11
            px-4
            font-semibold
            lg:flex
            "
        >
            {links.map((link) => {
            const isActive =
                link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

            return (
                <Link
                key={link.href}
                href={link.href}
                className={`
                    py-2
                    transition-all
                    duration-300
                    hover:text-black
                    ${
                    isActive
                        ? "text-black"
                        : "text-gray-800"
                    }
                `}
                >
                {link.label}
                </Link>
            );
            })}

            {/* Paperwork */}

            <button
            type="button"
            className="
                flex
                items-center
                gap-3
                text-gray-800
                transition-colors
                duration-300
                hover:text-black
            "
            >
            <span className="relative bottom-0.5 text-md">
                Paperwork
            </span>

            <ChevronDown size={14} />
            </button>

            {/* Resources */}

            <button
            type="button"
            className="
                flex
                items-center
                gap-3
                text-gray-800
                transition-colors
                duration-300
                hover:text-black
            "
            >
            <span className="relative bottom-0.5 text-md">
                Resources
            </span>

            <ChevronDown size={14} />
            </button>

            {/* About */}

            <button
            type="button"
            className="
                flex
                items-center
                gap-3
                text-gray-800
                transition-colors
                duration-300
                hover:text-black
            "
            >
            <span className="relative bottom-0.5 text-md">
                About
            </span>

            <ChevronDown size={14} />
            </button>
        </nav>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div>
            {/* Mobile Button */}

            <button
            type="button"
            onClick={() => setOpenNav(!openNav)}
            className="
                relative
                bottom-1
                flex
                z-50
                items-center
                lg:hidden
            "
            aria-label="Open menu"
            >
            <div className="flex z-50 flex-col items-center justify-center gap-1.5">
                <div ref={upperline} className="h-0.5 w-6 bg-black" />
                <div ref={bottomline} className="h-0.5 w-6 bg-black" />
            </div>
            </button>

            {/* Sign In */}

            <button
            type="button"
            className="
                group
                hidden
                items-center
                gap-2
                rounded-full
                bg-black
                px-4.5
                py-2.5
                font-semibold
                text-gray-100
                transition-colors
                duration-300
                hover:bg-black/80
                md:inline-flex
            "
            >
            <span>Sign In</span>
            </button>
        </div>
        </div>
    </div>


    <div
        ref={mobilenav}
        className="
        fixed
        inset-0
        z-10
        min-h-screen
        w-full
        overflow-hidden
        bg-white
        lg:hidden
        "
        style={{
        clipPath: "inset(100% 0 0 0)",
        }}
    >
        {/* =================================================
            MOBILE HEADER
        ================================================= */}
        {/* =================================================
            MOBILE LINKS
        ================================================= */}

        <nav
        className="
            flex
            fixed
            flex-col
            gap-7
            px-8
            pt-22
            text-3xl
        "
        >
        {links.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpenNav(false)}
            className="transition-opacity mobile-link duration-300 hover:opacity-50"
            >
            {link.label}
            </Link>
        ))}

        <button
            type="button"
            className="
            
            mobile-link
            
            "
        >
            <div className="flex
            items-center
            gap-3
            text-left">
            <span>Paperwork</span>
            <span className="relative top-1"><ChevronDown size={22} /></span>
            </div>
            
        </button>

        <button
            type="button"
            className="mobile-link"
        >   
            <div className="
            flex
            items-center
            gap-3
            text-left">
                <div> <span>Resources</span></div>

                <span className="relative top-1"><ChevronDown size={22} /></span>
            </div>
            
        </button>

        <button
            type="button"
            className="
            mobile-link
            "
        >
            <div className="flex
            items-center
            gap-3

            text-left">
                <span>About</span>
            <span className="relative top-1"><ChevronDown size={22} /></span>
            </div>
            
        </button>

        
        </nav>
        <button
            type="button"
            className="
            mt-4
            w-3/4
            left-1/2
            -translate-x-1/2
            absolute
            rounded-full
            bg-black
            px-7
            py-3
            bottom-15
            font-semibold
            text-white
            "
        >
            Sign In
        </button>
    </div>
    </>
);
}