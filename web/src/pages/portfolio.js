import React from "react"
import { graphql } from "gatsby"
import { Section } from "../components/ui"
import Layout from "../components/layout"
import VanDetails from "../components/van-details"
import Modal from "../components/modal"
import SocialLinks from "../components/global-social-links"

const VansPage = ({ data }) => {
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
      <Modal
        title={"We are currently closed for the moment."}
        timer={{ button: false, delay: 1000 }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <br />
          <p>
            We are currently taking time away from our little business to work
            on our own Toyota Coaster! Hopefully we will see you on the road!
            <br />
            <br />
            Keep an eye out on our Instagram &amp; Facebook pages for future
            updates.
            <br />
            <br />
            Thanks!
            <br />
            Todd and Jasmine
            <br />
            My Mates Van
          </p>
        </div>
        <SocialLinks size={50} inline />
      </Modal>
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
