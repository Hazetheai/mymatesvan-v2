import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
  Space,
  Link,
} from "./ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from "../theme.css"

function Product({ image, heading, text, slug, links }) {
  return (
    <Link href={`/vans/${slug}`}>
      <Box center>
        {image && (
          <GatsbyImage
            alt={image.alt || ""}
            image={image.thumb}
            size="large"
            style={{
              border: theme.borders.base,
              borderRadius: theme.radii.button,
            }}
          />
        )}
        <Space size="3" />
        <Subhead style={{ maxWidth: "15ch" }}>{heading}</Subhead>
        <Text>{text}</Text>
        <LinkList links={links} />
      </Box>
    </Link>
  )
}

export default function ProductList(props) {
  return (
    <Section>
      <Container>
        <Box center paddingY={4}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <FlexList gap={4} variant="center" responsive>
          {props.content.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      slug
      image {
        alt
        id
        ... on SanityImageAsset {
          thumb: gatsbyImageData(width: 270, height: 270)
        }
      }
    }
  }
`
