import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `720px`}}>
      <h1>É HORA DE DAR VIDA AO SEU PROJETO</h1>
      <h2>Desenvolvemos produtos digitais utilizando as melhores tecnologias do mercado</h2>
      <h3>Entenda como podemos ajudar você</h3>
      <h4>UX Planning</h4>
    </div>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
