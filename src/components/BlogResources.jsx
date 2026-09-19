import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function BlogResources(){
    return(
        <section className="min-h-screen min-w-full ">
        <div className="flex justify-between py-25  mt-10 px-13 flex-wrap gap-2.5 ">
            <p className="text-4xl text-black leading-9 max-w-1/4 w-1/2">Blog<span className="text-gray-400/90"> &<br></br>Resources</span></p>
            <div className="max-w-180">
            <p className="mb-4 text-black ">Whether you&apos;re buying your dream home or searching for the perfect rental, our platform makes <span className="text-gray-400/90"> the journey simple, secure, and enjoyable. Explore more properties and find the one that&apos;s right for you.</span></p>
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
                src="/images/pexels-nguyendesigner-13600518.jpg"
                alt="informatino"
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
                src="/images/pexels-smail-dahmani-2278818-27268863.jpg"
                alt="informatino"
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
                src="/images/pexels-willianjusten-33261394.jpg"
                alt="informatino"
                height={600}
                width={1000}
                className="object-cover w-full h-full pointer-events-none "
            />
            </div>
            </div>
        </div>
        </section>
    )
}