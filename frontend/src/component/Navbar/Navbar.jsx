import { useState } from 'react';
import {IoMdMenu} from '../../utils/icon'
// import logo from "../../assets/logo.png";
import "./Navbar.css"; // include CSS above

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            {/* <img src={logo} alt="logo" /> */}
            <h2 className="name">Abhay Singh Rathore</h2>
          </a>
        </div>

        {/* Links */}
        <div className={open ? "nav-links active" : "nav-links"}>
          {/* className={open ? "nav-links active" : "nav-links"} */}
          <a href="#" onClick={() => setOpen(false)} >HOME</a>
          <a href="#about" onClick={() => setOpen(false)} >About Us</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#project" onClick={() => setOpen(false)}>
            <button>Projects</button>
          </a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <IoMdMenu style={{fontSize:40}}/>
        </div>
      </div>
    </nav>
  );
}