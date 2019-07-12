import React from "react";
import PropTypes from "prop-types";
import productStyles from "./Product.module.scss";
import Tag from "./Tag";
import BrowserMockup from "src/components/BrowserMockup";

const Product = ({ title, subTitle, description, tags }) => {
  const renderTags = tags => {
    return tags.map(({ name, content, state }, index) => {
      return <Tag key={index} name={name} content={content} state={state} />;
    });
  };
  return (
    <div className={`columns ${productStyles.product}`}>
      <div className="column">
        <div className={productStyles.info}>
          <h1 className="title is-4 has-text-justified">{title}</h1>
          <p className="subtitle is-5 has-text-justified">{subTitle}</p>
          <article className="message is-info">
            <div className="message-body has-text-justified has-text-grey">
              {description}
            </div>
          </article>
          <div className="field is-grouped is-grouped-multiline">
            {renderTags(tags)}
          </div>
        </div>
      </div>
      <div className="column">
        <BrowserMockup>
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt={title}
            />
          </figure>
        </BrowserMockup>
      </div>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};

Product.defaultProps = {
  title: "Product Title Sample",
  subTitle: "Product description sample",
  description:
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
