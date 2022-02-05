import React from 'react';
import Layout from '../../components/layout';
import { graphql } from "gatsby"

export default function BlogsPage({data}) {

  return (
    <Layout>
      <h1>Blogs.</h1>
      {data.allFile.nodes.map(node => {
        return <li key={node.id}>{node.name}</li>
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      nodes {
        id
        name
      }
    }
  }
`
