import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faDotCircle } from "@fortawesome/free-solid-svg-icons"
import navbarStyles from "./Navbar.module.scss"

const NavbarBurger = ({ onToggleMenu }) => (
  <a
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
)

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
            <a className="button is-info has-text-white" href="#">
              <span className="icon has-text-white">
                <FontAwesomeIcon icon={faDotCircle} />
              </span>
              <span>Talk to me</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Navbar = () => {
  const [isActive, toggleMenu] = useState(false)
  return (
    <div className="container">
      <nav className={`navbar is-transparent ${navbarStyles.customNavbar}`}>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <div className={navbarStyles.logoWrapper}>
              <div className={navbarStyles.logoText}>
                <span
                  className={`${navbarStyles.extra} ${navbarStyles.extraLeft}`}
                />
                <span
                  className={`${navbarStyles.extra} ${navbarStyles.extraRight}`}
                />

                <span className={navbarStyles.content}>
                  <span className={navbarStyles.name}>{`thebao`}</span>
                  <span className={navbarStyles.key}>{`dev`}</span>
                </span>
              </div>
            </div>
          </a>
          <NavbarBurger onToggleMenu={() => toggleMenu(!isActive)} />
        </div>
        <NavbarMenu isActive={isActive} />
      </nav>
    </div>
  )
}

export default Navbar
