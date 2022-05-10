import React from "react";

function AboutItem({ image, name, des }) {
  return (
    <div className="icon-box">
        <div className="aboutItem">
      <div className="icon" > <img className="logo-image" src={image} /> </div>
      <h4 className="title"> {name} </h4>
      <p className="description"> {des} </p>
      </div>
    </div>
  );
}

export default AboutItem;