import React from "react";
import styled from "styled-components";

import Button from "../button";

const InputWrapper = styled.div`
  display: flex;
`

const StyledInput = styled.input`
  height: 58px;
  outline: none;
  border: 0;
  width: 275px;
  font-size: 18px;
  padding-left: 20px;
  padding-right: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const StyledButton = styled(Button)`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const Input = (props) => {
  return(
    <InputWrapper {...props}>
      <StyledInput placeholder={props.placeholder}/>
      <StyledButton isInputButton title={props.buttonTitle} />
    </InputWrapper>
  )
}

export default Input;