import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <section class="home flex align-end justify-end">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id="container"></div>

    <div class="text-container flex vertical align-end">
      <div class="hello-there flex" id="hello-there">
        <h2>H</h2><h2>e</h2><h2>l</h2><h2>l</h2><h2>o</h2><h2>&nbsp;</h2><h2>t</h2><h2>h</h2><h2>e</h2><h2>r</h2><h2>e</h2><h2>!</h2>
      </div>
      <p>I'm Mario Parra, Chilean graphic designer, illustrator and front-end developer based in Berlin.
My work is mainly focused on finding the most efficient and elegant solution possible, driving the creative process through strong concepts, considering carefully every detail.</p>
      <p>Welcome to my place!</p>
    </div>
    <div class="social-container flex-center">
      <a class="social-link flex-center" href="https://www.behance.net/operacionquimera" target="_blank">Behance</a>
      <a class="social-link flex-center" href="https://www.instagram.com/marioparramario/" target="_blank">Instagram</a>
      <a class="social-link flex-center" href="https://dribbble.com/oqgraphic" target="_blank">Dribbble</a>
    </div>

  </section>
)

export default IndexPage
