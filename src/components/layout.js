import React from "react"
import Navbar from "./navbar"
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div className="Layout">
      <Navbar />
      {children}
      <footer>
        <p>FOO © 2022</p>
      </footer>
    </div>
  )
}
