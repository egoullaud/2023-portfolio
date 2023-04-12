import React from "react";
import Link from "next/link";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#313d4a] text-white pt-[4rem] lg:pt-[2rem] pb-[1rem]">
      <div className="mx-[4rem] flex flex-col lg:flex-row lg:justify-between">
        <h1 className="lg:my-[1rem]  font-alike uppercase tracking-wider text-4xl hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
          <Link href="/"> lg.</Link>
        </h1>
        <ul className="z-30 flex flex-col lg:flex-row lg:justify-evenly lg:w-[40%] lg:pt-0 lg:my-[1rem]  justify-center items-start pt-[1rem] font-hind font-thin  w-[100%] h-full">
          <Link href="/">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
              Home
            </li>
          </Link>
          <Link href="/work">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
              Work
            </li>
          </Link>
          <Link href="/about">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500 ">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
              Contact
            </li>
          </Link>
        </ul>
        <div className=" ">
          <p className=" flex justify-start uppercase tracking-wider mt-[1rem] lg:my-[1rem] ">
            <Link
              href="https://www.linkedin.com/in/lee-goullaud/"
              target="_blank"
            >
              <RiLinkedinLine className="mr-2 text-2xl hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500 " />
            </Link>
            <Link href="https://github.com/egoullaud" target="_blank">
              <RiGithubLine className=" ml-2 text-2xl hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500 " />
            </Link>
          </p>
        </div>
      </div>
      <p className="mt-[1rem] mx-[4rem] lg:my-[1rem] text-center uppercase font-hind font-thin text-sm ">
        © 2023 lee goullaud
      </p>
    </div>
  );
}

export default Footer;
