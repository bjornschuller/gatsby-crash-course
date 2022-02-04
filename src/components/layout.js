import React from "react"
import Navbar from "./navbar"
import "../styles/global.css"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <div className="Layout">
      <Navbar title={title} />
      {children}
      <footer>
        <p>{title} © 2022</p>
      </footer>
    </div>
  )
}
