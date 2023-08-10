import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import Modal from "../components/modal"
import SocialLinks from "../components/global-social-links"

export default function About(props) {
  const { aboutPage } = props.data

  return (
    <Layout {...aboutPage}>
      {aboutPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
      <Modal
        title={"We are currently closed for the moment."}
        timer={{ button: false, delay: 1000 }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <br />
          <p>
            We are currently taking time away from our little business to work
            on our own Toyota Coaster! Hopefully we will see you on the road!
            <br />
            <br />
            Keep an eye out on our Instagram &amp; Facebook pages for future
            updates.
            <br />
            <br />
            Thanks!
            <br />
            Todd and Jasmine
            <br />
            My Mates Van
          </p>
        </div>
        <SocialLinks size={50} inline />
      </Modal>
    </Layout>
  )
}

export const query = graphql`
  {
    aboutPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
