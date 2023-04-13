import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProjectCoverList({ projects }) {
  return (
    <ul className="md:columns-2 gap-4 lg:w-[70%] xl:w-[60%]">
      {projects.map((project) => (
        <Link key={project.id} href={"/projects/" + project.slug}>
          <li className="mx-8 my-8 md:mx-0 md:mb-4 md:mt-0 shadow-md hover:scale-95 hover:transition-all hover:duration-500 ease-out duration-500">
            <div className="relative">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#7f8c96] opacity-0 hover:opacity-100 ease-out duration-500 hover:transition-all hover:duration-500 hover:text-white">
                <div className="mx-0 w-[90%] tracking-wider">
                  <h6 className="font-alike text-center text-2xl mb-4">
                    {project.title}
                  </h6>
                  <p className="font-hind mx-2 text-center">
                    {project.preview}
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src={project.coverImage.url}
                  alt=""
                  width="4000"
                  height="2800"
                ></Image>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
