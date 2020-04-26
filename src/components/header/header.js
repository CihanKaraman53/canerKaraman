import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0 30px;
`;

const HeaderWrapper = styled.div`
  padding: 20px 0 20px 30px;
  border-bottom: 1px solid #E2E0E0;
  display: flex;
  justify-content: space-between;
`

const LogoWrapper = styled.div`
`

const Logo = styled.h1`
  margin: 0;
`

const MenuWrapper = styled.div`

`

const ButtonWrapper = styled.div`

`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderWrapper>
      <LogoWrapper>
        <Logo>{siteTitle}</Logo>
      </LogoWrapper>
      <MenuWrapper>

      </MenuWrapper>
      <ButtonWrapper>
  
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
