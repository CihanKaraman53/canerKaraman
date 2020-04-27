/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";
import { lightTheme } from "../common/theme/theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url('${RobotoLight}') format('opentype');
    font-weight: 300;
  }
  @font-face {
    font-family: Roboto;
    src: url('${RobotoRegular}') format('opentype');
    font-weight: 400;
  }
  @font-face {
    font-family: Roboto;
    src: url('${RobotoMedium}') format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: Roboto;
    src: url('${RobotoBold}') format('opentype');
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin:0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
          </footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
