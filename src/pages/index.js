import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
 
    <Link to="/blog/">Go to my blog</Link> <br />
    <Link to="/about/">Go to my about page</Link> <br />
    <Link to="/contact/">Go to my contact page</Link> <br />
    <Link to="/404/">404</Link> <br/>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
