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

export const socialMedia = (size = 24) => ({
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

export const getSocialURL = ({ service, username }) => {
  const domain = socialMedia()[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

export const getSocialIcon = ({ service, size = 24 }) => {
  return socialMedia(size)[service]?.icon
}

export const getSocialName = ({ service }) => {
  return socialMedia()[service]?.name
}

const SocialLinks = ({ title, size, inline }) => {
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

  if (inline) {
    return (
      <Container width="tight">
        <SocialLinkList socialLinks={socialLinks} size={size || 50} />
      </Container>
    )
  }

  return (
    <Section>
      <Container width="wide">
        {title && (
          <Box center>
            <Heading>{title}</Heading>
          </Box>
        )}
        <SocialLinkList socialLinks={socialLinks} size={size || 100} />
      </Container>
    </Section>
  )
}

const SocialLinkList = ({ socialLinks, size }) => {
  return (
    <FlexList variant="spaceAround">
      {socialLinks &&
        socialLinks.map((link) => {
          link.node.size = size || 100
          const url = getSocialURL(link.node)
          return (
            url && (
              <li key={link.node.id}>
                <Box center>
                  <IconLink to={url}>
                    <VisuallyHidden>{getSocialName(link.node)}</VisuallyHidden>
                    {getSocialIcon(link.node)}
                  </IconLink>
                  {link.node.tagline && (
                    <Text style={{ maxWidth: "15ch" }} variant="stat">
                      {link.node.tagline}
                    </Text>
                  )}
                </Box>
              </li>
            )
          )
        })}
    </FlexList>
  )
}

export default SocialLinks

export const query = graphql`
  fragment GlobalSocialLinksContent on GlobalSocialLinks {
    id
    title
  }
`
