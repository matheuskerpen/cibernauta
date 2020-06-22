import React, { useState } from 'react'
import styled from 'styled-components'

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { DropdownButton, Nav } from "react-bootstrap"

const StyledAnchor = styled(AnchorLink)`
  color: #fff;
  font-size: 16px;
  font-family: 'Ubuntu';

  :hover {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
`

const MenuIcon = styled.button`
    position: fixed;
    top: 24px;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 16px;
    height: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;

    div {
        width: 16px;
        height: 2px;
        border-radius: 5px;
        transform-origin: 1px;
        background: #fff;

        :first-child {
            transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
        }
    }
`
const MenuList = styled.nav`
    display: flex;
    flex-direction: column;
    top: 64px;
    text-align: center;
    padding: 24px;
    background: rgba(40, 35, 45, 0.95);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 64;
    right: 0;
    transition: transform 300ms;
    transform: ${({nav}) => nav ? "translateX(0)" : "translateX(100%)"};

    ul {
        list-style: none;
        color: #fff;
        padding: 0px 20px;
    }
`



const MobileMenu = () => {
    const [nav, showNav] = useState(false)

    return (
        <div>
            <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                <div></div>
                <div></div>
                <div></div>
            </MenuIcon>
            <MenuList nav={nav}>
                <ul>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#home" title="home" stripHash/></li>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#services" title="serviços" stripHash/></li>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#contact" title="contato" stripHash/></li>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#team" title="equipe" stripHash/></li>
                </ul>
            </MenuList>
        </div>
    )
}

export default MobileMenu