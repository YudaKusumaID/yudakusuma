"use client";
import React from "react";
import Image from "next/image"

import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const HeroSection = () => {
    return (
        <section id="home" className="pt-24 -mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left mr-3">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className=" text-white mb-4 text-4xl to-sec lg:text-6xl font-extrabold">
                            Hello, I&apos;m{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Yuda Kusuma',
                                1000,
                                'Backend Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="inline-block leading-tight"
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Hey there! I’m a student who loves diving into backend programming, low-level coding, and cybersecurity.
                    </p>
                    <div>
                        <Link
                            href="https://docs.google.com/document/d/1hP64PtjwObSHvIFneG7VcPhf75pgHhdi9vjLF3Tfl6k/edit?usp=sharing"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full hover:bg-transparent hover:text-white text-black bg-white">
                            <span className="block bg-white hover:bg-transparent hover:border rounded-full px-5 py-2">Download CV</span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-5 flex justify-center items-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] aspect-square flex justify-center items-center">
                        <Image
                            src="/images/hero.jpg"
                            alt="hero image"
                            width={500}
                            height={500}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;