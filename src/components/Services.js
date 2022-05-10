import React from 'react';
import Slider from "react-slick";
import Herobg from "../images/hero-bg1.jpg";
function Services (){
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
    return <>
    <div className='mainslider'>
<Slider {...settings}>
      <div>
      <img className="slider-image" src={Herobg} />
      </div>
      <div>
      <img className="slider-image" src={Herobg} />
      </div>
      <div>
      <img className="slider-image" src={Herobg} />
      </div>
      <div>
      <img className="slider-image" src={Herobg} />
      </div>
      <div>
      <img className="slider-image" src={Herobg} />
      </div>
      <div>
      <img className="slider-image" src={Herobg} />
      </div>
    </Slider>
    </div>
    </>
}
 
export default Services;