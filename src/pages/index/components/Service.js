import React from "react";
import PropTypes from "prop-types";
import serviceStyles from "./Service.module.scss";
import ServiceDesc from "./ServiceDesc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Service = ({ items, isPrimary }) => {
  const renderItems = () => {
    return items.map(item => <ServiceDesc content={item} />);
  };
  return (
    <div
      class={`card ${serviceStyles.card} ${isPrimary &&
        serviceStyles.cardPrimary}`}
    >
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
            Title
          </h3>
          <h3
            className={`${serviceStyles.title} ${isPrimary &&
              serviceStyles.titlePrimary} ${serviceStyles.titleSub}`}
          >
            Sub Title
          </h3>
        </div>
        <div class="content">{renderItems()}</div>
      </div>
    </div>
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
    "Item Content",
    "Item Content",
    "Item Content",
    "Item Content",
    "Item Content"
  ]
};
export default Service;
