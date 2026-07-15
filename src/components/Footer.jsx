import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function Footer(){
    return(
            <div>
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
            </div>
    )
}