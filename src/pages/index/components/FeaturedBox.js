import React from "react";
import PropTypes from "prop-types";
import featuredBoxStyles from "./FeaturedBox.module.scss";
import posed from "react-pose";

const DefaultChildren = () => <h2 className="title is-5">Test</h2>;

const FeaturedBoxTypes = {
  SERVICE: "service",
  BLOG: "blog"
};

const AnimatedFeaturedBox = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.01,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const FeaturedBox = ({ children, state }) => {
  const typeClass = (state => {
    switch (state) {
      case FeaturedBoxTypes.SERVICE:
        return `${featuredBoxStyles.service}`;
      case FeaturedBoxTypes.BLOG:
        return `${featuredBoxStyles.blog}`;
      default:
        return "";
    }
  })(state);
  return (
    <AnimatedFeaturedBox
      className={`${featuredBoxStyles.featuredBox} ${typeClass}`}
    >
      <div className={featuredBoxStyles.inner}>{children}</div>
    </AnimatedFeaturedBox>
  );
};

FeaturedBox.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.string.isRequired
};

FeaturedBox.defaultProps = {
  children: <DefaultChildren />,
  state: FeaturedBoxTypes.SERVICE
};

export default FeaturedBox;
export { FeaturedBoxTypes };
