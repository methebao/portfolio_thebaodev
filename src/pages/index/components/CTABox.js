import React from "react";
import ctaBoxStyles from "./CTABox.module.scss";

const CTABox = () => {
  return (
    <div className={`box ${ctaBoxStyles.box}`}>
      <div className="columns level">
        <div className="column level-item ">
          <h1 className="title has-text-white">Start a project</h1>
        </div>
        <div className="column level-item">
          <p>
            Contact me to kicks things off. This will be more fun than you
            think! I will buy coffee
          </p>
        </div>
        <div className="column level-item">
          <a
            className="button is-white is-outlined is-rounded is-medium"
            href="mailto:thebao.dev@gmail.com?subject=[FROM_Porfolio]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABox;
