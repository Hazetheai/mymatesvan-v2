import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Clock, Mail, MapPin,
  Phone
} from "react-feather"
import BrandLogo from "./brand-logo"
import ContactForm from "./contact-form"
import * as styles from "./footer.css"
import {
  getSocialIcon,
  getSocialName,
  getSocialURL
} from "./global-social-links"
import {
  Box, Container,
  Flex,
  FlexList, Heading, IconLink, Link, NavLink, Space, Subhead, Text, VisuallyHidden
} from "./ui"




export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          contactAddress
          contactAddressLink
          contactOpeningTimes
          contactPhone
          contactEmail
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `)

  const {
    links,
    meta,
    socialLinks,
    copyright,
    contactAddress,
    contactAddressLink,
    contactOpeningTimes,
    contactPhone,
    contactEmail,
  } = data.layout.footer
  const hasContactDetails =
    [contactAddress, contactEmail, contactOpeningTimes, contactPhone].filter(
      (el) => !!el
    ).length > 0
  return (
    <Container as="footer" width="fullbleed" id="footer">
      <Box>
        <Flex gap={0} variant="spaceBetween" responsive>
          {hasContactDetails && (
            <Box className={styles.footerLeft} width="half">
              <StaticImage
                src="../../static/wv-beach-2.jpeg"
                alt=""
                style={{
                  gridArea: "1/1",
                  filter:
                    "blur(2.9px) contrast(.6) grayscale(1) hue-rotate(23deg) opacity(0.74) sepia(.5) saturate(1.1)",
                }}
                layout="fullWidth"
              />
              <Box
                padding={4}
                style={{
                  // By using the same grid area for both, they are stacked on top of each other
                  gridArea: "1/1",
                  position: "relative",
                  // This centers the other elements inside the hero component
                  display: "grid",
                }}
              >
                <Subhead>How to find us</Subhead>
                {contactAddress && (
                  <Flex marginY={3}>
                    <MapPin />
                    <address>
                      <Text style={{ margin: 0 }}>
                        <Link href={contactAddressLink || "none"}>
                          {contactAddress.split(",").map((word) => (
                            <React.Fragment key={word}>
                              {word},
                              <br />
                            </React.Fragment>
                          ))}
                          {/* Unit 9/23 Donegal Road, <br />
                      Lonsdale, Adelaide, <br />
                      South Australia, 5160 */}
                        </Link>
                      </Text>
                    </address>
                  </Flex>
                )}
                {contactOpeningTimes && (
                  <Flex marginY={3}>
                    <Clock />
                    <Text style={{ margin: 0 }}>
                      {contactOpeningTimes}
                      {/* 7:30am to 5:00pm - Mon to Fri */}
                    </Text>
                  </Flex>
                )}
                {contactPhone && (
                  <Flex marginY={3}>
                    <Phone />
                    <Text style={{ margin: 0 }}>
                      <Link href={`tel:${contactPhone}`}>
                        {contactPhone}
                        {/* 0467693920 */}
                      </Link>
                    </Text>
                  </Flex>
                )}
                {contactEmail && (
                  <Flex marginY={3}>
                    <Mail />
                    <Link
                      href={`mailto:${contactEmail}?subject=Website Enquiry`}
                    >
                      <Text style={{ margin: 0 }}>{contactEmail}</Text>
                    </Link>
                  </Flex>
                )}
              </Box>
            </Box>
          )}
          <Box center width={hasContactDetails ? "half" : "full"} padding={4}>
            <Heading>Contact us</Heading>
            <ContactForm />
          </Box>
        </Flex>
        <Flex variant={"spaceBetween"} marginY={4} responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <FlexList variant="end">
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)

                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url} style={{ marginRight: 0 }}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>

        <Flex marginY={4} responsive>
          <FlexList variant="start">
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />

          <FlexList responsive>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>

          <Text variant="small">
            © {new Date().getFullYear()} {copyright}
          </Text>
        </Flex>
      </Box>
    </Container>
  )
}
