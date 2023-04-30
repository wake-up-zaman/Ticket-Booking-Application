// import React, { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [dropdownTab, setDropdownTab] = useState("");
  console.log(dropdownTab)

  const DropdownTab=()=>{
      setDropdownTab(1)
  }
  const DropdownTab2=()=>{
    setDropdownTab("")
}

  return (
    <header>
      <div className='navbarNew'>
        <div className="navbar2">
          <div className="logo"><li className="titleName"><Link to="/" className="navA">Ticket Kato</Link></li></div>
          <ul className="links">
            <li><Link to="/" className="navA">Home</Link></li>
            <li><Link to="/bagInfo" className="navA"> Travel Info</Link> </li>
            <li><Link to="/offer" className="navA"> Offers</Link> </li>
            <li><Link to="/destination" className="navA"> Destination</Link> </li>
            <li><Link to="/about" className="navA"> About Us</Link> </li>
          </ul>
          <a href="#" className="action-btn navA" >Get Started</a>
          {dropdownTab ? <div onClick={() => DropdownTab2()} className="toggle-btn text-dark"><div className="navIcon2"><FaTimes className="navA text-dark" /></div></div>:<div onClick={() => DropdownTab()} className="toggle-btn"><FaBars className="navIcon1 navA" /></div>}
        </div>
{ dropdownTab ?<div className="dropdown-tab open">
        <li><a a href="home" className="navB">Home</a></li>
            <li><a href="about" className="navB">About</a></li>
            <li><a href="services" className="navB">Services</a></li>
            <li><a href="Contact" className="navB">Contact</a></li>
            <li><a href="Contact" className="action-btn-tab">Get Started</a></li>
        </div>:<span></span>}
      </div>
    </header>
  );
};

export default Navbar;
