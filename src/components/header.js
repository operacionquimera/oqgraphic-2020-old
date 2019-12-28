import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo";

const Header = ({ siteTitle }) => (

  <nav className="navbar flex justify-stretch open">
    <div className="nav-wrapper flex align-center justify-between">
      <Link to="/">
        <Logo></Logo>
      </Link>


      <div className="link-container flex justify-end">
        <Link to="/illustration/">Illustration</Link>
        <Link to="/digital/">Digital</Link>
        <Link to="/graphic/">Graphic</Link>
        <Link to="/about/">About</Link>
      </div>
    </div>
  </nav>

)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
