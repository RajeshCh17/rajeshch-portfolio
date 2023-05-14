import React from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import './Intro.styles.scss';
import profilePic from '../../assets/man.png';
import downArrow from '../../assets/down.png';


const Intro = ({menuOpen, setMenuOpen}) => {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Web","Angular", "React","Node","MongoDB","Typescript"],
      });
    }, []);

    return (
        <div className="intro" id="intro">
             <div className="left">
                 <div className="outerborder">
                     <div className="midborder">
                        <div className="imageContainer" >
                            <img src={profilePic} className={(menuOpen && 'active')} alt='man'></img>
                        </div> 
                    </div>
                 </div>
             </div>
             <div className="right">
                 <div className="wrapper">
                     <h2>Hi There, I'm</h2>
                     <h1>Rajesh Choudhary</h1>
                     <h3><span ref={textRef}></span> Developer</h3>
                 </div>
                 <a href="#resume">
                     <img src={downArrow} alt='down-arrow'></img>
                 </a>
             </div>
        </div>
    )
}

export default Intro;
