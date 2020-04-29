import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 0px;
  width: 155px;
  height: 58px;
  border-radius: ${(props) => props.isInputButton ? '0' : '5px'};
  font-size: 16px;
  outline: none;
  transition: all .4s ease-in-out;
  background-size: 200% 100%;

  &:hover{
    background-position: 100% 0;
    cursor: pointer;
  }

  ${(props) => {
    let buttonStyle;
    buttonStyle = {
      'background-color': 'rgb(54,190,88)',
      'background-image': 'linear-gradient(90deg, rgba(54,190,88,1) 0%, rgba(171,255,99,1) 100%)',
      color: props.theme.white,
    }
    return buttonStyle;
  }}
`

const Button = (props) => {
  
  return (
    <StyledButton {...props} isInputButton={props.isInputButton}>{props.title}</StyledButton>
  )
}

export default Button;