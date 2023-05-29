import React from "react";
import "./Topbar.styles.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({menuOpen, setMenuOpen}) => {
  const phoneClickHandler = () => {
    navigator.clipboard.writeText('+91 7416518691').then(() => {
      alert('CONTACT COPIED!!');
  });;
  };
  const emailClickHandler = () => {
    navigator.clipboard.writeText('rajesh.choudhary1704@gmail.com').then(() => {
      alert('EMAIL COPIED!!');
  });;
  };

  return (
    <div className={"topbar " + (menuOpen && 'active')} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aficionado.
          </a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span onClick={phoneClickHandler}>+91 7416518691</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span onClick={emailClickHandler}>rajesh.choudhary1704@gmail.com</span>
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
