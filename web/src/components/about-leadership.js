import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  FlexList,
  Heading,
  Section,
  Text,
  Box,
  Kicker,
  Space,
} from "./ui"
import { theme } from "../theme.css"

function AboutProfile({ image, name, jobTitle, width = "third" }) {
  return (
    <Box width={width} padding={4} center>
      {image && (
        <GatsbyImage
          alt={image.alt || ""}
          image={getImage(image.gatsbyImageData)}
          style={{
            border: theme.borders.base,
            borderRadius: theme.radii.button,
          }}
        />
      )}
      <Space size={3} />
      <Box>
        {name && (
          <Text variant="medium" bold center>
            {name}
          </Text>
        )}
        {jobTitle && (
          <Text variant="medium" center>
            {jobTitle}
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default function AboutLeadership({ kicker, heading, subhead, content }) {
  const _content = content.slice(0, 5)
  return (
    <Section>
      <Container width="tight">
        <Box center paddingY={4}>
          {kicker && <Kicker>{kicker}</Kicker>}
          {heading && <Heading as="h1">{heading}</Heading>}
          {subhead && <Text>{subhead}</Text>}
        </Box>
        <FlexList gap={0} variant="center" alignItems="start">
          {_content.map((profile, idx, arr) => (
            <AboutProfile
              key={profile.id}
              {...profile}
              width={handle3ColLayout(idx, arr)}
            />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

/**
 *
 * @param {number} idx Index in array
 * @param {*[]} arr Array of items
 */
function handle3ColLayout(idx, arr) {
  if (arr.length === 1) return "full"
  if (arr.length === 2) return "half"
  if (arr.length === 3) return "third"

  if (arr.length % 3 === 1 && idx === 0) {
    return "full"
  } else if (arr.length % 3 === 1) return "third"

  if (arr.length % 3 === 2 && idx <= 1) {
    return "half"
  } else if (arr.length % 3 === 2) return "third"

  return "third"
}

export const query = graphql`
  fragment AboutLeadershipContent on AboutLeadership {
    id
    kicker
    heading
    subhead
    content {
      id
      name
      jobTitle
      image {
        gatsbyImageData
        alt
      }
    }
  }
`
