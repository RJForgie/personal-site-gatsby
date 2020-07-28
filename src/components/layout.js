/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"
import "../fonts/fonts.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const FooterLink = styled.a`
  margin-left: 5px;
  color: hsl(203, 87%, 34%);
`

const FooterText = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Layout = ({ children }) => (
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
        <Content>
          <main>{children}</main>
          <Footer>
            <span>
            © {new Date().getFullYear()}, Built with
            </span>
            <FooterLink href="https://www.gatsbyjs.org">Gatsby</FooterLink>
            <FooterText>
              and using
            </FooterText>
            <FooterLink href="https://www.brailleinstitute.org/freefont">
              Atkinson Hyperlegible
            </FooterLink>
            <FooterText>
              font
            </FooterText>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
