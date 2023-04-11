import React from "react";
import Link from "next/link";
import {
  RiLinkedinLine,
  RiGithubLine,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#313d4a] pt-[4rem] pb-[1rem]">
      <div className="mx-[4rem]">
        <h1 className=" text-[#F4e9e7] font-lora font-medium tracking-wider text-4xl hover:transition-all hover:duration-500 hover:text-[#baccdb] ease-out duration-200">
          <Link href="/"> lg.</Link>
        </h1>
        <ul className="z-30 flex flex-col text-[#F4e9e7] justify-center items-start pt-[1rem] font-openSans font-thin  w-[100%] h-full">
          <Link href="/">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500  hover:text-[#baccdb] ease-out duration-200">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500  hover:text-[#baccdb] ease-out duration-200">
              Work
            </li>
          </Link>
          <Link href="/about">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500  hover:text-[#baccdb] ease-out duration-200 ">
              About
            </li>
          </Link>
          <Link href="/">
            <li className="uppercase tracking-wider my-[.5rem]  hover:transition-all hover:duration-500  hover:text-[#baccdb] ease-out duration-200">
              Contact
            </li>
          </Link>
          <li className=" flex justify-between uppercase tracking-wider mt-[1rem] ">
            <Link
              href="https://www.linkedin.com/in/lee-goullaud/"
              target="_blank"
            >
              <RiLinkedinFill className="mr-2 text-2xl hover:text-[#baccdb] ease-out duration-200 hover:transition-all hover:duration-500 " />
            </Link>
            <Link href="https://github.com/egoullaud" target="_blank">
              <RiGithubFill className=" ml-2 text-2xl hover:text-[#baccdb] ease-out duration-200hover:transition-all hover:duration-500 " />
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-[1rem] text-center uppercase font-openSans font-thin text-sm text-[#F4e9e7]">
        © 2023 lee goullaud
      </p>
    </div>
  );
}

export default Footer;
