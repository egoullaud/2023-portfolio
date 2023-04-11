import React from "react";
import blueComp from "../public/blue-comp.jpg";
import blueLand from "../public/blue-land.jpg";
import greenLand from "../public/green-land.jpg";
import darkFern from "../public/dark-fern.jpg";
import lightFern from "../public/light-fern.jpg";
import workspace from "../public/workspace.jpg";
import me1 from "../public/IMG-2418.jpg";
import me2 from "../public/IMG-2424.jpg";
import me3 from "../public/IMG-2435.jpg";
import me4 from "../public/IMG-2577.jpg";
import me5 from "../public/IMG-2657.jpg";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:mt-2">
        <div className="w-[100%] md:w-[58%] lg:w-[68%] xl:w-[72%]">
          <Image src={me5} className="object-cover"></Image>
        </div>
        <div className="flex flex-col justify-center w-[80%] md:w-[67%] lg:w-[77%] mx-auto my-[3rem]">
          <h1 className="md:relative md:left-[-19%] text-left leading-[1.25] font-lora capitalize tracking-wider text-6xl">
            Lee Goullaud
          </h1>
          <h2 className="md:ml-4rem] mx-5 my-4 text-[1.4rem] font-openSans uppercase font-thin">
            full stack developer
          </h2>
        </div>
      </div>
      {/* CTA */}
      <div className="flex flex-col justify-center items-center py-[8rem] lg:py-[7rem] mx-[2rem] md:mx-[6rem]">
        <h3 className="font-lora text-center leading-[1.2] lowercase tracking-widest mb-[1rem] text-[1.5rem] md:text-[2rem]">
          Your dream website custom-built for you
        </h3>
        <Link href="/about">
          <button className="text-[1rem] font-openSans uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#4d574F] ease-out duration-300 md:text-[1.2rem]">
            learn more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
