import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { theme } from "../theme.css"
import ContactForm from "./contact-form"
import Modal from "./modal"
import { Box, Container, Flex, Heading, Section, Text } from "./ui"

const Consultation = ({}) => {
  return (
    <Section style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
          filter: "grayscale(1)",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        alt=""
        src="../../static/wv-pier.jpeg"
        placeholder="blurred"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
        aspectRatio={3 / 1}
      />
      <div
        style={{
          background: theme.gradients.bwFromLeft,
          width: "100%",
          gridArea: "1/1",
          position: "relative",
        }}
      />
      <Container
        width="fullfullbleed"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <Flex style={{ color: theme.colors.white }} variant={"spaceBetween"}>
          <Box width="half" padding={4}>
            <Heading>Request a free Consultation</Heading>
            <Text>
              Get in touch and let us know what you're looking for. We'd be
              delighted to help you create the van of your dreams!
            </Text>
          </Box>
          <Box width="third" padding={4} center>
            <Modal title={"Send us a message!"}>
              <Box center>
                <ContactForm />
              </Box>
            </Modal>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export default Consultation
