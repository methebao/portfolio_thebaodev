import PropTypes from "prop-types";
import React from "react";
import Navbar from "./Navbar";
import avatar from "../images/avatar.svg";
import headerStyles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faSkype
} from "@fortawesome/free-brands-svg-icons";

const Header = ({ siteTitle, subTitle }) => (
  <header>
    <section className={`hero is-primary is-medium ${headerStyles.customHero}`}>
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container">
          <div className={headerStyles.middleContent}>
            <div className="columns">
              <div className="column is-one-third">
                <div className={headerStyles.avatar}>
                  <img src={avatar} alt="The Bao Dev" />
                  <p className={headerStyles.avatarTitle}>
                    Passion, dedication, and a lot of coffee{" "}
                    <span role="img" aria-label="Coffee">
                      ☕️
                    </span>
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
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                  <div className={headerStyles.icon}>
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <div className={headerStyles.icon}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <div className={headerStyles.icon}>
                    <FontAwesomeIcon icon={faSkype} />
                  </div>
                </div>
                <div className={headerStyles.desc}>
                  <p>
                    The goals of great modern frontend should be to serve the
                    best user experience for your users, to command their
                    attention and motivate them to take next action without
                    thinking and annoying bugs.
                  </p>
                  <p>
                    Let's get started with me who actually love doing these
                    things and optimizing them everyday. My job is take your
                    great ideas, your stunning design to pixel perfect and high
                    performance frontend.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
  subTitle: `with a Professional Frontend Developer`
};

export default Header;
