import React from "react";
import SEO from "../layout/SEO";
import NavBar, { NavBarTypes } from "../layout/Navbar";

import Form from "./contact/components/Form";
const ContactPage = () => {
  return (
    <main>
      <NavBar state={NavBarTypes.INVERT} />
      <SEO title="Home" />
      <Form />
    </main>
  );
};

export default ContactPage;
