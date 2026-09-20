"use client";

import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useGSAP, gsap , SplitText } from "../lib/gsap";
import { useEffect, useRef, useState } from "react";

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
        clipPath: "inset(0 0 100% 0)",
        },
        {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.9,
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
    {/* =====================================================
        DESKTOP / MAIN NAV
    ===================================================== */}

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

        <Link
            href="/"
            className="
            pointer-events-auto
            relative
            right-7
            min-h-10
            min-w-37
            md:right-0
            "
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className="absolute left-0 top-0 scale-125"
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
        </Link>

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
                bottom-2
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

    {/* =====================================================
        MOBILE NAV
        IMPORTANT:
        Do NOT use {openNav && ...}
    ===================================================== */}

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
            <span><ChevronDown size={22} /></span>
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
                <span>Resources</span>
                <span><ChevronDown size={22} /></span>
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
            <span><ChevronDown size={22} /></span>
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
            bottom-5
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