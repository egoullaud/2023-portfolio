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
        <form
          action="https://formsubmit.co/aa9ace4fce53046497cccee0c34e5c3f"
          method="POST"
          className="flex flex-col font-hind tracking-wider font-thin text-[#2c2c2c] mb-[2rem] w-[90%] md:w-[80%] lg:w-[75%]"
        >
          {/* add honey pot */}
          <input type="text" name="_honey" className="hidden" />
          {/*remove captcha  */}
          <input type="hidden" name="_captcha" value="false" />
          {/* redirect to success page on submit! */}
          <input
            type="hidden"
            name="_next"
            value="http://www.leegoullaud.com/submitted"
          />

          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:w-[50%] md:mr-2">
              <label className="italic py-1" htmlFor="firstName">
                First name
              </label>
              <input
                className="mb-5 p-2 border-black border-[1px]"
                type="text"
                name="first name"
                required
              />
            </div>
            <div className="flex flex-col md:w-[50%] md:ml-2">
              <label className="italic py-1" htmlFor="lastName">
                Last name
              </label>
              <input
                className="mb-5 p-2 border-black border-[1px]"
                type="text"
                name="last name"
                required
              />
            </div>
          </div>
          <label className="italic py-1" htmlFor="email">
            Email
          </label>
          <input
            className="mb-5 p-2 border-black border-[1px]"
            type="email"
            name="email"
            required
          />
          <label className="italic py-1" htmlFor="subject">
            Subject
          </label>
          <input
            className="mb-5 p-2 border-black border-[1px]"
            type="text"
            name="subject"
            required
          />
          <label className="italic py-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="mb-5 p-2 border-black border-[1px]"
            type="text"
            name="message"
            rows={8}
            cols={30}
            required
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="uppercase tracking-wider shadow-sm py-2 px-5 text-center w-[40%] md:w-[20%] lg:w-[15%] bg-[#F4e9e7]  mt-8 hover:bg-[#f6f0ef] hover:transition-all hover:duration-500 ease-out duration-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <Image
        src={forHire}
        alt="Three people sit gathered around a wood table with laptops and journals laughing together"
        className="w-[90%] md:w-[75%] lg:w-[50%] lg:px-[4rem] lg:my-[4rem]"
      ></Image>
    </div>
  );
}
