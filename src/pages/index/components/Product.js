import React from "react"
import PropTypes from "prop-types"
import productStyles from "./Product.module.scss"
import Tag from "./Tag"

const Product = ({ title, subTitle, description, tags }) => {
  const renderTags = tags => {
    return tags.map(({ name, content, state }, index) => {
      return <Tag key={index} name={name} content={content} state={state} />
    })
  }
  return (
    <div className={`columns ${productStyles.info}`}>
      <div className="column">
        <div className={productStyles.info}>
          <h1 class="title">{title}</h1>
          <p class="subtitle is-4">{subTitle}</p>
          <p className="has-text-justified">{description}</p>
          <div class="field is-grouped is-grouped-multiline">
            {renderTags(tags)}
          </div>
        </div>
      </div>
      <div className="column">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
      </div>
    </div>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

Product.defaultProps = {
  title: "Product Title Sample",
  subTitle: "Product description sample",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut vitae rerum odio sequi culpa, magni aspernatur minima fugiat ullam, deleniti libero! Voluptatibus sit aliquid molestiae excepturi esse eius quos.",
  tags: [
    {
      name: "Built with",
      content: "HTML/SCSS",
      state: "builtWith",
    },
    {
      name: "Type",
      content: "PSD To HTML",
      state: "type",
    },
  ],
}
export default Product
