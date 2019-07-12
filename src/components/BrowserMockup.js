import React from "react";
import PropTypes from "prop-types";
import browserMockupStyles from "./BrowserMockup.module.scss";
import defaultImage from "src/images/default-Image.svg";

const DefaultChildren = () => <img src={defaultImage} alt="TheBaoDev" />;

const BrowserMockupBase = ({ children }) => {
  return (
    <div
      className={`${browserMockupStyles.browserMockup} ${browserMockupStyles.withUrl}`}
    >
      {children}
    </div>
  );
};

BrowserMockupBase.propTypes = {
  children: PropTypes.node.isRequired
};

BrowserMockupBase.defaultProps = {
  children: <DefaultChildren />
};

export default BrowserMockupBase;
