import Link from "next/link";
import React from "react";

function submitted() {
  return (
    <div className="my-[4rem] flex flex-col items-center justify-center">
      <h1 className="text-center  leading-[1.25] font-alike lowercase tracking-wider text-5xl md:text-6xl pb-[2rem] ">
        Let's Connect
      </h1>
      <p className="font-hind font-thin mb-[2rem]  w-[80%] md:w-[80%] lg:w-[50%] xl:w-[40%]">
        Please don't hesitate to contact me if you'd like to work together,
        expand your network, or chat about the joys of dogs! I'm also available
        by email at{" "}
        <Link href="mailto:egoullaud@gmail.com">
          <button className="underline hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
            egoullaud@gmail.com
          </button>
        </Link>
      </p>
      <div className="flex flex-col justify-center items-center pt-[2rem] pb-[4rem] lg:py-[4rem] mx-[2rem] md:mx-[6rem]">
        <h3 className="font-alike text-center leading-[1.2] lowercase tracking-widest mb-[1rem] text-[1.5rem] md:text-[2rem]">
          Thank you! <br /> I look forward to chatting soon
        </h3>
        <h4 className="font-hind text-center font-thin lowercase tracking-widest mb-[1rem] text-[1rem] md:text-[1.5rem]">
          in the meantime, Check out <br />
          <Link href="/work">
            <button className="underline md:text-[1.2rem] hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
              my work here
            </button>
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default submitted;
