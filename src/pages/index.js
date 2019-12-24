import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi motherfuckers!</h1>
    <p>Welcome to my nasty place</p>
    <p>Now go build something great.</p>

    <Link to="/blog/">Go to my blog</Link> <br />
    <Link to="/about/">About</Link> <br />
    <Link to="/contact/">Contact</Link> <br />
    <Link to="/404/">404</Link> <br/>
    <Link to="/page-2/">Page two</Link>
  </div>
)

export default IndexPage
