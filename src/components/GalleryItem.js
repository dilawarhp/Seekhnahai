import React from "react";

function GalleryItem({ image }) {
  return (
    <div className="col-md-3 p-0">
      <div className="galleryItem">
      <img className="img-fluid" src={image} />
      </div>
      </div>
  );
}

export default GalleryItem;