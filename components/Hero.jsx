import React from "react";

import hero2 from "../public/hero2-sm.png";
import me5 from "../public/IMG-2657.jpg";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex md:mt-2">
        <div className="w-[100%] md:w-[75%] lg:w-[45%] xl:w-[45%] lg:ml-[8rem] xl:ml-[14rem]">
          <Image
            src={hero2}
            alt="Headshot of Lee Goullaud (she/they) standing in front of a white background smiling in a denim collar shirt and beanie"
            className="object-cover"
          ></Image>
        </div>
        <div className="relative justify-center left-[-10%] md:left-[-8%] lg:left-[-5%] xl:left-[-0%] w-[90%] md:w-[64%] lg:w-[55%] xl:w-[55%] mt-8  md:mt-[6.5rem] lg:mt-[8rem] xl:mt-[14rem]">
          <h1 className=" w-[100%] text-left font-alike  tracking-wide text-[1.7rem] md:text-6xl xl:text-7xl">
            Lee Goullaud
          </h1>
          <h2 className=" w-[100%] my-4 text-sm ml-4 md:text-2xl md:ml-8 xl:text-3xl xl:ml-[4rem] font-hind uppercase font-thin">
            full stack developer
          </h2>
        </div>
      </div>
      {/* CTA */}
      <div className="flex flex-col justify-center items-center py-[4rem]  mx-[2rem] md:mx-[6rem] md:py-[8rem] lg:py-[10rem] xl:py-[14rem]">
        <h3 className="font-alike text-center leading-[1.2] lowercase tracking-widest mb-[2rem] text-xl md:text-[2rem]">
          Your dream website custom-built for you
        </h3>
        <Link href="/about">
          <button className="text-xs font-hind uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500 md:text-[1.2rem]">
            learn more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
