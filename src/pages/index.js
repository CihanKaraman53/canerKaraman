import React from "react"
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container";

const PromotionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SliderWrapper = styled.div`
  padding-top: 113px;
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
      </SliderWrapper>
    </Container>
  </Layout>
)

export default IndexPage
