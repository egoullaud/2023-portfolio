import Link from "next/link";
import React from "react";
import Image from "next/image";
import forHire from "../public/for-hire.jpg";

export default function contact() {
  return (
    <div className="my-[2rem] flex flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[100%] lg:w-[50%]">
        <h1 className="text-center leading-[1.25] font-alike lowercase tracking-wider text-5xl md:text-6xl pb-[2rem] ">
          Let's Connect
        </h1>
        <p className="font-hind text-center tracking-wide font-thin mb-[2rem] mx-[1rem] md:mx-[5rem] lg:mx-[5rem]">
          Please don't hesitate to contact me if you'd like to work together,
          expand your network, or chat about the joys of dogs! I'm also
          available by email at{" "}
          <Link href="mailto:egoullaud@gmail.com">
            <button className="underline hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
              egoullaud@gmail.com
            </button>
          </Link>
        </p>
      </div>


      <Image
        src={forHire}
        alt="Three people sit gathered around a wood table with laptops and journals laughing together"
        className="w-[90%] md:w-[75%] lg:w-[50%] lg:px-[4rem] lg:my-[4rem]"
      ></Image>
    </div>
  );
}
