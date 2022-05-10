import React from "react";

function ServicesItems({ image, name, des }) {
  return (
    <div className="col-md-4">
    <div className="icon-box">
        <div className="servicesitems">
      <div className="icon" > <img className="logo-image" src={image} /> </div>
      <h4 className=""> {name} </h4>
      <p className=""> {des} </p>
      </div>
    </div>
    </div>
  );
}

export default ServicesItems;