import React from "react";
import Image from "next/image";
import Link from "next/link";

import portrait1 from "../public/portrait1.jpg";
import landscape1 from "../public/landscape1.jpg";
import me2 from "../public/IMG-2424.jpg";
import doggos from "../public/doggos.jpg";
import portrait2 from "../public/portrait2.jpg";
import blueLand from "../public/blue-land.jpg";
import Skills from "@/components/Skills";

function about() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] md:w-[45%] lg:w-[50%] xl:w-[50%]">
          <Image src={me2} className="object-cover"></Image>
        </div>

        <div className="flex flex-col mx-[2rem] md:mx-[3rem] mt-[6rem]">
          <h1 className="text-left leading-[1.25] font-lora lowercase tracking-wider text-5xl pb-[2rem]">
            Hey, I'm lee
          </h1>
          <p className="font-openSans font-thin md:ml-[1rem] mb-2">
            I am a fullstack developer who's passionate about building digital
            products that create accessibile, inclusive, and beautiful user
            experiences. I am a graduate of Skillcrush UX Design and Front End
            Coding Bootcamp and hold a BSc in Natural Resource Conservation from
            the University of British Columbia.
          </p>
          <p className="font-openSans font-thin md:ml-[1rem] mb-2">
            I have a deep love for learning and growth in all things, and I am
            at my best when I am creating value through custom-built websites
            for my clients. If you're interested in working together,{" "}
            <Link href="/contact">
              <button className="underline">get in touch here!</button>
            </Link>
          </p>
        </div>
      </div>
      <Skills />
      <div className="flex flex-col items-center justify-center md:flex-row px-[2rem] pb-[2rem]">
        <Image
          className="mb-6 md:w-[27%] object-fit md:mr-4"
          src={portrait2}
        ></Image>

        <Image
          className="mb-6 md:w-[40%] object-fit md:mr-4"
          src={landscape1}
        ></Image>
        <Image className="mb-6 md:w-[27%] object-fit " src={doggos}></Image>
      </div>
    </div>
  );
}

export default about;
