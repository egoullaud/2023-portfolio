import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutMe from "../public/about-me.png";
import landscape1 from "../public/landscape1.jpg";
import doggos from "../public/doggos.jpg";
import portrait2 from "../public/portrait2.jpg";
import Skills from "@/components/Skills";

export default function about() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex ">
        <div className="w-[100%] md:w-[75%] lg:w-[45%] xl:w-[45%] lg:ml-[8rem] xl:ml-[10rem]">
          <Image
            src={aboutMe}
            alt="Headshot of Lee Goullaud (she/they) standing in front of a white background smiling in a denim collar shirt and beanie"
            className="object-cover"
          ></Image>
        </div>
        <div className=" relative justify-center left-[-10%] md:left-[-8%] lg:left-[-5%] xl:left-[-0%] w-[63%] md:w-[50%] lg:w-[55%] xl:w-[55%] mt-[4rem]  md:mt-[9rem] lg:mt-[8rem] xl:mt-[10rem]">
          <h1 className="w-[100%] text-left font-alike  tracking-wide text-[1.7rem] md:text-6xl xl:text-7xl">
            Hi, I'm Lee!
          </h1>
        </div>
      </div>
      <div className="flex flex-col font-hind tracking-[.03em] font-thin text-center mx-[2rem] md:mx-[4rem] lg:mx-[8rem] xl:w-[55%] lg:w-[65%] mt-[2rem] md:mt-[3rem] lg:mt-[4rem]  ">
        <p className="mb-4">
          I'm a full stack developer with 1.5 years of experience working with
          React, Tailwind, Node and Python. I am a UX Design and Front End
          Bootcamp graduate and created a free bootcamp for Front End Developers
          transitioning to Full Stack.In addition to my freelance work, I am a
          lead full stack developer with Chingu, building an application using
          Agile methologies within an asynchronous team environment.
        </p>
        <p className="mb-4">
          Prior to working in tech, I ran a sustainability and landscaping
          company where I created client-relationships, managed projects, and
          educated clients about sustainability in their backyards. I trained
          teams, mentored junior landscapers, wore all the hats, and spun all
          the plates.
        </p>
        <p className="mb-4">
          I have a deep love for learning and growth in all things, and I am at
          my best when I am creating value through custom-built websites for my
          clients and playing fetch with my dogs. If you're looking for a
          versatile developer willing to jump right in and learn on the go, look
          no further!
          <br />
          <Link href="/contact">
            <button className="underline hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
              Get in touch here!
            </button>
          </Link>
        </p>
      </div>
      <Skills />
      <div className="flex flex-col items-center justify-center md:flex-row px-[3rem] pb-[2rem] md:px-[4rem] lg:px-[8rem] xl:px-[14rem]">
        <Image
          className="mb-6 md:w-[27%] object-fit md:mr-4"
          src={portrait2}
          alt="Portrait shot of Lee smiling outside with a green collared short sleeve shirt and pink backpack, with green grass in the background."
        ></Image>

        <Image
          className="mb-6 md:w-[40%] object-fit md:mr-4"
          src={landscape1}
          alt="landscape photos of a lake surrounded by evergreen trees from the Sunshine Coast, BC."
        ></Image>
        <Image
          className="mb-6 md:w-[27%] object-fit"
          alt="Shot of a two Australian Cattle dogs, one black and one white sitting together on a wooden step with a painted floral background"
          src={doggos}
        ></Image>
      </div>
    </div>
  );
}
