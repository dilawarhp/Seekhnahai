import React from "react";

function MenuItem({ image, name, des }) {
  return (
    <div className="col-md-4">
    <div className="mainboxbanner">
    <div className="menuItem">
      <div> <img className="logo-image" src={image} /> </div>
      <h1> {name} </h1>
      <p> {des} </p>
    </div>
    </div>
    </div>
  );
}

export default MenuItem;