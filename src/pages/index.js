import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Circle, Item } from "./style"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Circle className="circle" items={6}>
      <div className="center" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map(n => (
        <Item position={n}>
          <div className="content" />
        </Item>
      ))}
    </Circle>
  </Layout>
)

export default IndexPage
