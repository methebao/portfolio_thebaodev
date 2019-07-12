import React from "react";
import PropTypes from "prop-types";

const BuiltWithTag = ({ content }) => {
  return <span className="tag is-primary">{content}</span>;
};

const TypeTag = ({ content }) => {
  return <span className="tag is-info">{content}</span>;
};

const ExtraTag = ({ content }) => {
  return <span className="tag">{content}</span>;
};

const renderTag = content => ({
  builtWith: <BuiltWithTag content={content} />,
  type: <TypeTag content={content} />,
  extra: <ExtraTag content={content} />
});

const TagBase = ({ name, content, state }) => {
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag">{name}</span>
        {renderTag(content)[state]}
      </div>
    </div>
  );
};

TagBase.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

TagBase.defaultProps = {
  name: "Frontend",
  content: "Frontend",
  state: "extra"
};

export default TagBase;
