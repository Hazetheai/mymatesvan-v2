import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { theme } from "../theme.css"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Space,
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
                style={{
                  border: theme.borders.thick,
                  borderRadius: theme.radii.button,
                }}
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
