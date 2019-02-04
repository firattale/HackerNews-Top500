import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ ids, scores, titles, authors, urls }) => {
  return ids.map((id, i) => {
    return (
      <div className="card" key={id}>
        <section>
          <i className="far fa-heart" />
          {scores[i]}
        </section>
        <section className="sec2">
          <strong>
            <a href={urls[i]}>{titles[i]}</a>
          </strong>
          <p> By {authors[i]}</p>
        </section>
      </div>
    );
  });
};

Card.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Card;
