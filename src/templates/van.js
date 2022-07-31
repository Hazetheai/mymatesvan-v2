import Modal from "../components/modal"

import React, { useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section, Container, Box, Heading, Text, Flex } from "../components/ui"
import Banner from "../components/banner"
import Hero from "../components/hero"
import VanDetails from "../components/van-details"
import Gallery from "@browniebroke/gatsby-image-gallery"
import * as styles from "../components/gallery.css"
import ContactForm from "../components/contact-form"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { theme } from "../theme.css"
import OtherVans from "../components/other-vans"

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
          images={[
            { image: van.bannerImage, title: van.heading, alt: van.text },
          ]}
          // text={van.text}
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
      <Section style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            filter: "grayscale(1)",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          alt=""
          src="../../static/wv-pier.jpeg"
          placeholder="blurred"
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
          aspectRatio={3 / 1}
        />
        <div
          style={{
            background: theme.gradients.bwFromLeft,
            width: "100%",
            gridArea: "1/1",
            position: "relative",
          }}
        />
        <Container
          width="fullfullbleed"
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
        >
          <Flex style={{ color: theme.colors.white }} variant={"spaceBetween"}>
            <Box width="half" padding={4}>
              <Heading>Request a free Consultation</Heading>
              <Text>
                Get in touch and let us know what you're looking for. We'd be
                delighted to help you create the van of your dreams!
              </Text>
            </Box>
            <Box width="third" padding={4} center>
              <Modal title={"Send us a message!"}>
                <Box center>
                  <ContactForm />
                </Box>
              </Modal>
            </Box>
          </Flex>
        </Container>
        <OtherVans otherVans={otherVans} />
      </Section>

      {/* <pre>{JSON.stringify(van, null, 4)}</pre> */}
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
