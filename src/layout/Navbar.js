import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import navbarStyles from "./Navbar.module.scss";
import Button, { ButtonTypes } from "../components/Button";
import Logo, { LogoContentTypes } from "../components/Logo";

const NavbarBurger = ({ onToggleMenu }) => (
  <a
    href="#"
    role="button"
    className="navbar-burger"
    data-target="navMenu"
    aria-label="menu"
    aria-expanded="false"
    onClick={onToggleMenu}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
);

const NavbarMenu = ({ isActive }) => (
  <div
    id="mainNavbar"
    className={`navbar-menu ${navbarStyles.menuCustom} ${isActive &&
      "is-active"}`}
  >
    <div className="navbar-end">
      <div className="navbar-item">
        <div className={`field ${navbarStyles.fieldCustom}`}>
          <p className="control">
            <AnchorLink href="#cta-section">
              <Button state={ButtonTypes.CTA}>
                <span className="icon has-text-white">
                  <FontAwesomeIcon icon={faDotCircle} />
                </span>
                <span>Talk to me</span>
              </Button>
            </AnchorLink>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isActive, toggleMenu] = useState(false);
  return (
    <div className="container">
      <nav className={`navbar is-transparent ${navbarStyles.customNavbar}`}>
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <Logo state={LogoContentTypes.PRIMARY} />
          </a>
          <NavbarBurger onToggleMenu={() => toggleMenu(!isActive)} />
        </div>
        <NavbarMenu isActive={isActive} />
      </nav>
    </div>
  );
};

export default Navbar;
