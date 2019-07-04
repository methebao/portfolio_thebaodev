import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/Layout"
import SEO from "../layout/SEO"
import indexStyle from "./index.module.scss"
import SimpleSlider from "../components/Slider"
import Product from "./index/components/Product"

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
      <section>
        <div className="container">
          <div className={`box ${indexStyle.customBox}`}>
            <div className={`has-text-centered ${indexStyle.sectionTitle}`}>
              <h2 className="heading-secondary">Porfolio</h2>
              <small>Selected Works since 2018</small>
              <SimpleSlider>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </SimpleSlider>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
