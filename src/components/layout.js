import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import { StaticImage } from "gatsby-plugin-image"
import "../sass/blog.scss"

const Layout = ({ location, title, children }) => (
  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        site {
          siteMetadata {
            title
             menuLinks {
               name
               link
             }
          }
        }
      }
    `}
    render={data => (  
      <React.Fragment>
        <Helmet
          title={'title'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        </Helmet>    
        <header>
          <Navbar pages={data.site.siteMetadata.menuLinks} />
          <section class="hero is-info is-medium is-bold">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <StaticImage src="../../content/assets/Blissful_Ink.png" height="150" layout="constrained" alt="Blissful Ink" />
                    <StaticImage src="../../content/assets/Text_White@300x.png" height="150" layout="constrained"alt="Blissful Ink" />
                </div>
            </div>
          </section>  
        </header>

        <main>
          <div class="container">
            <section class="articles">
                <div class="column is-8 is-offset-2">
                  {children}
                  <footer class="footer" >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </footer>
                  </div>
            </section>
          </div>
        </main>
      </React.Fragment>
    )}
  />
)

export default Layout
