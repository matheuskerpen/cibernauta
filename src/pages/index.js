import React from "react"

import Header from "../components/header/header"
import Home from "../components/home/home"
import SEO from "../components/seo/seo"
import Footer from "../components/footer/footer"

const IndexPage = () => (
  <>
  <Header/>
  <SEO title="Home" />
  <Home/>
  <Footer/>
  </>
)

export default IndexPage
