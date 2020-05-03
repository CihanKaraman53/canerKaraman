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
