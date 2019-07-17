import React, { useState, useEffect } from "react";
import posed from "react-pose";
import expandIconStyles from "./MoreBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";

const AnimatedIcon = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 10 }
    }
  },
  hidden: {
    y: 5,
    opacity: 0.3
  }
});

const MoreBox = ({ isVisible, onPressed }) => {
  const [iconLoopState, setIconLoopState] = useState(true);
  const [isAnimatedIcon, setIsAnimatedIcon] = useState(true);

  useEffect(() => {
    setIsAnimatedIcon(!isVisible);
    if (isAnimatedIcon) {
      const iconEffectInterval = setInterval(() => {
        setIconLoopState(!iconLoopState);
      }, 1000);
      return () => clearInterval(iconEffectInterval);
    }
  }, [isVisible, iconLoopState, isAnimatedIcon]);

  return (
    <div className={expandIconStyles.servicesIconWrapper} onClick={onPressed}>
      <AnimatedIcon
        key={"animated-icon"}
        pose={iconLoopState ? "visible" : "hidden"}
      >
        <FontAwesomeIcon
          icon={isVisible ? faArrowAltCircleUp : faArrowAltCircleDown}
          className={expandIconStyles.servicesMoreIcon}
        />
      </AnimatedIcon>
    </div>
  );
};

export default MoreBox;
