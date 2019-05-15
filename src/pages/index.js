import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hey!</h1>
    <p>I am in the middle of updating my site! </p>
    <p>
      Find me on LinkedIn{" "}
      <a
        href="https://www.linkedin.com/in/gwennan-dafis/"
        rel="noopener noreferrer"
      >
        Gwennan Dafis
      </a>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
