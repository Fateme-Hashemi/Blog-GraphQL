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

const GET_AUTHORS_INFO = gql`
query {
  authors {
    id
    slug
    name
    avatar {
      url
    }
  }
}`

export {GET_BLOG, GET_AUTHORS_INFO};