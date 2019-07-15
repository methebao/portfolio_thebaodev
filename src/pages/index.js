import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layout/Layout";
import SEO from "../layout/SEO";
import indexStyle from "./index.module.scss";
import SimpleSlider from "../components/Slider";
import Product from "./index/components/Product";
import Button, { ButtonTypes } from "../components/Button";
import FeaturedBox, { FeaturedBoxTypes } from "./index/components/FeaturedBox";
import ServiceSection from "./index/components/ServiceSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
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
  `);
  const {
    contentfulBlog: {
      title,
      path,
      content: { content }
    }
  } = data;

  const [isServiceEnable, setIsServiceEnable] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <section className="section">
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
              <div className={indexStyle.cta}>
                <h3 className="has-text-weight-semibold is-uppercase">
                  Want to build an app?
                </h3>
                <div className={`${indexStyle.buttonGroup}`}>
                  <Button state={ButtonTypes.PRIMARY}> Contact me</Button>
                  <Button state={ButtonTypes.INFO}> View Resume</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <h3 className="heading-tertiary">More from thebaoDEV</h3>
          <div className={`columns ${indexStyle.customColumns}`}>
            <div className="column">
              <FeaturedBox
                state={FeaturedBoxTypes.SERVICE}
                onBoxPressed={() => {
                  debugger;
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
        className={`section is-primary ${indexStyle.servicesBackground}`}
        onClick={() => {
          setIsServiceEnable(!isServiceEnable);
        }}
      >
        {!isServiceEnable && (
          <div className={indexStyle.servicesIconWrapper}>
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              className={indexStyle.servicesMoreIcon}
            />
          </div>
        )}

        <div className="container">
          <ServiceSection isVisible={isServiceEnable} />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
