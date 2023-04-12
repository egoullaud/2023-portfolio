import Link from "next/link";
import React from "react";
import Image from "next/image";
import raine from "../public/raine-cover.jpg";
import sixpo from "../public/sixpo-cover.jpg";
import gfms from "../public/gfms-cover.jpg";
import strolls from "../public/strolls-cover.jpg";

function Work() {
  return (
    <div className="md:mx-[4rem] ">
      <h3 className="font-lora text-center leading-[1.2] lowercase tracking-widest mb-[2rem] text-[1.5rem] md:text-[2rem]">
        my recent work
      </h3>
      <div className="flex items-center justify-center mb-[2rem]">
        <Link href="/work">
          <button className="text-[1rem] font-openSans uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#4d574F] ease-out duration-300 md:text-[1.2rem]">
            View all Work
          </button>
        </Link>
      </div>
      <ul className="md:columns-2 lg:columns-3 lg:h-auto px-4 lg: pb-4 lg:px-8">
        <li className="mb-4 mx-8 lg:mx-0 lg:w-[95%]  md:break-after-avoid lg:break-after-auto shadow-md hover:scale-95 hover:transition-all hover:duration-500  ease-out duration-500">
          <Link href="#">
            <Image src={strolls}></Image>
          </Link>
        </li>
        <li className="mb-8 mx-8 lg:mx-0 lg:w-[95%]  lg:break-after-avoid shadow-md hover:scale-95 hover:transition-all hover:duration-500  ease-out duration-500">
          <Link href="#">
            <Image src={sixpo}></Image>
          </Link>
        </li>
        <li className="mb-4 mx-8 lg:mx-0 lg:w-[95%]  shadow-md hover:scale-95 hover:transition-all hover:duration-500 ease-out duration-500 ">
          <Link href="#">
            <Image src={gfms}></Image>
          </Link>
        </li>
        <li className="mb-4 mx-8 lg:mx-0 lg:w-[95%] shadow-md hover:scale-95 hover:transition-all hover:duration-500  ease-out duration-500">
          <Link href="#">
            <Image src={raine}></Image>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Work;
