import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={classes.IndexPage}>
      <div className={classes.Intro}>
        <h1>Eat, Sleep</h1>
        <h2>Code & Repeat</h2>
        <p>Software developer who likes to eat and sleep</p>
      </div>
      <StaticImage alt="laptop" src="../images/laptop.png" width={1100} />
    </div>
  </Layout>
)

export default IndexPage
