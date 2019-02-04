import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ scores, titles, authors, urls, onClick, gridExpand }) => {
  return (
    <div
      className="card"
      onClick={onClick}
      // style={{ backgroundColor: gridExpand }}
    >
      <section>
        <i className="far fa-heart" />
        {scores}
      </section>
      <section className="sec2">
        <strong>
          <a href={urls}>{titles}</a>
        </strong>
        <p> By {authors}</p>
      </section>
    </div>
  );
};

Card.propTypes = {
  scores: PropTypes.number.isRequired,
  titles: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  urls: PropTypes.string.isRequired
};
export default Card;
