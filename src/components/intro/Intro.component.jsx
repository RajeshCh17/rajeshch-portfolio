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
                            <picture>
                                <img
                                    sizes="(max-width: 662px) 100vw, 662px"
                                    srcset="
                                    assets/man_w_200.png 200w,
                                    assets/man_w_411.png 411w,
                                    assets/man_w_552.png 552w,
                                    assets/man_w_655.png 655w,
                                    assets/man_w_662.png 662w"
                                    src="assets/man_w_662.png"
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
