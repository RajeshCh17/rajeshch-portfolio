import React from 'react';
import '../education/education.styles.scss';

export default function Education() {
  return (
    <div className="main">
        <div className="timeline">
            <div className="box">
                <div className="container">
                    <div className="lines">
                        <div className="dot"></div>
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                        <div className="dot"></div>
                    </div>  
                    <div className="cards">
                        <div className="card">
                            <h2>B.E - 7.7 CGPA (2010 - 2014)</h2>
                            <p>RAJIV GANDHI TECHNICAL UNIVERSITY</p>
                        </div>
                        <div className="card mid">
                            <h2>S.S.C - 84% (2010)</h2>
                            <p>KENDRIYA VIDYALAYA</p>
                        </div>
                        <div className="card">
                            <h2>H.S.C - 80% (2008)</h2>
                            <p>KENDRIYA VIDYALAYA</p>
                        </div>
                    </div>       
                </div>
            </div>    
        </div>
    </div>
  );
}