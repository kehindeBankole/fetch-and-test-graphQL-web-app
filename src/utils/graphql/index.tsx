import { gql } from "@apollo/client";

export const JOBS = gql`
  query GetJobs {
    jobs {
      slug
      title
      id
      postedAt
      tags {
        name
      }
      commitment {
        title
      }
      company {
        name
        slug
        logoUrl
      }
      cities {
        name
        id
      }
      countries {
        name
      }
      remotes {
        type
      }
    }
  }
`;
