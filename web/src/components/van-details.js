import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { ChevronsRight } from "react-feather"
import Slider from "react-slick"
import { theme } from "../theme.css"
import {
  Box,
  Button,
  Container,
  Flex,
  FlexList,
  Heading,
  Section,
  Space,
  Subhead,
  Text,
} from "./ui"
import { imageBorder } from "./ui.css"
import * as styles from "./van-details.css"

const VanDetails = ({
  details_heading,
  description,
  highlights,
  order = 0,
  short,
  slug,
}) => {
  const trimmedHighlights = short
    ? [...highlights].slice(0, 2)
    : [...highlights]
  const _highlights = React.useRef(trimmedHighlights)
  const [selected, setSelected] = React.useState(
    _highlights.current.length - 1 || trimmedHighlights.length
  )
  const slider = React.useRef(null)

  const settings = {
    className: "",
    centerMode: false,
    centerPadding: "0px",
    adaptiveHeight: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          className: "center",
          centerMode: true,
          // centerPadding: "40px",
        },
      },
    ],
  }

  return (
    <Section style={short ? { paddingTop: 0 } : {}}>
      <Container>
        <Heading style={{ maxWidth: "25ch" }}>{details_heading}</Heading>
        {!short && (
          <Text className={styles.descriptionText} as="p">
            {description}
          </Text>
        )}
        <Flex gap={4} variant="start" responsiveMedium>
          <Box order={order} width="half" breakMedium>
            {trimmedHighlights && (
              <>
                <Subhead> {short && "Some"} Highlights</Subhead>
                <Space size="4" />
                <FlexList
                  className={styles.textContainer}
                  gap={0}
                  variant="columnStart"
                >
                  {trimmedHighlights.map((highlight, idx, arr) => {
                    return (
                      <Text
                        tabIndex="0"
                        role="button"
                        key={highlight.text.trim()}
                        aria-pressed={arr.length - (idx + 1) === selected}
                        as="p"
                        style={{ display: "flex", cursor: "pointer" }}
                        onClick={() => {
                          setSelected(_highlights.current.length - (idx + 1))
                          slider.current.slickGoTo(idx)
                        }}
                        onKeyDown={(e) => {
                          if (e.code === "Enter" || e.code === "Space") {
                            if (e.code === "Space") e.preventDefault()
                            setSelected(_highlights.current.length - (idx + 1))
                            slider.current.slickGoTo(idx)
                          }
                        }}
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
              </>
            )}

            {slug && short && (
              <Button as="a" href={`/vans/${slug}`}>
                Check it out!
              </Button>
            )}
          </Box>
          <Box width="half" breakMedium className={imageBorder}>
            <Slider
              ref={slider}
              afterChange={(currentSlide) => {
                setSelected(_highlights.current.length - (1 + currentSlide))
              }}
              {...settings}
            >
              {trimmedHighlights.map((highlight, idx, arr) => {
                return (
                  <div
                    key={highlight.text.replace(/\s/, "-")}
                    className={styles.imageContainer}
                  >
                    <GatsbyImage
                      alt={highlight.text || ""}
                      image={getImage(highlight.image.gatsbyImageData)}
                      style={{ width: "100%" }}
                    />

                    <Text className={styles.imageHighlightText} as="p">
                      <ChevronsRight style={{ color: theme.colors.accent }} />
                      {highlight.text}
                    </Text>
                  </div>
                )
              })}
            </Slider>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export default VanDetails
