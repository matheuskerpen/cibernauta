import React from 'react'
import styled from 'styled-components'

import "./header.css"

import { AnchorLink } from "gatsby-plugin-anchor-links";
import {Container, Image} from "react-bootstrap"
import MobileMenu from "./mobileMenu"
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
const Header = () => {

  return (
    <header>
      <Container style={{  display: `flex`, width: '80%', maxWidth: '1200px'}}>
        <Image src={darkBlueLogo} alt="dark-blue-logo" fluid style={{ margin: `16px 0px`, height: `32px`}}/>
        <Container className="d-none d-md-block" style={{maxWidth: '400px', marginRight:'0px'}}>
          <ul style={{ margin: `16px 0px`, listStyle: `none`, display: `flex`, justifyContent: `space-evenly`}}>
            <li><StyledAnchor to="/#home" title="home" stripHash/></li>
            <li><StyledAnchor to="/#services" title="serviços" stripHash/></li>
            <li><StyledAnchor to="/#contact" title="contato" stripHash/></li>
            <li><StyledAnchor to="/#team" title="equipe" stripHash/></li>
          </ul>
        </Container>
      </Container>
      <MobileMenu/>
    </header>
)}

export default Header