import React from "react";
import { Link } from "react-router-dom";

function QuarriesCard(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      <div className="tekalbm">
        <div className="card">
          <Link className="ali-link" to={props.link} onClick={scrollToTop}>
            <img
              src={props.picture}
              alt="..."
              style={{ width: "100%", height: "300px" }}
            />
            <p className="card-title">
              <h5 style={{ color: "rgb(210,180,102); ", marginBottom: "20px" }}>
                {props.title}
              </h5>
            </p>
            <p
              style={{
                color: "rgb(238, 235, 229)",
                fontSize: "13px",
                marginBottom: "20px",
              }}
            >
              {props.company}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuarriesCard;
