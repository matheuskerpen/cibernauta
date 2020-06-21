import React from "react"

import Home from "./home/home"
import Services from "./services/services"
import Contact from "./contact/contact"

const Layout = () => (
  <div style={{

        background: `linear-gradient(180deg, #1A151F 56.77%, #37333A 100%)`
        }}>
    <Home/>
    <Services/>
    <div style={{height: '100px'}}></div>
    <Contact/>
  </div>
)

export default Layout