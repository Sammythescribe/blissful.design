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
        title= 'Editing Services'
        description= 'Editing Services and Prices'
      />
      <div className="card article">
        <div className="card-content">
          <div className="media">                            
            <div className="media-content has-text-centered">
                <h1 className="title is-1">Editing Services</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="card article">
        <div className="card-content">
          <div className="media">                            
              <div className="media-content has-text-centered">
                  <h4 className="title is-4">Content Editing</h4>
              </div>
          </div>
          <div className="content article-body">
            <p>I will read your work in its entirety and provide feedback on pacing, character development, story line, plot, and thematic elements.</p>
            <ul className="service">
              <li><span>Short Works (1-50 pages)</span><span>$100</span></li>
              <li><span>Medium Length Works (51-150 pages)</span><span>$250</span></li>
              <li><span>Lengthy Works (151+ pages)</span><span>$500</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card article">
        <div className="card-content">
          <div className="media">                            
            <div className="media-content has-text-centered">
              <h4 className="title is-4">Line by Line Editing</h4>
            </div>
          </div>
          <div className="content article-body">
            <p>This is traditionally what people think of when they hear the word ‘editing.’ I will make sure that each sentence is grammatically correct (according to your personal style). I do not make permanent changes to your document. Instead, I will make comments and notations indicating where changes are needed.</p>
            <ul className="service">
              <li><span>Short Works (1-50 pages)</span><span>$200&nbsp;</span></li>
              <li><span>Medium Length Works (51-150 pages)</span><span>$500&nbsp;</span></li>
              <li><span>Lengthy Works (151+ pages)</span><span>$800+</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card article">
        <div className="card-content">
          <div className="media">                            
            <div className="media-content has-text-centered">
              <h4 className="title is-4">Proof Reading</h4>
            </div>
          </div>
          <div className="content article-body">
            <p>This is traditionally what people think of when they hear the word 'editing.' I will make sure that each sentence is grammatically correct (according to your personal style). I do not make permanent changes to your document. Instead, I will make comments and notations indicating where changes are needed.</p>
            <ul className="service">
              <li><span>Short Works (1-50 pages)</span><span>$50</span></li>
              <li><span>Medium Length Works (51-150 pages)</span><span>$100</span></li>
              <li><span>Lengthy Works (151+ pages)</span><span>$200</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card article">
        <div className="card-content">
          <div className="media">                            
            <div className="media-content has-text-centered">
              <h4 className="title is-4">Beta Reading</h4>
            </div>
          </div>
          <div className="content article-body">
            <p>I will read your work in its entirety and provide feedback as a reader. I have been reading consistently for over ten years. My reading habit combined with a background in literary criticism and writing makes me an excellent choice for beta reading.</p>
            <ul className="service">
              <li><span>Short Works (1-50 pages)</span><span>$50</span></li>
              <li><span>Medium Length Works (51-150 pages)</span><span>$100</span></li>
              <li><span>Lengthy Works (151+ pages)</span><span>$200</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card article">
        <div className="card-content">
          <div className="media">                            
            <div className="media-content has-text-centered">
              <h4 className="title is-4">Formatting</h4>
            </div>
          </div>
          <div className="content article-body">
            <p>I will make sure your work is formatted to current community guidelines. If you need images formatted with text, I will make sure your work appears beautiful on the page.</p>
            <ul className="service">
              <li><span>Standard (MLA, APA, CHICAGO)</span><span>$75</span></li>
              <li><span>With Images</span><span>$100</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card article">
        <div className="card-content">
          <div className="media">                            
            <div className="media-content has-text-centered">
              <h4 className="title is-4">Academic Essay Production</h4>
            </div>
          </div>
          <div className="content article-body">
            <p>As a graduate I understand that, when it comes to seeking out help with academic essays, the on campus writing centers don't always cut it.</p>
            <ul className="service">
              <li><span>1 Session: Content editing</span><span>$40</span></li>
              <li><span>2 sessions: Content editing and line by line editing</span><span>$80</span></li>
              <li><span>3 sessions: Content editing, line by line editing, proof reading, formatting</span><span>$150</span></li>
            </ul>
            <p>*Please keep in mind that at least one week is required between sessions</p>
          </div>
        </div>
      </div>
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
