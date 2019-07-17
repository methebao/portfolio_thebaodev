import PropTypes from "prop-types";
import React from "react";
import Navbar, { NavBarTypes } from "./Navbar";
import avatar from "../images/avatar.svg";
import headerStyles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faSkype
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import rightVector from "../images/right-vector.svg";

const Header = ({ siteTitle, subTitle }) => (
  <header>
    <section className={`hero is-medium ${headerStyles.customHero}`}>
      <div className="hero-head">
        <div className="container">
          <Navbar state={NavBarTypes.PRIMARY} />
        </div>
      </div>
      <div className="hero-body">
        <div className={`container ${headerStyles.customContainer}`}>
          <div className={headerStyles.middleContent}>
            <div className="columns">
              <div className="column is-one-third">
                <div className={headerStyles.avatar}>
                  <img src={avatar} alt="The Bao Dev" />
                  <p className={headerStyles.avatarTitle}>
                    Passion, dedication, and a lot of coffee
                  </p>
                </div>
              </div>
              <div className={`column ${headerStyles.customColumnContent}`}>
                <h1>
                  <p className={headerStyles.title}>{siteTitle}</p>
                  <p className={headerStyles.subTitle}>{subTitle}</p>
                </h1>
                <div className={headerStyles.icons}>
                  <div className={headerStyles.icon}>
                    <a href="https://www.linkedin.com/in/thebao/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                  <div className={headerStyles.icon}>
                    <a href="https://github.com/methebao">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                  <div className={headerStyles.icon}>
                    <a href="https://www.facebook.com/thebao2433">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>

                  <div className={headerStyles.icon}>
                    <a href="skype:primegods.1s?chat">
                      <FontAwesomeIcon icon={faSkype} />
                    </a>
                  </div>
                  <div className={headerStyles.icon}>
                    <a href="{/* mailto:thebao.dev@gmail.com?subject=[FROM_Porfolio] */}">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
                <div className={headerStyles.desc}>
                  <p>
                    The goals of great modern frontend should be to serve the
                    best user experience for your users, to command their
                    attention and motivate them to take next action without
                    thinking and annoying bugs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={rightVector}
            className={headerStyles.rightVector}
            alt="frontend development"
          />
        </div>
      </div>
    </section>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: `Engage your audiences with modern frontend UI/UX`,
  subTitle: `by a Professional Frontend Developer`
};

export default Header;
