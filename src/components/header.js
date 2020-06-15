import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
