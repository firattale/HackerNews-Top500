import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ score, title, author, url }) => {
  let textInput = React.createRef();
  const handleClick = () => {
    textInput.current.classList.toggle("expandGrid");
  };

  return (
    <div className="card" onClick={handleClick} ref={textInput}>
      <section>
        <i className="far fa-heart" />
        {score}
      </section>
      <section className="section2">
        <strong>
          <a className="links" href={url}>
            {title}
          </a>
        </strong>
        <p> By {author}</p>
      </section>
    </div>
  );
};

Card.propTypes = {
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string
};
export default Card;
