import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SeO from "../components/seo"
import { rhythm } from "../utils/typography"
import { StaticImage } from "gatsby-plugin-image"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SeO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="card article" key={node.fields.slug}>
              <div className="card-content">
                <div className="media">
                  <div className="media-center">
                      <StaticImage src="../../content/assets/profile-pic.jpg" className="author-image" alt="Samara Bliss" />
                  </div>
                  <div className="media-content has-text-centered">
                      <p className="title article-title">
                          {title}
                      </p>
                      <p className="subtitle is-6 article-subtitle">{node.frontmatter.description}</p>
                  </div>
                </div>
                <div className="content article-body">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  />
                </div>
                <footer className="card-footer">
                  <div className="card-footer-item">{node.frontmatter.date}</div>
                  <Link className="card-footer-item" to={node.fields.slug}>... read more</Link>
                </footer>
              </div>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
