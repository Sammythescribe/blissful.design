/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
      }}
    >
      <StaticImage
        fixed={data.avatar.childImageSharp.fixed}
        src="../../content/assets/profile-pic.jpg"
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          maxWidth: 75,
          maxHeight: 75,
          minWidth: 50,
          minHeight: 50,
          
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author}</strong> earned her degree in English Literature from Schreiner University in 2019. Writing is one of her many passions along with cooking, daydreaming, and spending time with loved ones. She lives in Kerrville, Texas with her husband, Jeff, and their two cats, Dexter and Katara.
      </p>
    </div>
  )
}

export default Bio
