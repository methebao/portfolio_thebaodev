import React from "react";
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
  return (
    <PoseGroup>
      {isVisible && [
        <AnimatedServiceSection
          key="services"
          className={`columns ${serviceSectionStyles.services}`}
        >
          <div className="column">
            <Service />
          </div>
          <div className="column">
            <Service />
          </div>
          <div className="column">
            <Service isPrimary={true} />
          </div>
          <div className="column">
            <Service />
          </div>
        </AnimatedServiceSection>
      ]}
    </PoseGroup>
  );
};

export default ServiceSection;
