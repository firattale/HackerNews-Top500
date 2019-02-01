import React from "react";
import "./Card.css";

const Card = ({ ids, scores, titles, authors, urls }) => {
  return ids.map((id, i) => {
    return (
      <div className="card" key={id}>
        <section>
          <i className="far fa-heart" />
          {scores[i]}
        </section>
        <section>
          <strong>
            <a href={urls[i]}>{titles[i]}</a>
          </strong>
          <p> By {authors[i]}</p>
        </section>
      </div>
    );
  });
};

export default Card;
