import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ProjectCoverList } from "./ProjectCoverList";

export default function Work({ projects }) {
  return (
    <div className=" flex flex-col items-center md:mx-[4rem] my-[4rem]">
      <h3 className="font-alike text-center leading-[1.2] lowercase tracking-widest mb-[2rem] text-xl md:text-[2rem]">
        my recent work
      </h3>
      <div className="flex items-center justify-center mb-[2rem]">
        <Link href="/work">
          <button className="text-xs font-hind uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500 md:text-[1.2rem]">
            View all Work
          </button>
        </Link>
      </div>
      <ProjectCoverList projects={projects} />
    </div>
  );
}
