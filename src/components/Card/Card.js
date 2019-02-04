import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ scores, titles, authors, urls }) => {
  let textInput = React.createRef();

  const handleClick = () => {
    textInput.current.classList.toggle("expandGrid");
  };

  return (
    <div className="card" onClick={handleClick} ref={textInput}>
      <section>
        <i className="far fa-heart" />
        {scores}
      </section>
      <section className="section2">
        <strong>
          <a className="links" href={urls}>
            {titles}
          </a>
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
  urls: PropTypes.string
};
export default Card;
