import React from "react";
import styled from "styled-components";

import Container from "../container";

const StyledFooter = styled.footer`
  padding: 40px 0;
  border-top: 1px solid ${(props) => props.theme.black};
`;

const ContactTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 15px;
`

const ContactLabel = styled.p`
  font-size: 14px;
  margin-bottom: 7px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <ContactTitle>Contact</ContactTitle>
        <ContactLabel>Mail: <a href="mailto: karamancaner1995@gmail.com">karamancaner1995@gmail.com</a></ContactLabel>
        <ContactLabel><a target='blank' href="https://github.com/caner-karaman">Github adresim</a></ContactLabel>
        <ContactLabel><a target='blank' href="https://www.linkedin.com/in/caner-k-453a4a122/">Linkedin adresim</a></ContactLabel>
      </Container>
    </StyledFooter>
  )
}

export default Footer;