import React from "react"
import styled from "styled-components";
import Slider from "react-slick";
import { StaticQuery, graphql, Link } from "gatsby";
import "slick-carousel/slick/slick.css"; 

import Layout from "../templates/layout"
import SEO from "../templates/seo"
import Container from "../components/container";
import Input from "../components/input";
import Button from "../components/button";
import Newsletter from "../components/newsletter/newsletter";

const PromotionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SliderWrapper = styled.div`
  padding-top: 113px;
  position: relative;
  min-height: calc(100vh - 99px);
`

const TagWrapper = styled.div`
  margin-bottom: 20px;
`

const Tag = styled.span`
  font-weight: 300;
  font-size: 18px;
  font-style: italic;
  letter-spacing: 2px;
  margin-right: 7px;
`

const PromotionTitle = styled.h2`
  font-size: 50px;
  font-weight: 800;
`

const PromotionDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2;
  line-height: 1.3;
`

const PromotionBody = styled.div`
  flex: 2;
`

const PromotionImage = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
`

const Blog = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #000;
  padding: 40px 0;

  &:first-child {
    border-top: 1px solid #000;
  }
`

const BlogContent = styled.div`
  flex: 2;
`

const BlogImage = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
`

const SearchInput = styled(Input)`
  position: absolute;
  bottom: 150px;
  left: 0px;
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.primaryColor};
  }
`

const LoadButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0; 
`

const _renderBlogItem = (mdx) => {
  return (
    <Blog>
          <BlogContent>
            <TagWrapper>
              <Tag>#React</Tag>
              <Tag>#Javascript</Tag>
            </TagWrapper>
            <TagWrapper>
              <PromotionTitle>{mdx.node.frontmatter.title}</PromotionTitle>
            </TagWrapper>
            <TagWrapper>
              <PromotionDescription>{mdx.node.frontmatter.title}</PromotionDescription>
              <StyledLink to={mdx.node.frontmatter.path}>Read More</StyledLink>
            </TagWrapper>
          </BlogContent>
          <BlogImage>
            <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
          </BlogImage>
        </Blog>
        
  )
}

const _renderPromotionItem = (mdx) => {
  return(
    <>
      <PromotionWrapper>
        <PromotionBody>
          <TagWrapper>
            <Tag>#React</Tag>
            <Tag>#Javascript</Tag>
          </TagWrapper>
          <TagWrapper>
            <PromotionTitle>{mdx.node.frontmatter.title}</PromotionTitle>
          </TagWrapper>
          <TagWrapper>
            <PromotionDescription>{mdx.node.frontmatter.description}</PromotionDescription>
            <StyledLink to={mdx.node.frontmatter.path}>Read More</StyledLink>
          </TagWrapper>
        </PromotionBody>
        <PromotionImage>
          <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
        </PromotionImage>
      </PromotionWrapper>
    </>
  )
}

const IndexPage = ({data}) => {
  const { allMdx } = data;
  console.log(allMdx);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <SliderWrapper>
          <Slider autoplay arrows={false} autoplaySpeed={3500} speed={700}>
            {allMdx.edges.map((mdx) => (
              _renderPromotionItem(mdx)
            ))}
          </Slider>
          <SearchInput placeholder='Search Blog' buttonTitle='Search'/>
        </SliderWrapper>
      </Container>
      <Container>
        {allMdx.edges.map((mdx) => (
          _renderBlogItem(mdx)
        ))}
        <LoadButtonWrapper>
          <Button title='Load more' />
        </LoadButtonWrapper>
      </Container>
      <Newsletter>
        
      </Newsletter>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            description
          }
          id
        }
      }
    }
  }
`

export default IndexPage
