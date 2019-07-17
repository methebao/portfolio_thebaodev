import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Layout from "../layout/Layout";
import SEO from "../layout/SEO";
import indexStyles from "./index.module.scss";
import SimpleSlider from "../components/Slider";
import Product from "./index/components/Product";
import Button, { ButtonTypes } from "../components/Button";
import FeaturedBox, { FeaturedBoxTypes } from "./index/components/FeaturedBox";
import CTABox from "./index/components/CTABox";
import MoreBox from "./index/components/MoreBox";
import ServiceSection from "./index/components/ServiceSection";
import ScrollAnimation from "react-animate-on-scroll";

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
            url
          }
        }
      }
    }
  `);

  const products = data.allContentfulProduct.edges.map(item => {
    return item.node;
  });
  const renderProducts = () => {
    return products.map(product => (
      <Product
        key={product.id}
        title={product.title}
        description={product.description}
        content={product.content.content}
        imageData={product.thumbnail.sizes}
        tags={product.tags}
        url={product.url}
      />
    ));
  };

  const [isServiceEnable, setIsServiceEnable] = useState(false);

  return (
    <Layout>
      <SEO title="Profesional Frontend Developer" />
      <section className="section no-padding">
        <div className="container">
          <div className={`box ${indexStyles.customBox}`}>
            <div className={`has-text-centered ${indexStyles.sectionTitle}`}>
              <h2 className="heading-secondary">Porfolio</h2>
              <small>Selected Works since 2018</small>
              <ScrollAnimation
                animateIn="shake"
                duration={1.4}
                animateOnce={true}
              >
                <SimpleSlider>{renderProducts()}</SimpleSlider>
              </ScrollAnimation>

              <div className={indexStyles.cta}>
                <h3 className="has-text-weight-semibold is-uppercase">
                  Want to build an app?
                </h3>
                <div className={`${indexStyles.buttonGroup}`}>
                  <AnchorLink href="#cta-section">
                    <Button state={ButtonTypes.PRIMARY}> Contact me</Button>
                  </AnchorLink>
                  <a href="/contact">
                    <Button state={ButtonTypes.INFO}> View Resume</Button>
                  </a>
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
              <AnchorLink href="#cta-section">
                <FeaturedBox
                  state={FeaturedBoxTypes.SERVICE}
                  onBoxPressed={() => {
                    setIsServiceEnable(!isServiceEnable);
                  }}
                >
                  <h2 className="heading-secondary heading-secondary--white heading-secondary--strong">
                    Services
                  </h2>
                  <br />
                  <p className="description description--white">
                    Let's make some awesome things !
                  </p>
                </FeaturedBox>
              </AnchorLink>
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

      <section
        className={`section is-primary ${indexStyles.servicesBackground}`}
      >
        <div className="has-text-centered">
          <h2 className={`heading-secondary has-text-white`}>
            Take a look with awesome services
            <span className={indexStyles.subTitle}>
              The great point is that I can be flexible according to your
              requirements and schedule
            </span>
          </h2>
        </div>

        <MoreBox
          isVisible={isServiceEnable}
          onPressed={() => setIsServiceEnable(!isServiceEnable)}
        />

        <div className="container">
          <ServiceSection isVisible={isServiceEnable} />
        </div>
      </section>
      <section
        id="cta-section"
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
