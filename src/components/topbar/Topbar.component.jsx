import React from "react";
import "./Topbar.styles.scss";
import { Person, Mail } from "@material-ui/icons";
import clipBoardLogo from "../../assets/clipboard.png";

const Topbar = ({menuOpen, setMenuOpen}) => {
  const phoneClickHandler = () => {
    navigator.clipboard.writeText('+91 7416518691').then(() => {
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
            <span >+91 7416518691 
              <img className="clipBoardClass" onClick={phoneClickHandler} src={clipBoardLogo}></img>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span><a href="mailto:rajesh.choudhary1704@gmail.com" className="emailAddress">rajesh.choudhary1704@gmail.com</a></span>
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
