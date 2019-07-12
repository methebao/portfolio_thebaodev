import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import productStyles from "./Product.module.scss";
import Tag from "./Tag";
import BrowserMockup from "src/components/BrowserMockup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
const Product = ({ title, description, content, tags, imageData }) => {
  const renderTags = tags => {
    return tags.map(({ name, content, state }, index) => {
      return <Tag key={index} name={name} content={content} state={state} />;
    });
  };
  const addLineBreaks = string =>
    string.split("\n").map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        <FontAwesomeIcon icon={faCircle} /> {text}
        <br />
      </React.Fragment>
    ));

  return (
    <div className={`columns ${productStyles.product}`}>
      <div className="column">
        <div className={productStyles.info}>
          <h1 className="title is-4 has-text-left">{title}</h1>
          <p className="subtitle is-5 has-text-left">{description}</p>
          <article className="message is-info">
            <div className="message-body has-text-left has-text-grey">
              {addLineBreaks(content)}
            </div>
          </article>
          <div className="field is-grouped is-grouped-multiline">
            {renderTags(tags)}
          </div>
        </div>
      </div>
      <div className="column">
        <BrowserMockup>
          <Img sizes={imageData} alt={title} />
        </BrowserMockup>
      </div>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

Product.defaultProps = {
  title: "Product Title Sample",
  description: "Product description sample",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut vitae rerum odio sequi culpa, magni aspernatur minima fugiat ullam, deleniti libero! Voluptatibus sit aliquid molestiae excepturi esse eius quos.",
  tags: [
    {
      name: "Built with",
      content: "HTML/SCSS",
      state: "builtWith"
    },
    {
      name: "Type",
      content: "PSD To HTML",
      state: "type"
    }
  ]
};
export default Product;
