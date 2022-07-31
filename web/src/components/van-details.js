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
  Flex,
  Link,
  Button,
} from "./ui"
import { ChevronsRight } from "react-feather"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { theme } from "../theme.css"
import * as styles from "./van-details.css"
import { showForSmallOnlyFlex } from "./ui.css"
const VanDetails = ({
  details_heading,
  description,
  highlights,
  order = 0,
  short,
  slug,
}) => {
  const [selected, setSelected] = React.useState(null)
  const trimmedReversedHighlights = short
    ? [...highlights].reverse().slice(0, 2)
    : [...highlights].reverse()
  const trimmedHighlights = short
    ? [...highlights].slice(0, 2)
    : [...highlights]

  return (
    <Section style={short ? { paddingTop: 0 } : {}}>
      <Container>
        <Flex gap={4} variant="end" responsive>
          <Box order={order} width="half">
            <Heading>{details_heading}</Heading>
            {!short && <Text as="p">{description}</Text>}
            <Subhead> {short && "Some"} Highlights</Subhead>
            {trimmedHighlights && (
              <FlexList
                className={styles.textContainer}
                gap={0}
                variant="columnStart"
              >
                {trimmedHighlights.map((highlight, idx, arr) => {
                  return (
                    <Text
                      key={highlight.text.trim()}
                      as="p"
                      style={{ display: "flex", cursor: "pointer" }}
                      onMouseOver={() => setSelected(arr.length - (idx + 1))}
                      onMouseOut={() => setSelected(null)}
                      className={
                        styles.highlightText[
                          arr.length - (idx + 1) === selected
                            ? "hovered"
                            : "unhovered"
                        ]
                      }
                    >
                      <ChevronsRight style={{ color: theme.colors.accent }} />
                      {highlight.text}
                    </Text>
                  )
                })}
              </FlexList>
            )}

            {slug && short && (
              <Button as="a" href={`/vans/${slug}`}>
                Check it out!
              </Button>
            )}
          </Box>
          <Box width="half" className={styles.cardsContainer}>
            {trimmedHighlights &&
              trimmedReversedHighlights.map((highlight, imgIdx, imgArr) => {
                return (
                  <div
                    key={highlight.text.trim()}
                    className={styles.imageContainer}
                    onClick={() =>
                      selected === imgIdx
                        ? setSelected(null)
                        : setSelected(imgIdx)
                    }
                  >
                    <GatsbyImage
                      alt={highlight.text || ""}
                      image={getImage(highlight.image.gatsbyImageData)}
                      // style={{ position: "absolute" }}
                      className={`${
                        styles.squareVariants["image-" + (imgIdx + 1)]
                      } ${selected === imgIdx ? styles.selectedHighlight : ""}`}
                    />
                    <Text
                      className={showForSmallOnlyFlex}
                      key={highlight.text.trim()}
                      as="p"
                      style={{ cursor: "pointer" }}
                    >
                      <ChevronsRight style={{ color: theme.colors.accent }} />
                      {highlight.text}
                    </Text>
                  </div>
                )
              })}
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export default VanDetails
