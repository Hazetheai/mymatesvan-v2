import Gallery from "@browniebroke/gatsby-image-gallery"
import { graphql } from "gatsby"
import React from "react"
import Banner from "../components/banner"
import Consultation from "../components/consultation"
import * as styles from "../components/gallery.css"
import Hero from "../components/hero"
import Layout from "../components/layout"
import OtherVans from "../components/other-vans"
import { Container, Section } from "../components/ui"
import VanDetails from "../components/van-details"

const CustomWrapper = ({ children, onClick }) => (
  <div className={styles.galleryImageWrapper} onClick={onClick}>
    {children}
  </div>
)
const VanTemplate = ({ data }) => {
  const { homepageProduct: van, otherVans } = data

  return (
    <Layout
      title={van.title}
      description={van.text}
      image={van.image}
      noPadding={!!van.bannerImage}
    >
      {van.bannerImage ? (
        <Banner
          // heading={van.heading}
          // text={van.text}
          images={[
            { image: van.bannerImage, title: van.heading, alt: van.text },
          ]}
        />
      ) : (
        <Hero h1={van.heading} image={van.image} subhead={van.text} />
      )}
      <VanDetails
        description={van.description}
        details_heading={van.details_heading}
        highlights={van.highlights}
      />
      <Section>
        <Container width="fullbleed">
          <Gallery
            // rowMargin={0}
            // gutter={"0"}
            images={van.gallery.map((img) => ({ ...img.asset }))}
            customWrapper={CustomWrapper} // example of use
          />
        </Container>
      </Section>
      <Consultation />
      <OtherVans otherVans={otherVans} />
    </Layout>
  )
}

export const query = graphql`
  query VanQuery($slug: String) {
    homepageProduct(slug: { eq: $slug }) {
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
      bannerImage {
        alt
        gatsbyImageData
      }
      gallery {
        asset {
          ... on SanityImageAsset {
            id
            thumb: gatsbyImageData(width: 270, height: 270)
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    otherVans: allHomepageProduct(filter: { slug: { ne: $slug } }) {
      edges {
        node {
          text
          slug
          title
          image {
            alt
            ... on SanityImageAsset {
              id
              thumb: gatsbyImageData(width: 350, height: 350)
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

export default VanTemplate
