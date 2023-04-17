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
        <div className="flex justify-center items-center text-sm md:text-base font-hind font-thin w-[100%] md:w-[80%] ">
          <Link href={project.websiteUrl}>
            <button className="mr-4 lg:mr-8 uppercase tracking-wider shadow-sm py-2 px-3 text-center w-[100%] bg-[#d9d4d0]  mt-8 hover:bg-[#f6f0ef] hover:transition-all hover:duration-500 ease-out duration-500">
              Website
            </button>
          </Link>
          <Link href={project.githubUrl}>
            <button className=" ml-4 lg:ml-8 uppercase tracking-wider shadow-sm py-2 px-3 text-center w-[100%] bg-[#d9d4d0]  mt-8 hover:bg-[#f6f0ef] hover:transition-all hover:duration-500 ease-out duration-500">
              GitHub
            </button>
          </Link>
        </div>
        <Image
          className=" md:w-[90%] lg:w-[50%] object-fit "
          src={project.compilation.url}
          width={project.compilation.width}
          height={project.compilation.height}
          alt="Views of desktop, tablet, and iphone websites"
        ></Image>
        {/* images medium screen*/}

        {/* project copy */}
        <div className="project-copy flex flex-col justify-center items-center font-hind tracking-[.03em] font-thin  mx-[0.5rem] md:mx-[6rem] xl:w-[55%] lg:w-[60%] mt-4 md:mt-[0] mb-[2rem] ">
          <p dangerouslySetInnerHTML={{ __html: project.description.html }}></p>
        </div>

        <div className=" flex flex-col items-center justify-center md:flex-row px-[3rem] md:px-[4rem] lg:px-[8rem] xl:px-[14rem]">
          <Image
            className="mb-6 md:w-[20%] object-fit md:mr-4"
            src={project.tabletImage.url}
            width={project.tabletImage.width}
            height={project.tabletImage.height}
            alt="View of website on a tablet device"
          ></Image>

          <Image
            className="mb-6 md:w-[55%] lg:w-[50%] object-fit md:mr-4"
            src={project.deskImage.url}
            width={project.deskImage.width}
            height={project.deskImage.height}
            alt="view of website on a desktop screen"
          ></Image>
          <Image
            className="mb-6 md:w-[20%] object-fit "
            src={project.mobileImage.url}
            width={project.mobileImage.width}
            height={project.mobileImage.height}
            alt="view of website on a mobile device"
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
      {
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
          compilation {
            url
            height
            width
          }
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
  const project = data.project;
  return {
    props: {
      project,
    },
  };
}
