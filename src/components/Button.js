import React from "react";
import PropTypes from "prop-types";
import posed from "react-pose";

import buttonStyles from "./Button.module.scss";

const ButtonTypes = {
  PRIMARY: "primary",
  INFO: "info",
  CTA: "cta",
  OUTLINE: "outline"
};

const AnimatedButton = posed.button({
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

const PrimaryButton = ({ content }) => {
  return (
    <AnimatedButton className={`button is-primary ${buttonStyles.button}`}>
      {content}
    </AnimatedButton>
  );
};

const InfoButton = ({ content }) => {
  return (
    <AnimatedButton className={`button is-info ${buttonStyles.button}`}>
      {content}
    </AnimatedButton>
  );
};
const OutlineButton = ({ content }) => {
  return (
    <AnimatedButton
      className={`button is-outlined is-info ${buttonStyles.button}`}
    >
      {content}
    </AnimatedButton>
  );
};
const CTAButton = ({ content }) => {
  return (
    <AnimatedButton
      className={`button is-info has-text-white ${buttonStyles.button}`}
    >
      {content}
    </AnimatedButton>
  );
};
const ButtonBase = ({ children, state }) => {
  const renderButton = content => ({
    primary: <PrimaryButton content={content} />,
    info: <InfoButton content={content} />,
    cta: <CTAButton content={content} />,
    outline: <OutlineButton content={content} />
  });
  return renderButton(children)[state];
};

ButtonBase.propTypes = {
  content: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

ButtonBase.defaultProps = {
  content: "Click here",
  state: ButtonTypes.PRIMARY
};

export default ButtonBase;
export { ButtonTypes };
