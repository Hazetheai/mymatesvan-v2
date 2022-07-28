import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

const Hero = ({ image, kicker, h1, subhead, text, links }) => {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            {image && (
              <GatsbyImage
                alt={image.alt || ""}
                image={getImage(image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {kicker && <Kicker>{kicker}</Kicker>}
              {h1}
            </Heading>
            <Subhead as="h2">{subhead}</Subhead>
            <Text as="p">{text}</Text>
            <ButtonList links={links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export default Hero

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
