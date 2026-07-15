"use client";
import Image from "next/image";
import FindText from "@/src/assets/TextToSvgComponent";
import RealEstate from "@/src/assets/TextToSvgComponent (1)";
import Cloud from "../src/assets/magnific_aQo6LbnfSh.png"
import Cloud2 from "../src/assets/pngwing.com.avif"
import manandwomen from "@/src/assets/pexels-pavel-danilyuk-8525713.jpg"
import Textbg from "../src/assets/Textonbackground"
import Textbg2 from "../src/assets/Textonbg2"

import About from "@/src/components/About"
import Footer from "@/src/components/Footer"
import Category from "@/src/components/Category"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useRef } from "react";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText,DrawSVGPlugin);
export default  function Home() {
  const homesection = useRef();
  const text = useRef();
  const bganimate = useRef();
  const bganimate2 = useRef();
  const bighome= useRef();
  const leftcloud= useRef();
  const sectionanimaton = useRef();
  const rightcloud = useRef();
  const bottomcloud = useRef();
  useGSAP(()=>{
    const mm = gsap.matchMedia();
    const tl= gsap.timeline({
      scrollTrigger:{
        trigger:sectionanimaton.current,
        start:"center top",
        end:"+=5800",
        scrub:3,
        toggleActions:"play none none reverse"
      },
    })
    gsap.to(homesection.current,{
      scrollTrigger:{
        trigger:homesection.current,
        scrub:3,
        start:"top top",
        end:"+=4600",
        pin:true,
        refreshPriority: 1,
      }
    })
    gsap.to(text.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        start:"top top",
        scrub:3,
        end:"+=1000",
      },
      scale:0.95,
      opacity:0,
      y:10,
    })
    mm.add("(min-width: 768px)", () => {
    gsap.to(bighome.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        scrub:3,
        start:"top top",
        end:"+=1000",
      },
      scale:1.2,
      y:-155
    })
    })
    mm.add("(max-width: 768px)", () => {
    gsap.to(bighome.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        scrub:3,
        start:"top top",
        end:"+=1000",
      },
      scale:1.7,
      y:-170
    })
    })
    tl.to(".rr", {
      scrollTrigger:{
        trigger:sectionanimaton.current,
        start:"center top",
        end:"+=5800",
        toggleActions:"play none none reverse"
      },
      opacity:1,
      duration:0.01
    });
    tl.from(".text1", {
    drawSVG: 0,
    stagger: {
      each: 0.05,
      from: "random",
    },
    },"<");
    tl.from(".text2", {
    drawSVG: 0,
    stagger: {
      each:  0.05,
      from: "random",
    },
    },"<");
    gsap.to(bighome.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        start:"bottom top",
        end:"+=5800",
        toggleActions:"play none none reverse",
      },
      delay:1,
      opacity:0,
      duration:1
    })
    gsap.to(bganimate.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        start:"center center",
        end:"+=5800",
      },
      delay:1.5,
      opacity:1,
      duration:0.8
    })
    gsap.to(bganimate2.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        start:"center center",
        end:"+=5800",
      },
      delay:1.5,
      opacity:1,
      duration:0.8
    })
    gsap.to(leftcloud.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        scrub:3,
        start:"top top",
        end:"+=1000",
      },
      x:-120
    })
    gsap.to(rightcloud.current,{
      scrollTrigger:{
        trigger:sectionanimaton.current,
        scrub:3,
        start:"top top",
        end:"+=1000",
      },
      x:120
    })
    mm.add("(min-width: 768px)", () => {
      gsap.to(bottomcloud.current,{
        scrollTrigger:{
          trigger:sectionanimaton.current,
          scrub:3,
          start:"top top",
          end:"+=1000",
        },
        y:-120
      })
    });
    mm.add("(max-width: 768px)", () => {
      gsap.to(bottomcloud.current,{
        scrollTrigger:{
          trigger:sectionanimaton.current,
          scrub:3,
          start:"top top",
          end:"+=1000",
        },
        y:-30
      })
    });
    ScrollTrigger.refresh();
  },{scope:homesection,dependencies:[]})
  return (
    <>
      <main ref={homesection}  className="flex min-h-screen overflow-x-clip relative  bg-gradient-to-b from-sky-400 via-sky-200 to-blue-100  flex-col flex-1 items-center justify-center  font-sans dark:bg-black">
          <Image
          ref={bighome}
          src="/magnific_ohM7s2T829.avif"
          alt="Hero"
          width={1000}
          height={600}
          priority
          className="object-contain lg:scale-100 scale-125 md:scale-105 md:-bottom-40   -bottom-20 lg:-bottom-110 absolute pointer-events-none z-10"
        />
        <Image
            ref={bottomcloud}
            src={Cloud2}
            alt="Clouds"
            priority
            objectFit="cover"
            className="absolute pointer-events-none z-40  w-full  lg:scale-100 scale-125 md:scale-105 md:-bottom-40   -bottom-13 lg:-bottom-80  "
          />
        <div className="min-w-full min-h-screen flex justify-center items-center absolute left-0 top-0">
        <div className="flex flex-col gap-16  justify-center items-center text-center z-20 pointer-events-none relative rr opacity-0 ">
          <RealEstate></RealEstate>
          <FindText ></FindText>
          <div className="absolute left-0 w-full h-full top-0 flex flex-col gap-16  justify-center items-center text-center z-20 pointer-events-none rr opacity-0 ">
            <div ref={bganimate} className=" opacity-0   -z-20">
            <Textbg></Textbg>
            </div>
            <div ref={bganimate2}  className=" opacity-0  -z-20">
            <Textbg2></Textbg2>
            </div>
          </div>
        </div>
        </div>
        <main ref={text} className="flex  flex-col items-center justify-center  flex-1 text-center  relative  md:bottom-35 bottom-14">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 text-gray-900 ">
          Find What Moves You
        </h1>
        <p className="md:text-lg max-w-2/3 md:max-w-full mb-3 text-gray-900/90">
          Expert agents. Real guidance. A clear path to find what's next
        </p>
        <button className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm  text-white transition-colors duration-300 hover:bg-black/80">
          <span className="relative bottom-0.5">Find Properties</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
        </main>
        <div ref={sectionanimaton} id="se" className="clouds absolute  left-0 top-0 min-w-full min-h-screen z-0 pointer-events-none">
          <Image
            ref={leftcloud}
            src={Cloud}
            alt="Clouds"
            priority
            objectFit="contain"
            className="relative  w-220 h-100 top-50 -left-50 opacity-90 "
          />
          <Image
            ref={rightcloud}
            src={Cloud}
            alt="Clouds"
            priority
            objectFit="contain"
            className="absolute  w-220 h-100 top-20  -right-60 lg:-right-105  opacity-80 "
          />
        </div>
      </main>
      <About></About>
      <section>
      <div className="min-h-screen min-w-full px-10 bg-gray-100 rounded-t-lg py-6">
        <h2 className="text-4xl mb-20 md:mb-6"><span>Dont`t Take </span><span className="opacity-35">Our World For It.</span></h2>
        <div  className="min-w-full flex  flex-wrap min-h-130 md:gap-0 gap-13   justify-between items-center">
          <div className="">
            <div className="md:w-180 md:h-150">
              <Image
                src={manandwomen}
                alt="photocard"
                objectFit="contain"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="min-w-1/2 md:max-w-1/2 flex justify-center  text-3xl font-serif">
            <div className="md:mt-8 w-full max-w-md rounded-2xl border border-neutral-800/20 bg-white p-6 rotate-3  text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-neutral-900 size-6 flex justify-center items-center border border-gray-400 rounded-full">1</span>
                <span className="text-sm text-neutral-400 font-sans">June 1, 2026</span>
              </div>
              <p className=" text-neutral-900 mb-6">
                " Lorem ipsum dolor sit amet,<span className="text-blue-900"> consectetur adipiscing elit. Vivamus</span>
                lacinia odio vitae <span className="text-red-900">vestibulum. Donec in efficitur ipsum</span>, sed dapibus
                eros. "
              </p>
              <div className="mb-4 flex items-start justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-neutral-600 text-neutral-600"
                      }
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </section>
      <Category></Category>
      <section className="min-h-screen min-w-full ">
        <div className="flex justify-between py-25  mt-10 px-13 flex-wrap gap-2.5 ">
            <p className="text-4xl text-black leading-9 max-w-1/4 w-1/2">Blog<span className="text-gray-400/90"> &<br></br>Resources</span></p>
            <div className="max-w-180">
              <p className="mb-4 text-black ">Whether you're buying your dream home or searching for the perfect rental, our platform makes <span className="text-gray-400/90"> the journey simple, secure, and enjoyable. Explore more properties and find the one that's right for you.</span></p>
              <button className="group inline-flex items-center border  gap-2 rounded-full bg-black px-5 py-2 text-sm  text-gray-100 transition-all duration-300 hover:opacity-45">
                  <span className="relative bottom-0.5">Browse More Homes</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
              </button>
            </div>
        </div>
        <div className="flex gap-7 md:px-14 px-5 flex-col">
            <div className="flex justify-between gap-4  items-center min-w-full min-h-80 flex-wrap-reverse">
              <div className="text-2xl pr-9  w-180">
                <h6 className="text-sm mb-15">2026-03-01</h6>
                <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?
                </div>
                <p className="text-sm mt-7 opacity-60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nostrum molestiae repellat quidem possimus magni incidunt odit ab, dolores a.
                </p>
                <button className="group mt-15 inline-flex items-center border border-gray-400/50  gap-2 rounded-full bg-white px-5 py-2 text-sm  text-black transition-all duration-300 hover:opacity-55">
                      <span className="relative bottom-0.5">Read More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                </button>
              </div>
              <div className="w-150 h-80">
                <Image
                src="/pexels-ruby-ruby-20919055-16000743.jpg"
                alt="informatino"
                objectFit="contain"
                height={600}
                width={1000}
                className="object-cover w-full h-full pointer-events-none "
              />
              </div>
            </div>
            <div className="flex justify-between  gap-4  items-center min-w-full min-h-80 flex-wrap-reverse">
              <div className="text-2xl pr-9 w-180">
                <h6 className="text-sm mb-15">2026-03-01</h6>
                <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?
                </div>
                <p className="text-sm mt-7 opacity-60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nostrum molestiae repellat quidem possimus magni incidunt odit ab, dolores a.
                </p>
                <button className="group mt-15 inline-flex items-center border border-gray-400/50  gap-2 rounded-full bg-white px-5 py-2 text-sm  text-black transition-all duration-300 hover:opacity-55">
                      <span className="relative bottom-0.5">Read More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                </button>
              </div>
              <div className="w-150 h-80">
                <Image
                src="/pexels-vlad-fonsark-2175898-5374438.jpg"
                alt="informatino"
                objectFit="contain"
                height={600}
                width={1000}
                priority
                className="object-cover w-full h-full pointer-events-none "
              />
              </div>
            </div>
            <div className="flex justify-between  gap-4  items-center min-w-full min-h-80  flex-wrap-reverse">
              <div className="text-2xl pr-9  w-180">
                <h6 className="text-sm mb-15 hidden ">2026-03-01</h6>
                <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam?
                </div>
                <p className="text-sm mt-7 opacity-60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nostrum molestiae repellat quidem possimus magni incidunt odit ab, dolores a.
                </p>
                <button className="group mt-15 inline-flex items-center border border-gray-400/50  gap-2 rounded-full bg-white px-5 py-2 text-sm  text-black transition-all duration-300 hover:opacity-55">
                      <span className="relative bottom-0.5">Read More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                </button>
              </div>
              <div className="w-150 h-80">
                <Image
                src="/pexels-paul-scharf-2152542633-32863801.jpg"
                alt="informatino"
                objectFit="contain"
                height={600}
                width={1000}
                className="object-cover w-full h-full pointer-events-none "
              />
              </div>
            </div>
        </div>
      </section>
      <Footer></Footer>
    </> 
  );
}