import React from "react";
import serviceDescStyles from "./ServiceDesc.module.scss";

const ServiceDesc = ({ content }) => {
  return <div className={serviceDescStyles.box}>{content}</div>;
};

export default ServiceDesc;
