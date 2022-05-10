import React from "react";

function DocItems({ image, name, des }) {
  return (
    <div className="col-md-3">
    <div className="count-box">
        <div className="docItem">
      <div className="" > <img className="logo-image" src={image} /> </div>
      <h4 className="title"> {name} </h4>
      <p className="description"> {des} </p>
      </div>
    </div>
    </div>
  );
}

export default DocItems;