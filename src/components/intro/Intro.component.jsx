import React from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import './Intro.styles.scss';

const Intro = ({menuOpen, setMenuOpen}) => {
    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Frontend / UI","Angular", "React","Typescript"],
      });
    }, []);

    return (
        <div className="intro" id="intro">
             <div className="left">
                 <div className={"outerborder " + (menuOpen && 'active')}>
                     <div className={"midborder " + (menuOpen && 'active')}>
                        <div className="imageContainer" >
                            <img src='assets/man.png' alt='man'></img>
                            <picture>
                            <img
                                sizes="(max-width: 662px) 100vw, 662px"
                                srcset="
                                man_pndxnu_c_scale,w_200.jpg 200w,
                                man_pndxnu_c_scale,w_411.jpg 411w,
                                man_pndxnu_c_scale,w_552.jpg 552w,
                                man_pndxnu_c_scale,w_655.jpg 655w,
                                man_pndxnu_c_scale,w_662.jpg 662w"
                                src="man_pndxnu_c_scale,w_662.jpg"
                                alt="">
                                    </img>
                                </picture>
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
                     <img src='assets/down.png' alt='down-arrow'></img>
                 </a>
             </div>
        </div>
    )
}

export default Intro;
