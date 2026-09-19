import { Star } from "lucide-react";
import Image from "next/image";
export default function Reviews(){
    return(
        <section>
            <div className="min-h-screen min-w-full px-10 bg-gray-100 rounded-t-lg py-6">
                <h2 className="text-4xl mb-20 md:mb-6"><span>Dont`t Take </span><span className="opacity-35">Our World For It.</span></h2>
                <div  className="min-w-full flex  flex-wrap min-h-130 md:gap-0 gap-13   justify-between items-center">
                <div className="">
                    <div className="md:w-180 md:h-150">
                    <Image
                        src="/images/pexels-august-de-richelieu-8367212 .jpg"
                        alt="photocard"
                        width={500}
                        height={300}
                        loading="lazy"
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
                        &ldquo;Lorem ipsum dolor sit amet,<span className="text-blue-900"> consectetur adipiscing elit. Vivamus</span>
                        lacinia odio vitae <span className="text-red-900">vestibulum. Donec in efficitur ipsum</span>, sed dapibus
                        eros.  &ldquo;
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
    )
}