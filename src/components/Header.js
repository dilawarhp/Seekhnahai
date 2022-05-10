import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link, NavLink, } from 'react-router-dom';
import Logo from '../images/moblogo.png'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Departments from '../components/Departments'
import Doctors from '../components/Doctors'
import Contact from '../components/Contact'
function Header (){
    return <>
      <Router>
          <div className='container'>
          <div className="row ">
               <div className="col-md-12" >
<nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to="/Home"> <img className="logo-image" src={Logo} /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink to="/Home" className="nav-link ">Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/About" className="nav-link ">About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/Services" className="nav-link ">Services</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/Departments" className="nav-link ">Departments</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/Doctors" className="nav-link ">Doctors</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/Contact" className="nav-link ">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>
</div>
      <Routes>
      <Route exact path='/Home' element={< Home />}></Route>
      <Route exact path='/About' element={< About />}></Route>
      <Route exact path='/Services' element={< Services />}></Route>
      <Route exact path='/Departments' element={< Departments />}></Route>
      <Route exact path='/Doctors' element={< Doctors />}></Route>
      <Route exact path='/Contact' element={< Contact />}></Route>
      </Routes> 
</Router>

    </>
}
 
export default Header;