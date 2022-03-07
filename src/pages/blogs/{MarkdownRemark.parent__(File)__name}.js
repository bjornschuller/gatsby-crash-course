import React from "react"
import * as classes from "../../styles/blog.module.css"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

export default function BlogPostPage({data}) {
 const title = data.markdownRemark.frontmatter.title
 const html = data.markdownRemark.html

  return (
    <Layout>
      <div className={classes.Blog}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        description
        title
      }
    }
  }
`

