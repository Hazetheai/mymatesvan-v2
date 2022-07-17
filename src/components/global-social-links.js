import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
  Section,
  Heading,
  Subhead,
} from "./ui"
import BrandLogo from "./brand-logo"

const socialMedia = (size = 24) => ({
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter size={size} />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram size={size} />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook size={size} />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube size={size} />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub size={size} />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch size={size} />,
  },
})

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia()[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service, size = 24 }) => {
  console.log("service", service)
  console.log("size", size)
  return socialMedia(size)[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia()[service]?.name
}

const SocialLinks = (data) => {
  console.log("data", data)
  const staticData = useStaticQuery(graphql`
    {
      allSocialLink {
        edges {
          node {
            id
            service
            username
            tagline
          }
        }
      }
    }
  `)

  const { edges: socialLinks } = staticData.allSocialLink

  console.log("socialLinks", socialLinks)
  return (
    <Section>
      <Container width="wide">
        {data.title && (
          <Box center>
            <Heading>{data.title}</Heading>
          </Box>
        )}
        <FlexList variant="spaceAround">
          {socialLinks &&
            socialLinks.map((link) => {
              link.node.size = 100
              const url = getSocialURL(link.node)
              return (
                url && (
                  <li key={link.node.id}>
                    <Box center>
                      <IconLink to={url}>
                        <VisuallyHidden>
                          {getSocialName(link.node)}
                        </VisuallyHidden>
                        {getSocialIcon(link.node)}
                      </IconLink>
                      {link.node.tagline && (
                        <Text variant="stat">{link.node.tagline}</Text>
                      )}
                    </Box>
                  </li>
                )
              )
            })}
        </FlexList>
      </Container>
    </Section>
  )
}

export default SocialLinks

export const query = graphql`
  fragment GlobalSocialLinksContent on GlobalSocialLinks {
    id
    title
  }
`
