import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger,SplitText,DrawSVGPlugin);
export { useGSAP,  gsap, ScrollTrigger, SplitText, DrawSVGPlugin };