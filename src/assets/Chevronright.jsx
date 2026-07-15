"use client";
import Image from "next/image";

const arrowImages = [
"/pexels-paul-scharf-2152542633-32863801.jpg",
"/pexels-dico-baskoro-693731013-18070628.avif",
"/pexels-ruby-ruby-20919055-16000743.jpg",
"/pexels-vlad-fonsark-2175898-5374438.webp",
];

const ARROW_CLIP_PATH =
"M0.987781 0.470544L0.529458 0.012219C0.521668 0.004385 0.511084 0.000010 0.500000 0.000010H0.041675C0.024841 0.000010 0.009592 0.010135 0.003176 0.025718C-0.003283 0.041302 0.000301 0.059218 0.012217 0.071133L0.441083 0.500000L0.012219 0.928869C0.000303 0.940784-0.003281 0.958702 0.003178 0.974284C0.009594 0.989867 0.024843 0.999992 0.041677 0.999992H0.500002C0.511086 0.999992 0.521668 0.995617 0.529460 0.987783L0.987785 0.529458C1.004074 0.513168 1.004074 0.486834 0.987781 0.470544Z";

export default function ArrowRight() {
return (
    <>
    <svg
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute w-0 h-0 overflow-hidden"
    >
        <defs>
        <clipPath id="arrowMask" clipPathUnits="objectBoundingBox">
            <path d={ARROW_CLIP_PATH} />
        </clipPath>
        </defs>
    </svg>

    <div className="flex flex-wrap gap-4">
        {arrowImages.map((src, index) => (
        <div key={`${index}-${src}`} className="md:size-70 size-15 arr arrow-item relative overflow-hidden">
            <Image
            src={src}
            alt="Arrow background"
            fill
            sizes="(max-width: 768px) 7rem, 18rem"
            className="arrow-image"
            priority={index === 0}
            />
        </div>
        ))}
    </div>
    </>
);
}
