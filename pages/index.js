import Work from "@/components/Work";
import Hero from "../components/Hero";
import ContactHero from "@/components/ContactHero";
import client from "../apolloClient";
import { gql } from "@apollo/client";

export default function Home({ projects }) {
  return (
    <main>
      <Hero />
      <Work projects={projects} />
      <ContactHero />
    </main>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        projects(first: 4) {
          title
          slug
          id
          preview
          coverImage {
            url
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
