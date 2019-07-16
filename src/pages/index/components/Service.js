import React from "react";
import posed from "react-pose";

import PropTypes from "prop-types";
import serviceStyles from "./Service.module.scss";
import ServiceDesc from "./ServiceDesc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import designServiceImage from "src/images/design-service.png";
import settingServiceImage from "src/images/setting-service.png";
import modernServiceImage from "src/images/modern-service.png";
import landingServiceImage from "src/images/landing-service.png";

const AnimatedService = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.05,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const Service = ({ title, subTitle, items, isPrimary, sectionOrder }) => {
  const renderItems = () => {
    return items.map(item => <ServiceDesc content={item.content} />);
  };

  const renderMainIcon = () => {
    switch (sectionOrder) {
      case 1:
        return (
          <img
            className={serviceStyles.mainIcon}
            src={designServiceImage}
            alt={title}
          />
        );
      case 2:
        return (
          <img
            className={serviceStyles.mainIcon}
            src={landingServiceImage}
            alt={title}
          />
        );
      case 4:
        return (
          <img
            className={serviceStyles.mainIcon}
            src={settingServiceImage}
            alt={title}
          />
        );
      default:
        return (
          <img
            className={serviceStyles.mainIcon}
            src={modernServiceImage}
            alt={title}
          />
        );
    }
  };
  return (
    <AnimatedService
      class={`card ${serviceStyles.card} ${isPrimary &&
        serviceStyles.cardPrimary}`}
    >
      <div className={serviceStyles.mainIconWrapper}>{renderMainIcon()}</div>
      {isPrimary && (
        <div className={serviceStyles.iconWrapper}>
          <FontAwesomeIcon icon={faTrophy} className={serviceStyles.icon} />
        </div>
      )}
      <div class="card-content">
        <div className={serviceStyles.titleWrapper}>
          <h3
            className={`${serviceStyles.title} ${isPrimary &&
              serviceStyles.titlePrimary} ${serviceStyles.titleMain}`}
          >
            {title}
          </h3>
          <h3
            className={`${serviceStyles.title} ${isPrimary &&
              serviceStyles.titlePrimary} ${serviceStyles.titleSub}`}
          >
            {subTitle}
          </h3>
        </div>
        <div class="content">{renderItems()}</div>
      </div>
    </AnimatedService>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

Service.defaultProps = {
  title: "Product Title Sample",
  subTitle: "Product description sample",
  isPrimary: false,
  items: [
    { content: "Item Content" },
    { content: "Item Content" },
    { content: "Item Content" },
    { content: "Item Content" }
  ]
};
export default Service;
