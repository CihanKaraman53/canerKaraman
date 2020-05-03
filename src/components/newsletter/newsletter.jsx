import React from "react";
import styled from "styled-components";
import Input from "../input";

const NewsletterWidget = styled.div`
  background-color: ${(props) => props.theme.darkBlack};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsletterTitle = styled.h3`
  color: ${(props) => props.theme.white};
  margin-bottom: 25px;
  font-size: 22px;
`

const Newsletter = () => {

  return(
    <NewsletterWidget>
      <NewsletterTitle>Subscribe and join thousands like you!</NewsletterTitle>
      <Input buttonTitle='Subscribe'/>
    </NewsletterWidget>
  )
}

export default Newsletter;