import React from "react";
import { useState } from "react";
import {} from "react-icons/fi";
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
      <div className="w-[100%]">
        <div
          className="flex justify-end items-end w-[100%] transition-all duration-500 "
          onClick={handleNav}
        >
          {!showNav ? (
            <div className="flex justify-between items-center mx-[4rem] w-[100%] ">
              <h1 className=" font-lora font-medium tracking-wider text-4xl hover:transition-all hover:duration-500 hover:text-[#4d574F]">
                <Link href="/"> lg.</Link>
              </h1>
              <GrMenu className="text-6xl hover:bg-slate-100 hover:transition-all hover:duration-500 rounded p-2  " />
            </div>
          ) : (
            <GrClose className="text-6xl z-20 rounded p-2 hover:bg-slate-100 hover:transition-all hover:duration-500 mx-[4rem]" />
          )}
        </div>

        <div
          className={
            !showNav
              ? "flex opacity-0 h-[100%] z-0 transition-all duration-1000"
              : "z-10 flex justify-center items-center h-[100%] opacity-100 w-[100%] transition-all duration-1000"
          }
        >
          <ul className="flex flex-col justify-center items-center mt-[5rem] font-openSans font-thin text-2xl w-[100%]">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
