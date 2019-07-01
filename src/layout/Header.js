import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navbar"
import avatar from "../images/avatar.svg"
import headerStyles from "./Header.module.scss"

const Header = ({ siteTitle }) => (
  <header>
    <section className="hero is-primary is-large">
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={avatar} alt="The Bao Dev" />
          <p className={headerStyles.title}>
            A professional Frontend Developer
          </p>
          <p className={headerStyles.subTitle}>
            Passion, dedication, and a lot of coffee. ☕️
          </p>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
