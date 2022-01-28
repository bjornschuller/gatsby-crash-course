import React from "react"
import { Link } from "gatsby"
import * as classes from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <h1>FOO</h1>
      <ul>
        <Link className={classes.Link} to="/">
          Home
        </Link>
        <Link className={classes.Link} to="/about">
          About
        </Link>
        <Link className={classes.Link} to="/blogs">
          Blogs
        </Link>
      </ul>
    </nav>
  )
}
