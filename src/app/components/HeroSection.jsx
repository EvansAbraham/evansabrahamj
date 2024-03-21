"use client";
import React from "react";
import Image from "next/image";
import HireMe from "./HireMe";
import DownloadCV from "./DownloadCV";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="bg-gradient-to-br from-[#FFD700] via-[#8A2BE2] to-[#4169E1] bg-clip-text text-transparent">
              Hello, I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Evans",
                1000,
                "A Developer",
                1000,
                "A Tech Enthuciast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
            Enthusiastic Developer excels in Python, JavaScript, crafting
            efficient and impactful solutions.
          </p>
          <div>
            <HireMe />
            <DownloadCV />
          </div>
        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative h-[250px] w-[250px] rounded-full bg-[#181818] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/assets/HeroImg.png"
              alt="Hero-Image"
              width={300}
              height={300}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
