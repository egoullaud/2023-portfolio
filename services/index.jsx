import { gql } from "@apollo/client";
export const PROJECTS_QUERY = gql`
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
`;

export const TESTIMONIALS_QUERY = gql`
  {
    testimonials {
      author
      id
      description {
        html
      }
    }
  }
`;

export const PROJECT_COVER_QUERY = gql`
  {
    projects(first: 4) {
      title
      slug
      id
      preview
      coverImage {
        url
        height
        width
      }
    }
  }
`;
