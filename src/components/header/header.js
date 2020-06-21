import React from 'react'

import "./header.css"

import {Container, Image, Row, Col} from "react-bootstrap"
import darkBlueLogo from "../../images/logo/dark-blue.png"

const Header = () => (
  <header>
    <Container style={{  display: `flex`, width: '80%', maxWidth: '1200px'}}>
      <Image src={darkBlueLogo} alt="dark-blue-logo" fluid style={{ margin: `16px 0px`, height: `32px`}}/>
      <Container className="float-right" style={{maxWidth: '400px', marginRight:'0px'}}>
        <ul style={{ margin: `16px 0px`, listStyle: `none`, display: `flex`, justifyContent: `space-evenly`}}>
          <li>home</li> 
          <li>serviços</li>
          <li>contato</li>
          <li>equipe</li>
        </ul>
      </Container>
    </Container>
  </header>
)

export default Header