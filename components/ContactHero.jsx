import React from "react";
import Link from "next/link";

function ContactHero() {
  return (
    <div className="bg-[#d9d4d0] py-[7rem] flex flex-col items-center">
      <h3 className="font-alike text-center leading-[1.2] lowercase tracking-widest mb-[2rem] text-xl md:text-[2rem]">
        let's work together!
      </h3>
      <Link href="/contact">
        <button className="text-[1rem] font-hind uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#69808f] ease-out duration-500 md:text-[1.2rem]">
          get in touch
        </button>
      </Link>
    </div>
  );
}

export default ContactHero;
