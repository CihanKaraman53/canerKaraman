import { Link } from "gatsby";
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

import Button from "../button";

const StyledHeader = styled.header`
  padding: 0 30px;
`;

const HeaderWrapper = styled.div`
  padding: 20px 0 20px 30px;
  border-bottom: 1px solid #E2E0E0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoWrapper = styled.div`
`

const Logo = styled.h1`
  margin: 0;
  font-family: Roboto;
  font-weight: 700;
  font-size: 38px;
  color: ${props => props.theme.softBlack};
`

const MenuWrapper = styled.div`
`

const ButtonWrapper = styled.div`
`

const MenuLink = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  padding: 0 5px;
  font-size: 24px;
  color: ${props => props.theme.softBlack};

  ${(props) => {
  }}
`

const SubscribeButton = styled.button`
  
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderWrapper>
      <LogoWrapper>
        <Logo>{siteTitle}</Logo>
      </LogoWrapper>
      <MenuWrapper>
        <MenuLink active>React Native</MenuLink>
        <MenuLink>React</MenuLink>
        <MenuLink>Javascript</MenuLink>
        <MenuLink>Ios</MenuLink>
        <MenuLink>Android</MenuLink>
      </MenuWrapper>
      <ButtonWrapper>
        <Button title='Subscribe' />
      </ButtonWrapper>
    </HeaderWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
