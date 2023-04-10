import React from "react";
import blueComp from "../public/blue-comp.jpg";
import greenComp from "../public/green-comp.jpg";
import blueLand from "../public/blue-land.jpg";
import greenLand from "../public/green-land.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="my-[2rem]">
      <Image src={greenLand} className="w-[55%]  object-contain"></Image>
    </div>
  );
}

export default Hero;
