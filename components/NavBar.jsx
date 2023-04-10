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
      <div className="w-[100%]  lg:hidden">
        <div
          className="flex justify-end items-end w-[100%] transition-all duration-500 "
          onClick={handleNav}
        >
          {!showNav ? (
            <div className="flex justify-between items-center mx-[4rem] w-[100%] ">
              <h1 className=" font-lora font-medium tracking-wider text-4xl hover:transition-all hover:duration-500 hover:text-[#4d574F]">
                <Link href="/"> lg.</Link>
              </h1>
              <GrMenu className="text-6xl hover:bg-[#d9d4d0] hover:transition-all hover:duration-500 rounded p-2  " />
            </div>
          ) : (
            <GrClose className="text-6xl z-20 rounded p-2 hover:bg-[#d9d4d0] hover:transition-all hover:duration-500 mx-[4rem]" />
          )}
        </div>

        <div
          className={
            !showNav
              ? "flex opacity-0 h-[100%] z-0 transition-all duration-1000"
              : "z-10 flex justify-center items-center h-full opacity-100 w-[100%] transition-all duration-1000"
          }
        >
          <ul className="flex flex-col justify-center items-center mt-[5rem] font-openSans font-thin text-2xl w-[100%] h-full">
            <Link href="/">
              <li className="uppercase tracking-wider m-[2rem] ">Home</li>
            </Link>
            <Link href="/">
              <li className="uppercase tracking-wider m-[2rem] ">Work</li>
            </Link>
            <Link href="/">
              <li className="uppercase tracking-wider m-[2rem] ">About</li>
            </Link>
            <Link href="/">
              <li className="uppercase tracking-wider m-[2rem] ">Contact</li>
            </Link>
            <li className=" flex justify-between uppercase tracking-wider  ">
              <Link
                href="https://www.linkedin.com/in/lee-goullaud/"
                target="_blank"
              >
                <RiLinkedinFill className="m-4 text-5xl rounded p-2 hover:bg-[#d9d4d0] hover:transition-all hover:duration-500" />
              </Link>
              <Link href="https://github.com/egoullaud" target="_blank">
                <RiGithubFill className="m-4 text-5xl rounded p-2 hover:bg-[#d9d4d0] hover:transition-all hover:duration-500" />
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
            <li className="uppercase tracking-wider mx-2 ">Home</li>
          </Link>
          <Link href="/">
            <li className="uppercase tracking-wider mx-2 ">Work</li>
          </Link>
          <Link href="/">
            <li className="uppercase tracking-wider mx-2 ">About</li>
          </Link>
          <Link href="/">
            <li className="uppercase tracking-wider mx-2 ">Contact</li>
          </Link>
          <Link
            href="https://www.linkedin.com/in/lee-goullaud/"
            target="_blank"
          >
            <li className="uppercase tracking-wider  ">
              {" "}
              <RiLinkedinLine className="text-2xl rounded p-1 hover:bg-[#d9d4d0] hover:transition-all hover:duration-500" />
            </li>
          </Link>
          <Link href="https://github.com/egoullaud" target="_blank">
            <li className="uppercase tracking-wider">
              {" "}
              <RiGithubLine className="text-2xl rounded p-1 hover:bg-[#d9d4d0] hover:transition-all hover:duration-500" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
