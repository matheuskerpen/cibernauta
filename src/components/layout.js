import React from "react"

import { Container } from "react-bootstrap"
import Home from "./home/home"
import Services from "./services/services"
import Contact from "./contact/contact"

const Layout = () => (
  <div style={{
        margin: `0 auto`,
        padding: `0 120px`,
        background: `linear-gradient(180deg, #1A151F 56.77%, #37333A 100%)`
        }}>
    <Home/>
    <Services/>
    <Contact/>
  </div>
)

export default Layout