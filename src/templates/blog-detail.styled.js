import styled from "styled-components";

export const BlogTitleWrapper = styled.div`
  background-image: url("https://i.picsum.photos/id/356/1440/575.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 575px;
  position: relative;
`

export const BlogTitleOpacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.softBlack};
  z-index: 1000;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 35px;
  text-align: center;
`

export const BlogTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  font-size: 40px;
`

export const Body = styled.div`
  padding-top: 40px;

  h1 {
    font-size: 44px;
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }
  h2 {
    font-size: 40px;
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }
  h3 {
    font-size: 36px;
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }
  h4 {
    font-size: 32px;
    color: ${(props) => props.theme.black};
    font-weight: 700;
  }
  p {
    font-size: 18px;
    line-heighr: 2em;
    letter-spacing: 1.3px;
  }
`