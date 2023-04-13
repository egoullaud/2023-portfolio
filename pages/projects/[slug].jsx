import React from "react";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import ContactHero from "@/components/ContactHero";

export default function projectPage({ project }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-[2rem]">
        <Link href={project.websiteUrl}>
          {" "}
          <h1 className=" mt-[2rem] font-alike text-center leading-[1.2] capitalize tracking-widest pb-[1rem] md:pb-[2rem] text-[1.6rem] md:text-[2rem] lg:text-2xl xl:text-4xl hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
            {project.title}
          </h1>
        </Link>
        <p className="font-hind text-center italic font-thin md:text-xl">
          {project.techstack}
        </p>
        <Image
          className=" md:hidden object-fit "
          src={project.deskImage.url}
          width={project.deskImage.width}
          height={project.deskImage.height}
          alt=""
        ></Image>
        {/* images medium screen*/}
        <div className=" hidden md:flex flex-col items-center justify-center md:flex-row px-[3rem] md:px-[4rem] lg:px-[8rem] xl:px-[14rem]">
          <Image
            className="mb-6 md:w-[27%] object-fit md:mr-4"
            src={project.tabletImage.url}
            width={project.tabletImage.width}
            height={project.tabletImage.height}
            alt=""
          ></Image>

          <Image
            className="mb-6 md:w-[40%] object-fit md:mr-4"
            src={project.deskImage.url}
            width={project.deskImage.width}
            height={project.deskImage.height}
            alt=""
          ></Image>
          <Image
            className="mb-6 md:w-[27%] object-fit "
            src={project.mobileImage.url}
            width={project.mobileImage.width}
            height={project.mobileImage.height}
            alt=""
          ></Image>
        </div>

        {/* project copy */}
        <div className="project-copy flex flex-col justify-center items-center font-hind tracking-[.03em] font-thin  mx-[0.5rem] md:mx-[6rem] xl:w-[55%] lg:w-[60%] mt-4 md:mt-[0] mb-[2rem] ">
          <div className="flex justify-around items-center w-[50%] mb-4">
            <Link href={project.websiteUrl}>
              <button className="font-hind uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
                Website
              </button>
            </Link>
            <Link href={project.githubUrl}>
              <button className="font-hind uppercase tracking-wider font-thin hover:transition-all hover:duration-500 hover:text-[#9aa9b5] ease-out duration-500">
                GitHub
              </button>
            </Link>
          </div>
          <p dangerouslySetInnerHTML={{ __html: project.description.html }}></p>
        </div>

        <div className=" flex md:hidden flex-col items-center justify-center md:flex-row px-[3rem] pb-[2rem] md:px-[4rem] lg:px-[8rem] xl:px-[14rem]">
          <Image
            className="mb-6 md:w-[27%] object-fit md:mr-4"
            src={project.tabletImage.url}
            width={project.tabletImage.width}
            height={project.tabletImage.height}
            alt=""
          ></Image>

          <Image
            className="mb-6 md:w-[27%] object-fit "
            src={project.mobileImage.url}
            width={project.mobileImage.width}
            height={project.mobileImage.height}
            alt=""
          ></Image>
        </div>
      </div>

      <ContactHero />
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query PROJECT_SLUGLIST {
        projects {
          slug
        }
      }
    `,
  });
  return {
    paths: data.projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { data } = await client.query({
    query: gql`
      query PROJECT_BY_SLUG($slug: String!) {
        project(where: { slug: $slug }) {
          title
          slug
          id
          techstack
          websiteUrl
          githubUrl
          preview
          coverImage {
            url
            height
            width
          }
          deskImage {
            url
            height
            width
          }

          mobileImage {
            url
            height
            width
          }
          tabletImage {
            url
            height
            width
          }
          description {
            html
          }
          testimonials {
            author
            id
            description {
              html
            }
          }
        }
      }
    `,
    variables: { slug },
  });
  return {
    props: {
      project: data.project,
    },
  };
}
