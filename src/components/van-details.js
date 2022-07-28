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
} from "./ui"
import { ChevronsRight } from "react-feather"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { theme } from "../theme.css"
import * as styles from "./van-details.css"
import { showForSmallOnlyFlex } from "./ui.css"
const VanDetails = ({ details_heading, description, highlights }) => {
  const [selected, setSelected] = React.useState(null)
  const reversedHighlights = [...highlights].reverse()
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="end" responsive>
          <Box width="half">
            <Heading>{details_heading}</Heading>
            <Text as="p">{description}</Text>
            <Subhead>Highlights</Subhead>
            {highlights && (
              <FlexList
                className={styles.textContainer}
                gap={0}
                variant="columnStart"
              >
                {highlights.map((highlight, idx, arr) => {
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
          </Box>
          <Box width="half" className={styles.cardsContainer}>
            {highlights &&
              reversedHighlights.map((highlight, imgIdx, imgArr) => {
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
                      className={`${
                        styles.squareVariants["." + (imgIdx + 1)]
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
