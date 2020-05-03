/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {useStaticQuery} from "gatsby"
import PropTypes from "prop-types"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "../components/header"
import Footer from "../components/footer/footer"
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
    font-family: Roboto;
  }

  body {
    background-color: #EDD1B0;
  }

  body, h1, h2, h3, h4, h5, h6, p {
    margin:0;
  }
`

const StyledMain = styled.main`
  width: 100%;
  min-height: calc(100vh - 99px);
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  console.log('DATA', data);

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
        <Header/>
        <MainWrapper>
          <StyledMain>{children}</StyledMain>
          <Footer/>
        </MainWrapper>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
