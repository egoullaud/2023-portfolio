import React from "react";
import Image from "next/image";
import Link from "next/link";
import me1 from "../public/IMG-2418.jpg";
import me2 from "../public/IMG-2424.jpg";
import me3 from "../public/IMG-2435.jpg";
import me4 from "../public/IMG-2577.jpg";
import Skills from "@/components/Skills";

function about() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] md:w-[45%] lg:w-[50%] xl:w-[50%]">
          <Image src={me4} className="object-cover"></Image>
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
    </div>
  );
}

export default about;
