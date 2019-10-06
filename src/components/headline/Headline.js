import React from "react";
import "./headline.scss";
import PropTypes from "prop-types";

class Headline extends React.Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="Header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  decs: PropTypes.string
};

export default Headline;
