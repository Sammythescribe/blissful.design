import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SeO from "../components/seo"
import { rhythm } from "../utils/typography"

const Services = ({ location, data }) => {
//function Services(props) {
  const siteTitle = data.site.siteMetadata.title


  return (
    <Layout location={location} title={siteTitle}>
      <SeO
        title= 'Services'
        description= 'Services and Prices'
      />
      <header>
      <section class="hero is-info is-medium is-bold">
      <div class="hero-body">
          <div class="container has-text-centered">
              <h1 class="title">Services</h1>
          </div>
      </div>
    </section>
</header>
      <div>
      <div>
      <h3 class="title is-3">Content Editing</h3>
      <p>I will read your work in its entirety and provide feedback on pacing, character development, story line, plot, and thematic elements.</p>
      <ul>
        <li><span style={{float: 'left'}}>Short Works (1-50 pages)</span><span style={{float: 'right'}}>$100</span></li>
        <li><span style={{float: 'left'}}>Medium Length Works (51-150 pages)</span><span style={{float: 'right'}}>$250</span></li>
        <li><span style={{float: 'left'}}>Lengthy Works (151+ pages)</span><span style={{float: 'right'}}>$500</span></li>
      </ul>
      </div>
      <div>
      <h3>Line by Line Editing</h3>
      <p>This is traditionally what people think of when they hear the word ‘editing.’ I will make sure that each sentence is grammatically correct (according to your personal style). I do not make permanent changes to your document. Instead, I will make comments and notations indicating where changes are needed.</p>
      <ul>
        <li><span style={{float: 'left'}}>Short Works (1-50 pages)</span><span style={{float: 'right'}}>$200&nbsp;</span></li>
        <li><span style={{float: 'left'}}>Medium Length Works (51-150 pages)</span><span style={{float: 'right'}}>$500&nbsp;</span></li>
        <li><span style={{float: 'left'}}>Lengthy Works (151+ pages)</span><span style={{float: 'right'}}>$800+</span></li>
      </ul>
      </div>
      <div>
      <h3>Proof Reading</h3>
      <p>Proof reading is the final step of the editing process. I will make one final sweep to find tiny mistakes.</p>
      <ul>
        <li><span style={{float: 'left'}}>Short Works (1-50 pages)</span><span style={{float: 'right'}}>$50</span></li>
        <li><span style={{float: 'left'}}>Medium Length Works (51-150 pages)</span><span style={{float: 'right'}}>$100</span></li>
        <li><span style={{float: 'left'}}>Lengthy Works (151+ pages)</span><span style={{float: 'right'}}>$200</span></li>
      </ul>
      </div>
      <div>
      <h3>Beta Reading</h3>
      <p>I will read your work in its entirety and provide feedback as a reader. I have been reading consistently for over ten years. My reading habit combined with a background in literary criticism and writing makes me an excellent choice for beta reading.</p>
      <ul>
        <li><span style={{float: 'left'}}>Short Works (1-50 pages)</span><span style={{float: 'right'}}>$50</span></li>
        <li><span style={{float: 'left'}}>Medium Length Works (51-150 pages)</span><span style={{float: 'right'}}>$100</span></li>
        <li><span style={{float: 'left'}}>Lengthy Works (151+ pages)</span><span style={{float: 'right'}}>$200</span></li>
      </ul>
      </div>
      <div>
      <h3>Formatting</h3>
      <p>I will make sure your work is formatted to current community guidelines. If you need images formatted with text, I will make sure your work appears beautiful on the page.</p>
      <ul>
        <li><span style={{float: 'left'}}>Standard (MLA, APA, CHICAGO)</span><span style={{float: 'right'}}>$75</span></li>
        <li><span style={{float: 'left'}}>With Images</span><span style={{float: 'right'}}>$100</span></li>
      </ul>
      </div>
      <div>
      <h3>Academic Essay Production</h3>
      <p>As a graduate I understand that, when it comes to seeking out help with academic essays, the on campus writing centers don’t always cut it.</p>
      <p>*Please keep in mind that at least one week is required between sessions
      </p>
      <ul>
        <li><span style={{float: 'left'}}>1 Session: Content editing</span><span style={{float: 'right'}}>$40</span></li>
        <li><span style={{float: 'left'}}>2 sessions: Content editing and line by line editing</span><span style={{float: 'right'}}>$80</span></li>
        <li><span style={{float: 'left'}}>3 sessions: Content editing, line by line editing, proof reading, formatting</span><span style={{float: 'right'}}>$150</span></li>
      </ul>
      </div>

      </div>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
    </Layout>
  )

}

export default Services

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
  }
`
