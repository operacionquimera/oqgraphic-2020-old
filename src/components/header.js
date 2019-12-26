import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo";

const Header = ({ siteTitle }) => (
  // <nav>
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </nav>



  <nav class="navbar flex justify-stretch open">
    <div class="nav-wrapper flex align-center justify-between">
      <Link to="/">
        <Logo></Logo>
      </Link>


      <div class="link-container flex justify-end">
        <Link to="/illustration/" class="nav-link">Illustration</Link>
        <Link to="/digital/" class="nav-link">Digital</Link>
        <Link to="/graphic/" class="nav-link">Graphic</Link>
        <Link to="/about/" class="nav-link">About</Link>

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
