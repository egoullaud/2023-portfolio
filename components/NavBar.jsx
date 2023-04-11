import React from "react";
import { useState } from "react";
import {
  RiLinkedinLine,
  RiGithubLine,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { GrClose, GrMenu } from "react-icons/gr";
import Link from "next/link";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav>
      {/* Mobile */}
      <div className="w-[100%] block lg:hidden md:px-[2rem]">
        <div className="flex justify-between items-center mx-[2rem] w-[100%] pb-[1rem]">
          <h1 className=" pt-[1rem] font-lora font-medium tracking-wider text-4xl hover:transition-all hover:duration-500 hover:text-[#4d574F] ease-out duration-300">
            <Link href="/"> lg.</Link>
          </h1>
          <div
            className="z-50 flex justify-end items-end  w-[100%] transition-all duration-500 "
            onClick={handleNav}
          >
            {!showNav ? (
              <GrMenu className="fixed right-8 top-0 text-6xl hover:bg-[#f3efeb] hover:transition-all hover:duration-500 ease-out duration-300 rounded p-2 mt-1  " />
            ) : (
              <GrClose className="fixed right-8 top-0 text-6xl z-50 rounded p-2 hover:bg-[#f3efeb] hover:transition-all hover:duration-500 ease-out duration-500" />
            )}
          </div>
        </div>
        <div
          className={
            !showNav
              ? "hidden"
              : "fixed  z-40 top-0 left-0 bottom-0 w-[100%] transition-all duration-1000"
          }
        >
          <ul className="z-30 flex flex-col  bg-white justify-center items-center pt-[1rem] md:pt-[10rem] md:justify-start font-openSans font-thin text-2xl w-[100%] h-full">
            <Link href="/">
              <li className="uppercase tracking-wider m-[2rem] hover:transition-all hover:duration-500 hover:text-[#4d574F]">
                Home
              </li>
            </Link>
            <Link href="/work">
              <li className="uppercase tracking-wider m-[2rem] hover:transition-all hover:duration-500 hover:text-[#4d574F]">
                Work
              </li>
            </Link>
            <Link href="/about">
              <li className="uppercase tracking-wider m-[2rem] hover:transition-all hover:duration-500 hover:text-[#4d574F] ">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="uppercase tracking-wider m-[2rem] hover:transition-all hover:duration-500 hover:text-[#4d574F]">
                Contact
              </li>
            </Link>
            <li className=" flex justify-between uppercase tracking-wider  ">
              <Link
                href="https://www.linkedin.com/in/lee-goullaud/"
                target="_blank"
              >
                <RiLinkedinFill className="m-4 text-5xl rounded p-2 hover:bg-[#f3efeb] hover:transition-all hover:duration-500 ease-out duration-500" />
              </Link>
              <Link href="https://github.com/egoullaud" target="_blank">
                <RiGithubFill className="m-4 text-5xl rounded p-2 hover:bg-[#f3efeb] hover:transition-all hover:duration-500 ease-out duration-500" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex lg:justify-between lg:items-center lg:mx-[10rem] lg:my-[1rem]">
        <h1 className=" font-lora font-medium tracking-wider text-4xl hover:transition-all hover:duration-500 hover:text-[#4d574F]">
          <Link href="/"> lg.</Link>
        </h1>
        <ul className="flex justify-center text-sm items-center font-openSans font-thin w-[40%] xl:w-[30%]">
          <Link href="/">
            <li className="uppercase tracking-wider mx-2 hover:transition-all hover:duration-500 hover:text-[#4d574F]">
              Home
            </li>
          </Link>
          <Link href="/work">
            <li className="uppercase tracking-wider mx-2 hover:transition-all hover:duration-500 hover:text-[#4d574F]">
              Work
            </li>
          </Link>
          <Link href="/about">
            <li className="uppercase tracking-wider mx-2 hover:transition-all hover:duration-500 hover:text-[#4d574F]">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="uppercase tracking-wider mx-2 hover:transition-all hover:duration-500 hover:text-[#4d574F]">
              Contact
            </li>
          </Link>
          <Link
            href="https://www.linkedin.com/in/lee-goullaud/"
            target="_blank"
          >
            <li className="uppercase tracking-wider  ">
              {" "}
              <RiLinkedinLine className="text-2xl rounded p-1 hover:bg-[#f3efeb] hover:transition-all hover:duration-500 ease-out duration-500" />
            </li>
          </Link>
          <Link href="https://github.com/egoullaud" target="_blank">
            <li className="uppercase tracking-wider">
              {" "}
              <RiGithubLine className="text-2xl rounded p-1 hover:bg-[#f3efeb] hover:transition-all hover:duration-500 ease-out duration-500" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
