import React from 'react';
import Layout from '../../components/layout';
import { graphql } from "gatsby"
import * as classes from "../../styles/blogs.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogsPage({data}) {

  return (
    <Layout>
     <div className={classes.BlogsPage}>
      <h1>Blogs.</h1>
      <div className={classes.BlogPosts}>
        {data.allMarkdownRemark.nodes.map(node => {
            const thumb = getImage(node.frontmatter.thumb)
            console.log("TESTT GOT ", thumb)
          return (
            <div className={classes.BlogPost} key={node.id}>
              <GatsbyImage image={thumb} alt="thumbnail"></GatsbyImage>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.description}</p>
              <p>{node.frontmatter.date}</p>
            </div>
          )
        })}
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          title
          description
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`
