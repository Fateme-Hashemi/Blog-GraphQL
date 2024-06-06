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

const GET_AUTHOR_INFO = gql`
query getAuthorInfo ($slug: String!){
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    filed
    name
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}
`
const GET_POST_INFO= gql`
query getPost ($slug: String!) {
  post(where: {slug: $slug}) {
    author {
      ... on Author {
        avatar {
          url
        }
        name
        filed
      }
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
}
`
const GET_POST_COMMENT = gql`
query getPostComments ($slug: String!)  {
  comments(where: {comments: {Post: {slug: $slug}}}) {
    id
    name
    text
  }
}
`

export {GET_BLOG, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO, GET_POST_COMMENT};