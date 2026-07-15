import Card from "@/src/components/Card"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function Category(){
    return(
        <section>
        <div className="min-h-screen min-w-full bg-black">
            <div className="flex justify-between flex-wrap p-15">
                <h5 className="w-1/2 text-white hidden md:block">Serviecs</h5>
                <h2 className="text-white md:text-4xl text-3xl md:w-1/2">How FIND <br></br><span className="text-gray-400/90">Can Help You</span></h2>
            </div>
            <Card  photo={"/pexels-ruby-ruby-20919055-16000743.jpg"}  count={1} wrod={"Buy"} paragrag={"Browse thousands of verified properties using smart filters to find homes that match your budget, location, and lifestyle,Connect with a trusted real estate agent to ask questions, explore the property, and receive expert guidance,Finalize the paperwork, complete the payment securely, and get the keys to your new home."}></Card>
            <Card  photo={"/pexels-paul-scharf-2152542633-32863801.jpg"}  count={2} wrod={"Sell"} paragrag={"Discover a wide selection of homes for sale, from modern apartments to spacious family houses and luxury villas. Browse verified listings, compare prices, and find the perfect property to call your own."}></Card>
            <Card  photo={"/pexels-vlad-fonsark-2175898-5374438.webp"}  count={3} wrod={"Rent"} paragrag={"Find the perfect rental property that fits your lifestyle and budget. Browse verified apartments, houses, and villas with detailed information to make renting simple and stress-free."}></Card>
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
                                        src="/pexels-vlad-fonsark-2175898-5374438.webp"
                                        alt="buy"
                                        width={1000}
                                        height={600}
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
                                        src="/pexels-dico-baskoro-693731013-18070628.avif"
                                        alt="buy"
                                        width={1000}
                                        height={600}
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
    )
}