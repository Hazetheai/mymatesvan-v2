import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allHomepageProduct {
      edges {
        node {
          id
          title
          slug
          heading
          text
          details_heading
          description
          highlights {
            text
            image {
              gatsbyImageData
            }
          }
          image {
            alt
            gatsbyImageData
          }
          gallery {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default ComponentName
