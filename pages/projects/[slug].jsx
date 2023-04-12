import React from "react";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

export default function projectPage({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
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
    fallback: true,
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
