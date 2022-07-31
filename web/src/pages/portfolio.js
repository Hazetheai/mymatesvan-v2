import React from "react"
import { graphql } from "gatsby"
import { Section } from "../components/ui"
import Layout from "../components/layout"
import VanDetails from "../components/van-details"

const VansPage = ({ data }) => {
  console.log(
    "data.allHomepageProduct.edges[0].node.image",
    data.allHomepageProduct.edges[0].node.image
  )
  return (
    <Layout
      title="Portfolio"
      description="All the vans we have converted"
      image={data.allHomepageProduct.edges[0].node.image}
    >
      {data.allHomepageProduct.edges.map((edge, idx) => {
        const van = edge.node
        return (
          <VanDetails
            key={van.id}
            description={van.description}
            details_heading={van.details_heading}
            highlights={van.highlights}
            order={idx % 2 ? 1 : 0}
            short
            slug={van.slug}
          />
        )
      })}
    </Layout>
  )
}

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
            url
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

export default VansPage
