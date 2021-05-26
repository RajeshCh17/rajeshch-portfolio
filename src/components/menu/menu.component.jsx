import React from 'react';
import './menu.styles.scss'

const menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu "+(menuOpen && "active")}>
        <ul>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#resume">Portfolio</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    )
}

export default menu;
