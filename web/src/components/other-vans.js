import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  Box,
  Container,
  FlexList,
  Heading,
  Link,
  Section,
  Space,
  Subhead,
  Text,
} from "./ui"
import Slider from "react-slick"
import * as styles from "./other-vans.css"
/**
 * 
{
          text
          slug
          title
          image {
            alt
            gatsbyImageData
          }
        }
 */

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        infinite: true,
        dots: true,
      },
    },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     initialSlide: 0,
    //   },
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //   },
    // },
  ],
}
const OtherVans = ({ otherVans }) => {
  return (
    <Section>
      <Container width="fullBleed">
        <Slider {...settings}>
          {otherVans.edges.map((_van) => {
            const van = _van.node
            return (
              <Box key={van.slug} center padding={3}>
                <div className={styles.vanCard}>
                  <Link href={`/vans/${van.slug}`}>
                    <div className={styles.vanImageContainer}>
                      <GatsbyImage
                        alt={van.title}
                        image={van.image.thumb}
                        className={styles.vanImage}
                      />
                    </div>
                    <div className={styles.textContainer}>
                      <Text variant="subhead">{van.title}</Text>
                      <Space size={4} />
                      <Text variant="kicker">Check 'em out!</Text>
                    </div>
                  </Link>
                </div>
              </Box>
            )
          })}
        </Slider>
      </Container>
    </Section>
  )
}

export default OtherVans
