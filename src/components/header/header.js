import React from 'react'
import styled from 'styled-components'

import "./header.css"

import { AnchorLink } from "gatsby-plugin-anchor-links";
import {Container, Image, Row, Col} from "react-bootstrap"
import darkBlueLogo from "../../images/logo/dark-blue.png"

const StyledAnchor = styled(AnchorLink)`
  color: #fff;
  font-size: 14px;
  font-family: 'Ubuntu';

  :hover {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
`


const Header = () => (
  <header>
    <Container style={{  display: `flex`, width: '80%', maxWidth: '1200px'}}>
      <Image src={darkBlueLogo} alt="dark-blue-logo" fluid style={{ margin: `16px 0px`, height: `32px`}}/>
      <Container className="float-right" style={{maxWidth: '400px', marginRight:'0px'}}>
        <ul style={{ margin: `16px 0px`, listStyle: `none`, display: `flex`, justifyContent: `space-evenly`}}>
          <li><StyledAnchor to="/#home" title="home"/></li>
          <li><StyledAnchor to="/#services" title="serviços" /></li>
          <li><StyledAnchor to="/#contact" title="contato" /></li>
          <li><StyledAnchor to="/#team" title="equipe" /></li>
        </ul>
      </Container>
    </Container>
  </header>
)

export default Header