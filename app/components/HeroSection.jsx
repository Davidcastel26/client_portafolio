'use client'
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export const HeroSection = () => {
  return (
    <section>
      <div className="grid gird-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 
            className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78D6C6] to-[#12486B]">
                    Hello, I am{" "}
                </span>
                <br></br>
                <TypeAnimation 
                    sequence={[
                        "David",
                        1000,
                        "Web Developer",
                        1000,
                        "Full Stack",
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
                I am a dev with a passion for solving problems and building efficient solutions through code. Since I started learning programming, I just realized how terrific is work with logic and the ability from anyone to create something from scratch.
            </p>
            <div className="">
                <button className="btn px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#12486B] via-[#419197] to-[#78D6C6] hover:bg-[#0F2C59] text-white">
                    Hire Me 
                </button>
                <button className="btn px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#419197] via-[#78D6C6] to-[#F5FCCD] hover:bg-slate-500 mt-3"> 
                   {/* <span className="block bg-[#040404] hover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV 
                   </span> */}
                </button>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[400px] h-[400px] relative">
                <Image 
                    src='/images/hero3.png'
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={400}
                    height={400}
                />
            </div>
        </div>
      </div>
    </section>
  )
}
