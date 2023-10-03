import React from "react";

function AntalyaElmali1Card(props) {
  return (
    <figure className="figure">
      <a href={props.picture}>
        <img
          src={props.picture}
          className="figure-img img-fluid rounded shadow"
          alt="..."
        />
      </a>
      {props.title}
    </figure>
  );
}

export default AntalyaElmali1Card;
