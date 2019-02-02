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
  ids: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  urls: PropTypes.array.isRequired
};
export default Card;
