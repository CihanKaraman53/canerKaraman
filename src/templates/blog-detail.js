import React from "react"
import { Link } from "gatsby";

import Layout from "./layout"
import SEO from "./seo"
import { BlogTitleWrapper, BlogTitleOpacity, BlogTitle, Body } from "./blog-detail.styled";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from "../components/container";

const shortcodes = { Link } // Provide common components here

const Blog = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title="Blog Detail" />
      <BlogTitleWrapper>
        <BlogTitleOpacity>
          <BlogTitle>Bu ilk React projem benim</BlogTitle>
        </BlogTitleOpacity>
        <MDXProvider components={shortcodes}>
        </MDXProvider>
      </BlogTitleWrapper>
      <Body>
        <Container>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
      </Body>
    </Layout>
  )
}


export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default Blog
