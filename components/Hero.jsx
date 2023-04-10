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

function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:mt-2">
      <div className="w-[100%] md:w-[45%]">
        <Image src={me5} className="object-cover"></Image>
      </div>
      <div className="flex flex-col w-[80%] md:w-[67%] mx-auto my-[3rem]">
        <h1 className="md:relative md:left-[-19%] text-left leading-[1.25] font-lora capitalize tracking-wider text-6xl">
          Lee Goullaud
        </h1>
        <h2 className="md:ml-[4rem] my-4 text-[1.4rem] font-openSans uppercase font-thin">
          full stack developer
        </h2>
      </div>
    </div>
  );
}

export default Hero;
