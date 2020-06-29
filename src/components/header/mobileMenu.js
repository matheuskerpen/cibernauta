import React, { useState } from 'react'
import styled from 'styled-components'

import { AnchorLink } from "gatsby-plugin-anchor-links";

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
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    cursor: pointer;
    z-index: 5;

    div {
        width: 16px;
        height: 2px;
        border-radius: 5px;
        transform-origin: 1px;
        background: #fff;
        transition: opacity 300ms, tranform: rotate 300ms;

        :first-child {
            transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
        }

        :nth-child(2) {
            opacity: ${({nav}) => nav ? '0' : '1'}
        }

        :nth-child(3) {
            transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}
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
    height: 200px;
    width: 100%;
    position: absolute;
    top: 64;
    right: 0;
    transition: transform 300ms;
    transform: ${({nav}) => nav ? "translateX(0)" : "translateX(-100%)"};

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
            <MenuIcon className="d-md-none" nav={nav} onClick={() => showNav(!nav)}>
                <div></div>
                <div></div>
                <div></div>
            </MenuIcon>
            <MenuList nav={nav}>
                <ul>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#home" title="home"/></li>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#services" title="serviços"/></li>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#contact" title="contato"/></li>
                    <li onClick={() => showNav(!nav)}><StyledAnchor to="/#team" title="equipe"/></li>
                </ul>
            </MenuList>
        </div>
    )
}

export default MobileMenu