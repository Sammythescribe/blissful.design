import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SeO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SeO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="card article">
          <div className="card-content">
            <div className="media">                            
                <div className="media-content has-text-centered">
                    <p className="title article-title">{post.frontmatter.title}</p>
                    <p className="subtitle is-6 article-subtitle">
                        {post.frontmatter.date}
                    </p>
                </div>
            </div>
            <div className="content article-body">
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <nav className="pagination" >              
                {previous && (
                  <Link className="pagination-previous" to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
                {next && (
                  <Link className="pagination-next" to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
            </nav>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
