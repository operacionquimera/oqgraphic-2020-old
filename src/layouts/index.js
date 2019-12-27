/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { setConfig } from 'react-hot-loader';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import "./normalize.scss"
import "./layout.scss"
import "./font.scss"
import "./variables.scss"
import "./style.scss"
import "./illustration.scss"
import Transition from '../components/transition'

setConfig({ pureSFC: true });

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Transition location = {location}>
          {children}
        </Transition>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}




export default Layout
