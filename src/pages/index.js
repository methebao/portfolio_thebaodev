import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layout/Layout";
import SEO from "../layout/SEO";
import indexStyles from "./index.module.scss";
import SimpleSlider from "../components/Slider";
import Product from "./index/components/Product";
import Button, { ButtonTypes } from "../components/Button";
import FeaturedBox, { FeaturedBoxTypes } from "./index/components/FeaturedBox";
import Service from "./index/components/Service";
import CTABox from "./index/components/CTABox";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query ProductQuery {
      allContentfulProduct {
        edges {
          node {
            id
            title
            content {
              content
            }
            description
            thumbnail {
              sizes(maxWidth: 1280) {
                ...GatsbyContentfulSizes
              }
            }
            tags {
              content
              state
              name
            }
          }
        }
      }
    }
  `);

  const products = data.allContentfulProduct.edges.map(item => {
    return item.node;
  });
  debugger;
  const renderProducts = () => {
    return products.map(product => (
      <Product
        key={product.id}
        title={product.title}
        description={product.description}
        content={product.content.content}
        imageData={product.thumbnail.sizes}
        tags={product.tags}
      />
    ));
  };

  return (
    <Layout>
      <SEO title="Home" />
      <section className="section">
        <div className="container">
          <div className={`box ${indexStyles.customBox}`}>
            <div className={`has-text-centered ${indexStyles.sectionTitle}`}>
              <h2 className="heading-secondary">Porfolio</h2>
              <small>Selected Works since 2018</small>
              <SimpleSlider>{renderProducts()}</SimpleSlider>
              <div className={indexStyles.cta}>
                <h3 className="has-text-weight-semibold is-uppercase">
                  Want to build an app?
                </h3>
                <div className={`${indexStyles.buttonGroup}`}>
                  <Button state={ButtonTypes.PRIMARY}> Contact me</Button>
                  <Button state={ButtonTypes.INFO}> View Resume</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`section ${indexStyles.more}`}>
        <div className="container has-text-centered">
          <h3 className="heading-tertiary">More from thebaoDEV</h3>
          <div className={`columns ${indexStyles.customColumns}`}>
            <div className="column">
              <FeaturedBox state={FeaturedBoxTypes.SERVICE}>
                <h2 className="heading-secondary heading-secondary--white heading-secondary--strong">
                  Services
                </h2>
                <br />
                <p className="description description--white">
                  Let's make some awesome things !
                </p>
              </FeaturedBox>
            </div>
            <div className="column">
              <FeaturedBox state={FeaturedBoxTypes.BLOG}>
                <h2 className="heading-secondary heading-secondary--white heading-secondary--strong">
                  A Dev Life
                </h2>
                <br />
                <p className="description description--white">
                  Programming blog. Contain programming language. Not safe for
                  kids.
                </p>
              </FeaturedBox>
            </div>
          </div>
        </div>
      </section>
      <section className={`section is-primary ${indexStyles.serviceSection}`}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <Service />
            </div>
            <div className="column">
              <Service />
            </div>
            <div className="column">
              <Service />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`section is-primary has-text-centered ${indexStyles.callToAction}`}
      >
        <div className="container is-narrow">
          <CTABox />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
