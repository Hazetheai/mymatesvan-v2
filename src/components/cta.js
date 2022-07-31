import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
} from "./ui"

export default function HomepageCta({ kicker, heading, text, links, image }) {
  return (
    <Container width="fullbleed">
      <Section padding={5} radius="large" background="primary">
        <Heading center>
          {kicker && <Kicker center>{kicker}</Kicker>}
          {heading}
        </Heading>
        <Text as="p" center variant="lead">
          {text}
        </Text>
        <ButtonList links={links} variant="center" reversed />
        {image && (
          <Nudge left={5} right={5} bottom={5}>
            <GatsbyImage
              alt={image.alt || ""}
              image={getImage(image.gatsbyImageData)}
            />
          </Nudge>
        )}
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text

    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
      isContactButton
    }
  }
`
