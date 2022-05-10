import React from 'react';
import GalleryItem from './GalleryItem'
import { GalleryList } from "../components/GalleryList"; 
function Gallery (){
    return <>
     <section class="gallery">
      <div class="container">

        <div class="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
        {GalleryList.map((galleryItem, key) => {
               return (
               <GalleryItem
                  key={key}
                  image={galleryItem.image}
                  name={galleryItem.name}
                  des={galleryItem.des}
                  />
               );
               })}
        


        </div>

      </div>
    </section>
    </>
}

export default Gallery;