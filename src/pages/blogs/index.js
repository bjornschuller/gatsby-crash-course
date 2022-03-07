import React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from "gatsby"
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
          const blogFileName = node.parent.name
          return (
            <div className={classes.BlogPost} key={node.id}>
              <Link to={"/blogs/" + blogFileName}>
                <GatsbyImage image={thumb} alt="thumbnail"></GatsbyImage>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.description}</p>
                <p>{node.frontmatter.date}</p>
              </Link>
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
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`
