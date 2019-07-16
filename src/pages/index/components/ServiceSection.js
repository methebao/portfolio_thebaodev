import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import posed, { PoseGroup } from "react-pose";
import Service from "./Service";
import serviceSectionStyles from "./ServiceSection.module.scss";

const AnimatedServiceSection = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 200,
    transition: {
      y: { type: "spring", stiffness: 500, damping: 20 },
      default: { duration: 200 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

const ServiceSection = ({ isVisible }) => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allContentfulServices {
        edges {
          node {
            id
            title
            isPrimary
            description
            content {
              content
            }
            sectionOrder
          }
        }
      }
    }
  `);
  const services = data.allContentfulServices.edges.map(item => {
    return item.node;
  });
  const renderColumns = () => {
    return services.map(
      ({ id, title, isPrimary, description, content, sectionOrder }) => {
        return (
          <div
            style={{ order: `${sectionOrder}` }}
            className="column is-half-tablet is-flex"
          >
            <Service
              key={id}
              title={title}
              subTitle={description}
              items={content}
              isPrimary={isPrimary}
              sectionOrder={sectionOrder}
            />
          </div>
        );
      }
    );
  };
  return (
    <PoseGroup>
      {isVisible && [
        <AnimatedServiceSection
          key="services"
          className={`columns is-multiline ${serviceSectionStyles.services}`}
        >
          {renderColumns()}
        </AnimatedServiceSection>
      ]}
    </PoseGroup>
  );
};

export default ServiceSection;
