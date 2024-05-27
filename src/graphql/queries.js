import { gql } from "@apollo/client";

const GET_BLOG = gql`
query {
    posts {

    coverPhoto {
      url
    }
    title
    slug
    id
    author {
      ... on Author {
        name
        avatar {
          url
        }
      }
    }
  }
}`

export {GET_BLOG};