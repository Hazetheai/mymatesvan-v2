import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import * as styles from "./banner.css"
import {
  Box,
  Container,
  Heading,
  Section,
  Subhead,
  SuperHeading,
  Text,
} from "./ui"

export default function Banner({ heading, text, images }) {
  //   function next() {
  //     slickNext()
  //   }

  //   function previous() {
  //     slickPrev()
  //   }

  const settings = {
    arrows: false,
    fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  return (
    <Section style={{ padding: "0" }}>
      <Container className={styles.bannerSection} width="full">
        {(heading || text) && (
          <Box width="wide" center paddingY={4}>
            {heading && <Heading>{heading}</Heading>}
            {text && <Text>{text}</Text>}
          </Box>
        )}

        {images && (
          <Slider {...settings}>
            {images.map((img) => (
              <div key={img.title} className={styles.bannerSliderLayout}>
                <div className={styles.bannerImageHolder}>
                  <GatsbyImage
                    alt={img.image.alt || ""}
                    image={getImage(img.image.gatsbyImageData)}
                    className={styles.bannerImage}
                    objectFit="cover"
                  />
                </div>
                <Box center paddingY={4} className={styles.bannerContents}>
                  <SuperHeading>{img.title}</SuperHeading>
                  <Subhead variant="large">{img.alt}</Subhead>
                </Box>
              </div>
            ))}
          </Slider>
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBannerContent on HomepageBanner {
    id
    heading
    text
    images {
      title
      alt
      image {
        gatsbyImageData
        alt
        url
      }
    }
  }
`
