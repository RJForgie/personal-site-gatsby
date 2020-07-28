import React from "react"
import styled from '@emotion/styled'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  height: 78vh;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist</p>
    </Content>
  </Layout>
)

export default NotFoundPage
