import React from "react"
import { Link } from "gatsby"

const BlogPage = () => (
  <div>
    <h2>Hi you've reached my blog page</h2>
    <p>I write about Front-end technologies </p> 
    <p>Stay tuned and subscribe for awesome contents</p>
    <Link to="/"> Go to the homepage</Link>
  </div>
)

export default BlogPage
