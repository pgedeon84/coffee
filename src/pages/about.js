import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
);

export const query = graphql`
 {
   img: file(relativePath:{eq: "about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
