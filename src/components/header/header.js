import React from 'react'

import "./header.css"

import {Container, Image} from "react-bootstrap"
import darkBlueLogo from "../../images/logo/dark-blue.png"

const Header = () => (
  <header>
    <Container style={{  display: `flex`}}>
      <Image src={darkBlueLogo} alt="dark-blue-logo" fluid style={{ margin: `16px 0px`, height: `32px`}}/>
      <div style={{position: `fixed`, right: `120px`, top: '0px' }}>
        <ul style={{ width:`400px`, margin: `16px 0px`, listStyle: `none`, display: `flex`, justifyContent: `space-evenly`}}>
          <li>home</li>
          <li>serviços</li>
          <li>contato</li>
          <li>equipe</li>
        </ul>
      </div>
    </Container>
  </header>
)

export default Header