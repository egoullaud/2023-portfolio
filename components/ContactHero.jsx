import React from "react";
import Link from "next/link";

function ContactHero() {
  return (
    <div className="bg-[#f3efeb] py-[7rem] flex flex-col items-center">
      <h3 className="font-lora text-center leading-[1.2] lowercase tracking-widest mb-[1rem] text-[1.5rem] md:text-[2rem]">
        lets work together!
      </h3>
      <Link href="/contact">
        <button className="text-[1rem] font-openSans uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#4d574F] md:text-[1.2rem]">
          get in touch
        </button>
      </Link>
    </div>
  );
}

export default ContactHero;
