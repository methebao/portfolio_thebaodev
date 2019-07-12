import React from "react";
import bulmaLogo from "../images/made-with-bulma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faSkype
} from "@fortawesome/free-brands-svg-icons";

import { faCopyright, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import footerStyles from "./Footer.module.scss";
import Logo, { LogoContentTypes } from "../components/Logo";

const Footer = () => (
  <footer
    className={`section has-background-primary has-text-centered ${footerStyles.footer}`}
  >
    <div className="container">
      <div className={footerStyles.quoteWrapper}>
        <FontAwesomeIcon
          icon={faLayerGroup}
          className={footerStyles.quoteIcon}
        />
        <h4 className={footerStyles.quote}>
          Good design is obvious
          <strong> Great design is transparent</strong>
        </h4>
      </div>
    </div>
    <div className={footerStyles.icons}>
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faSkype} />
    </div>
    <div className={footerStyles.copyRight}>
      <span>Handcrafted by me </span>
      <FontAwesomeIcon icon={faCopyright} />
      <Logo state={LogoContentTypes.MINIMAL} />
    </div>
    <div className="made-with-bulma">
      <a href="https://bulma.io">
        <img src={bulmaLogo} alt="Made with Bulma" width="128" height="24" />
      </a>
    </div>
  </footer>
);

export default Footer;
