import React from "react";
import "./Topbar.styles.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && 'active')} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aficionado.
          </a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+91 7093322751</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>rajesh.choudhary1704@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
