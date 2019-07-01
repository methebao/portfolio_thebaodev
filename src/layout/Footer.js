import React from "react"
import bulmaLogo from "../images/made-with-bulma.png"
const Footer = () => (
  <footer className="section has-background-primary has-text-centered">
    <div className="container">
      Handcrafted by me © <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div className="made-with-bulma">
      <a href="https://bulma.io">
        <img src={bulmaLogo} alt="Made with Bulma" width="128" height="24" />
      </a>
    </div>
  </footer>
)

export default Footer
