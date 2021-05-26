import React from 'react';
import Intro from './components/intro/Intro.component.jsx';
import Topbar from './components/topbar/Topbar.component.jsx';
import Contact from './components/contact/Contact.component.jsx';
import Resume from './components/resume/Resume.component.jsx'
import Testimonials from './components/testimonials/Testimonials.component.jsx';
import Menu from "./components/menu/menu.component.jsx";
import { useState } from "react";

import './App.scss';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Resume/>
        <Testimonials/>
        <Contact/>
      </div>  
    </div>
  );
}

export default App;
