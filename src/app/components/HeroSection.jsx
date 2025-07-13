"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 pb-10">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "}</span> 
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Ankit Khandelwal',
                            1000,
                            'Web Developer',
                            1000,
                            'Tech Explorer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                    I am a self-driven tech enthusiast passionate about web development, problem solving, and building real-world solutions.
                    Adaptable and a great team player, always eager to learn and contribute.
                </p>
                <div>
                    <Link href="/#contact" className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 hover:cursor-pointer text-white">
                        Hire Me
                    </Link>
                    <a href="/Ankit_Khandelwal_CV.pdf" download>
                        <button className="px-1 py-1 rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 hover:cursor-pointer text-white border mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center w-full sm:w-auto">
                                Download CV
                            </span>
                        </button>
                    </a>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} 
            className="col-span-5 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#202020] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[420px] lg:h-[420px] relative">
                    <Image
                        src="/images/Hero1.PNG"
                        alt="Hero image"
                        fill
                        className="object-contain rounded-full"
                        priority
                    />
                </div>
            </motion.div>

        </div>
    </section>
  )
}

export default HeroSection