import React from 'react'

import LogoDark from "../image/image"

const Header = () => (
  <header
    style={{
      background: `#1A151F`,
      boxShadow: `0px 1px 2px #18131D`,
      position: "sticky"
    }}
  >
    <div
      style={{
        margin: `0 auto`,

        height: `80px`,
        padding: `0 120px`,
      }}
    >
    <div style={{ maxWidth: `153px`, padding: `20px 0px`, display: `center` }}>
      <LogoDark />
    </div>
    </div>
  </header>
)

export default Header
