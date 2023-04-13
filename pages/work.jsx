import React from "react";
import client from "../apolloClient";
import { gql } from "@apollo/client";
import { ProjectCoverList } from "@/components/ProjectCoverList";

export default function work({ projects }) {
  return (
    <div className=" flex flex-col items-center mx-[2rem] my-[4rem] ">
      <h1 className="text-left leading-[1.25] font-alike lowercase tracking-wider text-5xl md:text-6xl pb-[2rem] md:pb-[4rem]">
        work
      </h1>
      <ProjectCoverList projects={projects} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        projects {
          title
          slug
          id
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
  });
  return {
    props: {
      projects: data.projects,
    },
  };
}
