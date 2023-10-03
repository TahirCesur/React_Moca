/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function ContactWay(props) {
  return (
    <div className="card border-dark text-white bg-dark mb-5 g-4">
      <div className="card-body">
        <h5 className="card-header bg-dark">{props.city1}</h5>
        <h6 className="card-header bg-dark">{props.quarries}</h6>
        <br />
        <p className="card-text">{props.address}</p>
        <p className="card-text">
          <small className="text-muted">{props.city2}</small>
        </p>
      </div>
      <iframe
        src={props.picture}
        width="100%"
        height="300"
        title="Ocak Yolu"
        style={{ border: "10px solid #a79682" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactWay;
