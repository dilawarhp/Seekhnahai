import React from "react";
import { Link } from "react-router-dom";
import backgroundtop from '../images/hero-bg.jpg'; 
import BGslider from '../images/hero-bgslider.jpg'; 
import Abtimg from '../images/about.jpg'; 
import MenuItem from './MenuItem'
import { MenuList } from "../components/MenuList";
import AboutItem from './AboutItem'
import { AboutList } from "../components/AboutList";
import DocItems from './DocItems'
import { DocList } from "../components/DocList";
import ServicesItems from './ServicesItems'
import { ServicesList } from "../components/ServicesList";
import GalleryItem from './GalleryItem'
import { GalleryList } from "../components/GalleryList";
import Slider from "react-slick";
import ContactUs from "../components/ContactUs";
import Todo from "./Todo";

function Home (){
   var settings = {
      dots: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
return <>
<section className="banner align-items-center d-flex" >
<div className='mainslider'>
<Slider {...settings}>
      <div>
      <img className="slider-image" src={BGslider} alt="hehe"/>
      </div>
      <div>
      <img className="slider-image" src={backgroundtop} alt="hehe"/>
      </div>
      <div>
      <img className="slider-image" src={backgroundtop} alt="hehe" />
      </div>
      <div>
      <img className="slider-image" src={backgroundtop} alt="hehe"/>
      </div>
      <div>
      <img className="slider-image" src={backgroundtop} alt="hehe"/>
      </div>
      <div>
      <img className="slider-image" src={backgroundtop} alt="hehe"/>
      </div>
    </Slider>
    </div>   
<div className="container psbannertop">
   <div className="row">
      <div className="col-md-12">
         <h1>WELCOME TO MEDILAB</h1>
         <p>We are team of talented designers making websites with Bootstrap</p>
         <Link className="btn" to="/Home">
         Get Started</Link>
      </div>
   </div>
</div>
</section>
<section className="whyus">
   <div className="container">
      <div className="row">
         <div className="col-md-4 ">
            <div className="whyinnerleft">
               <h2>Why Choose Medilab?</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
               <Link className="more-btn" to="/Home">
               Learn More </Link>
            </div>
         </div>
         <div className="col-md-8 ">
            <div className="row">
               {MenuList.map((menuItem, key) => {
               return (
               <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  des={menuItem.des}
                  />
               );
               })}
            </div>
         </div>
      </div>
   </div>
</section>
<section className="aboutus">
   <div className="container-fluid">
      <div className="row">
         <div className="col-md-5 abtcolimg" style={{ backgroundImage: `url(${Abtimg})` }} >           
      </div>
      <div className="col-md-7 " >
         <div className="aboutustight">
            <h2>Enim quis est voluptatibus aliquid consequatur fugiat</h2>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
            
            {AboutList.map((aboutItem, key) => {
               return (
               <AboutItem
                  key={key}
                  image={aboutItem.image}
                  name={aboutItem.name}
                  des={aboutItem.des}
                  />
               );
               })}
         </div>
      </div>
   </div>
   </div>
</section>
<section  className="counts">
   <div className="container">
      <div className="row">
      {DocList.map((docItem, key) => {
               return (
               <DocItems
                  key={key}
                  image={docItem.image}
                  name={docItem.name}
                  des={docItem.des}
                  />
               );
               })}
         
      </div>
   </div>
</section>
<section  className="services">
   <div className="container">
      <div className="section-title">
         <h2>Services</h2>
         <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className="row">
      {ServicesList.map((servicesitems, key) => {
               return (
               <ServicesItems
                  key={key}
                  image={servicesitems.image}
                  name={servicesitems.name}
                  des={servicesitems.des}
                  />
               );
               })}
         
      </div>
   </div>
</section>
<section  className="appointment section-bg">
   <div className="container">
      <div className="section-title">
         <h2>Make an Appointment</h2>
         <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <form>
         <div className="row">
            <div className="col-md-4 form-group">
               <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
               <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
               <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
               <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
               <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
               <div className="validate"></div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-4 form-group mt-3">
               <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
               <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
               <select name="department" id="department" className="form-select">
                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
               </select>
               <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
               <select name="doctor" id="doctor" className="form-select">
                  <option value="">Select Doctor</option>
                  <option value="Doctor 1">Doctor 1</option>
                  <option value="Doctor 2">Doctor 2</option>
                  <option value="Doctor 3">Doctor 3</option>
               </select>
               <div className="validate"></div>
            </div>
         </div>
         <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
            <div className="validate"></div>
         </div>
         <div className="text-center"><button className="btn" type="submit">Make an Appointment</button></div>
      </form>
   </div>
</section>
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
    <section  className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
      </div>

      

      <div className="container">
        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
         <ContactUs></ContactUs>
         </div>
         </div>
         </div>
    </section>
    <section class="todosection">
    <div className="container">
      <div className="row">
         <div className="col-md-12">
    <Todo></Todo>
    
    </div>

        </div>

      </div>
    </section>
</>
}
export default Home;