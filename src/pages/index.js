import React from "react"
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "gatsby";
import "slick-carousel/slick/slick.css"; 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";
import Input from "../components/input";
import Button from "../components/button";

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <SliderWrapper>
        <Slider arrows={false} autoplay autoplaySpeed={3500} speed={700}>
          <>
          <PromotionWrapper>
            <PromotionBody>
              <TagWrapper>
                <Tag>#React</Tag>
                <Tag>#Javascript</Tag>
              </TagWrapper>
              <TagWrapper>
                <PromotionTitle>Ilk React Blog'um</PromotionTitle>
              </TagWrapper>
              <TagWrapper>
                <PromotionDescription>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas non ante posuere,
                  aliquet nibh gravida, vulputate quam. Morbi et aliquet metus.
                  Nunc dapibus cursus lorem, sit amet laoreet eros varius eget.
                </PromotionDescription>
              </TagWrapper>
            </PromotionBody>
            <PromotionImage>
              <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
            </PromotionImage>
          </PromotionWrapper>
          </>
          <>
          <PromotionWrapper>
            <PromotionBody>
              <TagWrapper>
                <Tag>#React</Tag>
                <Tag>#Javascript</Tag>
              </TagWrapper>
              <TagWrapper>
                <PromotionTitle>Ilk React Blog'um</PromotionTitle>
              </TagWrapper>
              <TagWrapper>
                <PromotionDescription>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas non ante posuere,
                  aliquet nibh gravida, vulputate quam. Morbi et aliquet metus.
                  Nunc dapibus cursus lorem, sit amet laoreet eros varius eget.
                </PromotionDescription>
              </TagWrapper>
            </PromotionBody>
            <PromotionImage>
              <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
            </PromotionImage>
          </PromotionWrapper>
          </>
          <>
          <PromotionWrapper>
            <PromotionBody>
              <TagWrapper>
                <Tag>#React</Tag>
                <Tag>#Javascript</Tag>
              </TagWrapper>
              <TagWrapper>
                <PromotionTitle>Ilk React Blog'um</PromotionTitle>
              </TagWrapper>
              <TagWrapper>
                <PromotionDescription>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas non ante posuere,
                  aliquet nibh gravida, vulputate quam. Morbi et aliquet metus.
                  Nunc dapibus cursus lorem, sit amet laoreet eros varius eget.
                </PromotionDescription>
              </TagWrapper>
            </PromotionBody>
            <PromotionImage>
              <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
            </PromotionImage>
          </PromotionWrapper>
          </>
        </Slider>
        <SearchInput placeholder='Search Blog' buttonTitle='Search'/>
      </SliderWrapper>
    </Container>
    <Container>
      <Blog>
        <BlogContent>
          <TagWrapper>
            <Tag>#React</Tag>
            <Tag>#Javascript</Tag>
          </TagWrapper>
          <TagWrapper>
            <PromotionTitle>Ilk React Blog'um</PromotionTitle>
          </TagWrapper>
          <TagWrapper>
            <PromotionDescription>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas non ante posuere,
              aliquet nibh gravida, vulputate quam. Morbi et aliquet metus.
              Nunc dapibus cursus lorem, sit amet laoreet eros varius eget.
            </PromotionDescription>
            <StyledLink>Read More</StyledLink>
          </TagWrapper>
        </BlogContent>
        <BlogImage>
          <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
        </BlogImage>
      </Blog>
      <Blog>
        <BlogContent>
          <TagWrapper>
            <Tag>#React</Tag>
            <Tag>#Javascript</Tag>
          </TagWrapper>
          <TagWrapper>
            <PromotionTitle>Ilk React Blog'um</PromotionTitle>
          </TagWrapper>
          <TagWrapper>
            <PromotionDescription>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas non ante posuere,
              aliquet nibh gravida, vulputate quam. Morbi et aliquet metus.
              Nunc dapibus cursus lorem, sit amet laoreet eros varius eget.
            </PromotionDescription>
            <StyledLink>Read More</StyledLink>
          </TagWrapper>
        </BlogContent>
        <BlogImage>
          <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
        </BlogImage>
      </Blog>
      <Blog>
        <BlogContent>
          <TagWrapper>
            <Tag>#React</Tag>
            <Tag>#Javascript</Tag>
          </TagWrapper>
          <TagWrapper>
            <PromotionTitle>Ilk React Blog'um</PromotionTitle>
          </TagWrapper>
          <TagWrapper>
            <PromotionDescription>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas non ante posuere,
              aliquet nibh gravida, vulputate quam. Morbi et aliquet metus.
              Nunc dapibus cursus lorem, sit amet laoreet eros varius eget.
            </PromotionDescription>
            <StyledLink>Read More</StyledLink>
          </TagWrapper>
        </BlogContent>
        <BlogImage>
          <img alt='javascript' src={'https://i.picsum.photos/id/356/475/305.jpg'} />
        </BlogImage>
      </Blog>
      <LoadButtonWrapper>
        <Button title='Load more' />
      </LoadButtonWrapper>
    </Container>
  </Layout>
)

export default IndexPage
