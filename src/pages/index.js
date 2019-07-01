import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/Layout"
import SEO from "../layout/SEO"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePage {
      contentfulBlog {
        title
        path
        content {
          content
        }
      }
    }
  `)
  const {
    contentfulBlog: {
      title,
      path,
      content: { content },
    },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <p>{content && "Nothing"}</p>
      <p>{path}</p>
    </Layout>
  )
}

export default IndexPage
