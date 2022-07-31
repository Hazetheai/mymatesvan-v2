import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Kicker,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
} from "./ui"
import CollapsibleText from "./collapsible-text"
const txt = `Highly recommend My Mates Van! Todd custom built a draw set and sleeping platform into the back of my Subaru Outback - car camper style. He was friendly, easy to work with and had great communication when explaining how the finished product look. I came to My Mates Van with a rough outline of what I wanted, but Todd brought some amazing ideas/fixes and created a plan that utilised the space perfectly. He clearly has a high level of carpentry skill and a creative eye for the intricacies of working in vans. He kept in touch during the build and had it completed within the timeframe. I couldn’t be happier with the work and would happily head back for another project 🚚`
function Testimonial(props) {
  return (
    <Flex variant="start">
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} />
      )}
      <Blockquote>
        <CollapsibleText text={props.quote} />

        <figcaption>
          <Text as="cite" bold variant="caps">
            {props.source}
          </Text>
        </figcaption>
      </Blockquote>
    </Flex>
  )
}

export default function TestimonialList(props) {
  return (
    <Section>
      <Container>
        <Box center>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
        </Box>
        <FlexList gutter={3} variant="start" responsive wrap>
          {props.content.map((testimonial, index) => (
            <Box as="li" key={testimonial.id + index} width="half" padding={3}>
              <Testimonial {...testimonial} />
            </Box>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    kicker
    heading
    content {
      id
      quote
      source
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
