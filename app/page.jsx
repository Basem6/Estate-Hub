"use client";
import Image from "next/image";
// import Find from "@/src/assets/FIND.svg"
import FindText from "@/src/assets/TextToSvgComponent";
import RealEstate from "@/src/assets/TextToSvgComponent (1)";
import  Arrowright  from "../src/assets/Chevronright";
import Cloud from "../src/assets/magnific_aQo6LbnfSh.png"
import Cloud2 from "../src/assets/pngwing.com.png"
import manandwomen from "@/src/assets/pexels-pavel-danilyuk-8525713.jpg"
import Textbg from "../src/assets/Textonbackground"
import Textbg2 from "../src/assets/Textonbg2"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useRef } from "react";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Card from "@/src/components/Card"
gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText,DrawSVGPlugin);
export default  function Home() {
  const homesection = useRef();
  const text = useRef();
  const overlay = useRef();
  const card= useRef();
  const bganimate = useRef();
  const bganimate2 = useRef();
  const bighome= useRef();
  const leftcloud= useRef();
  const sectionanimaton = useRef();
  const rightcloud = useRef();
  const bottomcloud = useRef();
  const para = useRef();
  const para2 = useRef();
  const section2 = useRef();
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
        pin:true
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
  },{scope:homesection,dependencies:[]})
  useGSAP(()=>{
    
    const arrows = gsap.utils.toArray(".arr")
    const parasplit = SplitText.create(para.current,{
      type:"lines"
    })
    const parasplit2 = SplitText.create(para2.current,{
      type:"lines",
      mask:"lines"
    })
    gsap.from(parasplit.lines,{
      scrollTrigger:{
        trigger:para.current,
        start:"top center",

      },
      opacity:0,
      scale:0.7,
      y:30,
      stagger:0.1,
      duration:0.4
    })
    gsap.from(parasplit2.lines,{
      scrollTrigger:{
        trigger:para2.current,
        start:"80% bottom",
      },
      yPercent:100,
      stagger:0.1,
      duration:0.5
    })
    gsap.from(arrows,{
      scrollTrigger:{
        trigger:arrows,
        start:"80% bottom",
      },
      opacity:0.3,
      x:7,
      scale:0.7,
      stagger:0.11,
      duration:0.5
    })
    
  },{scope:section2,dependencies:[]})
  
  return (
    <>
      <div ref={homesection}  className="flex min-h-screen overflow-x-clip relative  bg-gradient-to-b from-sky-400 via-sky-200 to-blue-100  flex-col flex-1 items-center justify-center  font-sans dark:bg-black">
          <Image
          ref={bighome}
          src="/magnific_ohM7s2T829.png"
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
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 text-gray-900 dark:text-white ">
          Find What Moves You
        </h1>
        <p className="md:text-lg max-w-2/3 md:max-w-full mb-3 text-gray-900/90 dark:text-gray-300">
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
            objectFit="contain"
            className="relative  w-220 h-100 top-50 -left-50 opacity-90 "
          />
          <Image
            ref={rightcloud}
            src={Cloud}
            alt="Clouds"
            objectFit="contain"
            className="absolute  w-220 h-100 top-20  -right-60 lg:-right-105  opacity-80 "
          />
        </div>
      </div>

      <div ref={section2} className="nestedsection  bg-transparent z-50 relative  flex flex-col items-center">
        <div ref={para} className="paragrag w-full  text-2xl text-center  md:text-4xl md:text-end p-4 mt-20 lg:mt-60">
            Experience exceptional homes crafted for<br></br> comfort, elegance, and modern living.<br></br> Discover exclusive properties in the most<br></br> desirable neighborhoods.
        </div>
        <div className="video md:w-352 md:h-260 p-3 md:p-0 w-full max-w-full h-100 mt-3  rounded-md md:mt-8">
            <video
            className="w-full h-full object-cover rounded-md"
            src="/videos/15272608_3840_2160_30fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div ref={para2} className="w-full text-center mt-10 md:mt-30 text-2xl md:text-5xl font-semibold">
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
      </div>
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
      <section>
      <div className="min-h-screen min-w-full bg-black">
          <div className="flex justify-between flex-wrap p-15">
            <h5 className="w-1/2 text-white hidden md:block">Serviecs</h5>
            <h2 className="text-white md:text-4xl text-3xl md:w-1/2">How FIND <br></br><span className="text-gray-400/90">Can Help You</span></h2>
          </div>
          <Card  photo={"/pexels-ruby-ruby-20919055-16000743.jpg"}  count={1} wrod={"Buy"} paragrag={"Browse thousands of verified properties using smart filters to find homes that match your budget, location, and lifestyle,Connect with a trusted real estate agent to ask questions, explore the property, and receive expert guidance,Finalize the paperwork, complete the payment securely, and get the keys to your new home."}></Card>
          <Card  photo={"/pexels-paul-scharf-2152542633-32863801.jpg"}  count={2} wrod={"Sell"} paragrag={"Discover a wide selection of homes for sale, from modern apartments to spacious family houses and luxury villas. Browse verified listings, compare prices, and find the perfect property to call your own."}></Card>
          <Card  photo={"/pexels-vlad-fonsark-2175898-5374438.jpg"}  count={3} wrod={"Rent"} paragrag={"Find the perfect rental property that fits your lifestyle and budget. Browse verified apartments, houses, and villas with detailed information to make renting simple and stress-free."}></Card>
          <div className="py-15 px-13">
            <div className="min-w-full flex justify-start flex-col gap-8 items-start">
                <p className="text-2xl text-white md:leading-6 md:max-w-1/3">No matter what you're looking for, we're here to help you find the perfect property. Explore our complete collection of verified <span className="text-gray-400/90"> listings and discover a home that matches your lifestyle, needs, and budget.</span></p>
                <button className="group inline-flex items-center border border-white  gap-2 rounded-full bg-black px-5 py-2 text-sm  text-white transition-colors duration-300 hover:bg-black/80">
                  <span className="relative bottom-0.5">Browse More Homes</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
              </button>
            </div>
          </div>
          <div className="flex justify-between py-25  mt-10 px-13 flex-wrap gap-2.5 ">
            
            <p className="md:text-4xl text-2xl text-white leading-7 w-full max-w-full md:max-w-1/4 md:w-1/2 md:mb-0 mb-4">No matter whatheelore collecti<span className="text-gray-400/90"> listings , and budget.</span></p>
            <div className="max-w-180">
              <p className="mb-4 text-white ">Whether you're buying your dream home or searching for the perfect rental, our platform makes <span className="text-gray-400/90"> the journey simple, secure, and enjoyable. Explore more properties and find the one that's right for you.</span></p>
              <button className="group inline-flex items-center border border-white  gap-2 rounded-full bg-gray-100 px-5 py-2 text-sm  text-black/80 transition-all duration-300 hover:opacity-45">
                  <span className="relative bottom-0.5">Browse More Homes</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
              </button>
            </div>
          </div>
          <div className="photos flex flex-wrap gap-4 justify-between items-center p-6 md:p-20">
              <div className="photo size-100 relative grow">
                  <Image
                                      src="/pexels-paul-scharf-2152542633-32863801.jpg"
                                      alt="buy"
                                      width={1000}
                                      height={600}
                                      priority
                                      className="w-full h-full absolute left-0 top-0 object-cover opacity-80"
                    />
                    <div className="absolute bottom-7 left-3">
                      <button className="group inline-flex items-center border border-gray-400/50  gap-2 rounded-full bg-transparent px-5 py-2 text-sm  text-gray-200 transition-all duration-300 hover:opacity-55">
                        <span className="relative bottom-0.5">Learn More</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                    <div className="absolute left-7 top-7 text-4xl text-white">
                    Mortgage<br></br><span className="text-gray-400">Services</span>
                  </div>
              </div>
              <div className="photo size-100 relative grow">
                  <Image
                                      src="/pexels-vlad-fonsark-2175898-5374438.jpg"
                                      alt="buy"
                                      width={1000}
                                      height={600}
                                      priority
                                      className="w-full h-full absolute left-0 top-0 object-cover opacity-80"
                    />
                    <div className="absolute bottom-7 left-3">
                    <button className="group inline-flex items-center border border-gray-400/50  gap-2 rounded-full bg-transparent px-5 py-2 text-sm  text-gray-200 transition-all duration-300 hover:opacity-55">
                      <span className="relative bottom-0.5">Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                  <div className="absolute left-7 top-7 text-4xl text-white">
                    Mortgage<br></br><span className="text-gray-400">Services</span>
                  </div>
              </div>
              <div className="photo size-100 relative grow">
                  <Image
                                      src="/pexels-dico-baskoro-693731013-18070628.jpg"
                                      alt="buy"
                                      width={1000}
                                      height={600}
                                      priority
                                      className="w-full h-full absolute left-0 top-0 object-cover opacity-80"
                    />
                    <div className="absolute bottom-7 left-3">
                    <button className="group inline-flex items-center border border-gray-400/50  gap-2 rounded-full bg-transparent px-5 py-2 text-sm  text-gray-200 transition-all duration-300 hover:opacity-55">
                      <span className="relative bottom-0.5">Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                  <div className="absolute left-7 top-7 text-4xl text-white">
                    Mortgage<br></br><span className="text-gray-400">Services</span>
                  </div>
              </div>
          </div>
      </div>
      </section>
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
              <div className="text-2xl pr-9 w-200">
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
                priority
                className="object-cover w-full h-full pointer-events-none "
              />
              </div>
            </div>
            <div className="flex justify-between  gap-4  items-center min-w-full min-h-80 flex-wrap-reverse">
              <div className="text-2xl pr-9 w-200">
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
              <div className="text-2xl pr-9 w-200">
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
                priority
                className="object-cover w-full h-full pointer-events-none "
              />
              </div>
            </div>
        </div>
      </section>
      <section className="min-h-screen min-w-full relative mt-20 flex justify-center items-center flex-col">
          <Image
                src="/pexels-peyton-austin-294202047-13251396.jpg"
                alt="photocard"
                objectFit="cover"
                width={1000}
                height={600}
                className="w-full h-full object-cover absolute left-0 top-0 brightness-30"
          />
          <div className="text-white z-100 md:text-4xl px-3 whitespace-nowrap  text-md">Find You. <span className="text-gray-300/90 ">We Will Help You Get There.</span></div>
          <button className="group inline-flex  items-center mt-3 z-20  gap-2 rounded-full bg-white px-5 py-1.5 md:py-2 text-xs md:text-sm  text-black/80 transition-all duration-300 hover:opacity-55">
                      <span className="relative md:bottom-0.5">Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
          </button>
      </section>
      <section className="min-w-full min-h-screen overflow-hidden relative bg-black p-16 pt-20 flex justify-between">
        <div className="md:w-2/3 w-full">
          <div className="text-gray-100">
            <h4 className="text-2xl min-w-full">Subscribe to our Newsletterf</h4>
            <div className="relative w-full  h-14">
            <input type="email" className="w-full absolute left-0 my-5 outline-none placeholder:text-sm placeholder:text-gray-200/50 border-b-gray-400 border-b py-1 pr-7" placeholder="Enter aderess" />
            <ArrowRight
                        size={16}
                        className="transition-transform absolute right-3 bottom-3 duration-300 group-hover:translate-x-1"
            />
            </div>
          </div>
          <table className="mt-6 w-full border-collapse hidden md:table  ">
            <thead>
              <tr className="">
                <th className="py-3 text-left text-sm font-medium text-gray-300/80">
                  Head Office
                </th>
                <th className="py-3 text-left text-sm font-medium text-gray-300/80">
                  Email Us
                </th>
                <th className="py-3 text-left text-sm font-medium text-gray-300/80">
                  Call Us
                </th>
              </tr>
            </thead>
        <tbody>
          <tr className="">
            <td className="py-4 text-gray-100 ">
              A 12 Main Street Omar Makram,<br></br> Cairo, Egypt
            </td>
            <td className="py-4 text-gray-100">
              hello@example.com
            </td>
            <td className="py-4 text-gray-100">
              +20 100 123 4567
            </td>
          </tr>
        </tbody>
          </table>
          <div className="md:h-100 h-80 ointer-events-none md:mt-0 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="85 0 500 500"
              className="w-full h-auto scale-125"
            >
              <text
                x="207.312"
                y="101.836"
                transform="matrix(4.748763, 0, 0, 4.391594, -859.228467, -274.465122)"
                style={{
                  fill: "#fff",
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
                d="M241.725 85.291L241.725 116.468L241.725 172.045L213.136 173.975L222.664 127.707L209.959 85.291Z"
                fill="white"
                stroke="white"
                fillRule="nonzero"
                style={{ paintOrder: "stroke" }}
              />
            </svg>
          </div>
        </div> 
        <div className="w-1/3  justify-between hidden md:flex">
          <div className="text-white text-xl flex flex-col  gap-1 pl-40">
            <a href="#"  className="transition-colors duration-300 hover:text-gray-400">Search</a>
            <a href="#"  className="transition-colors duration-300 hover:text-gray-400">Agents</a>
            <a href="#"  className="transition-colors duration-300 hover:text-gray-400">Join</a>
            <a href="#"  className="transition-colors duration-300 hover:text-gray-400">About us</a>
            <a href="#"  className="transition-colors duration-300 hover:text-gray-400">Agent Portal</a>
          </div>
          <div className="text-gray-300/80 text-sm flex flex-col  gap-1 pl-20">
            <a href="#" className="transition-colors duration-300 hover:text-white">Facebook</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Instgram</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Youtube</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Linkedin</a>
          </div>
        </div>
        <div className="absolute bottom-0 md:left-16 left-4">
          <div className="text-gray-300/80 text-sm flex  py-2  md:gap-6 gap-6 flex-wrap">
            <a href="#" className="transition-colors duration-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Cookie Policy</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Disclaimer</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Accessibility</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">FAQ</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Support</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Contact Us</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Property Listings</a>
          <a href="#" className="transition-colors duration-300 hover:text-white">Buy a Home</a>
          <a href="#" className="transition-colors duration-300 hover:text-white">Rent a Property</a>
          </div>
        </div>
      </section>
    </> 
  );
}