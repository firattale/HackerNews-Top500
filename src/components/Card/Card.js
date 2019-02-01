import React from "react";
import "./Card.css";
const Card = props => {
  return (
    <div className="card">
      {/* <section>
        <i className="far fa-heart" />
        {props.scores[1]}
      </section>
      <section>
        <strong>
          <a href={props.urls[1]}>{props.titles[1]}</a>
        </strong>
        <p> By {props.authors[1]}</p>
      </section> */}

      {/* deneme */}
      <section>
        <i className="far fa-heart" />
        39
      </section>
      <section>
        <strong>
          <a href="www.google.com">
            EU charges eight banks over alleged government bond cartel
          </a>
        </strong>
        <p> By Jerry2</p>
      </section>
    </div>
  );
};

export default Card;
