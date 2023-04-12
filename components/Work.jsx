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
      <ul className="md:columns-2 lg:columns-3 lg:h-[100vh] gap-8">
        <li className="mb-4 lg:w-[90%] md:break-after-avoid lg:break-after-auto shadow-md hover:scale-95 hover:transition-all hover:duration-500  ease-out duration-500">
          <Link href="#">
            <Image src={strolls}></Image>
          </Link>
        </li>
        <li className="mb-4 lg:w-[90%] lg:break-after-avoid shadow-md hover:scale-95 hover:transition-all hover:duration-500  ease-out duration-500">
          <Link href="#">
            <Image src={sixpo}></Image>
          </Link>
        </li>
        <li className="mb-4 lg:w-[90%] shadow-md hover:scale-95 hover:transition-all hover:duration-500 ease-out duration-500 ">
          <Link href="#">
            <Image src={gfms}></Image>
          </Link>
        </li>
        <li className="mb-4 lg:w-[90%] shadow-md hover:scale-95 hover:transition-all hover:duration-500  ease-out duration-500">
          <Link href="#">
            <Image src={raine}></Image>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Work;
