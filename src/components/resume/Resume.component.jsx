import React,{useState} from 'react';
import './Resume.styles.scss';
import Education from '../education/education.component.jsx';
import Experience from '../experience/experience.component.jsx';
import mobile from '../../assets/mobile.png';
import globe from '../../assets/globe.png';
import writing from '../../assets/writing.png';
import left_cropped from '../../assets/left_cropped.png';
import angularLogo from '../../assets/angular.svg';
import reactLogo from '../../assets/react.svg';
import nodejsLogo from '../../assets/nodejs.jpeg';
import graduationLogo from '../../assets/graduation.png';
import experienceLogo from '../../assets/experience.png';
import skillsLogo from '../../assets/skills.png';
import html5Logo from '../../assets/html5.png';
import css3Logo from '../../assets/css3.png';
import tsLogo from '../../assets/ts.png';
import jsLogo from '../../assets/js.png';
import rxjsLogo from '../../assets/rxjs.jpeg';
import sassLogo from '../../assets/sass.png';
import gitLogo from '../../assets/git.png';
import mongodbLogo from '../../assets/mongodb.png';
import splunkLogo from '../../assets/splunk.png';

const Resume = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        icon: {mobile},
        title: "Web Design",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        icon: {globe},
        title: "Mobile Application",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "3",
        icon: {writing},
        title: "Branding",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
    ];
  
    const handleClick = (way) => {
      way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    
    return (
      <div className="resume" id="resume">
          <h1>Portfolio</h1>
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={skillsLogo}></img>
                    </div>
                    <h2>Skills</h2>
                  </div>
                </div>
                <div className="right">
                  <ul className='icon-list'>
                      <li className="icon">
                       <img src={angularLogo}></img>
                      </li>
                      <li className="icon">
                          <img  src={reactLogo}/>
                      </li>
                      <li className='icon'>
                          <img  src={nodejsLogo} />
                      </li>
                      <li className='icon'>
                          <img  src={html5Logo}></img>
                      </li>
                      <li className='icon'>
                          <img src={css3Logo} />
                      </li>
                      <li className='icon'>
                          <img  src={tsLogo} />
                      </li>
                      <li className='icon'>
                          <img  src={jsLogo} />
                      </li>
                      <li className='icon'>
                          <img src={rxjsLogo} />
                      </li>
                      <li className='icon'>
                          <img src={sassLogo} />
                      </li>
                      <li className='icon'>
                          <img  src={gitLogo} />
                      </li>
                      <li className='icon'>
                          <img  src={mongodbLogo} />
                      </li>
                      <li className='icon'>
                          <img  src={splunkLogo} />
                      </li>       
                  </ul>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={graduationLogo} alt="" />
                    </div>
                    <h2>Education</h2>                    
                  </div>
                </div>
                <div className="right">
                  <Education/>             
                </div>
              </div>
            </div>

            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={experienceLogo} alt="" />
                    </div>
                    <h2>Experience</h2>
                  </div>
                </div>
                <div className="right">   
                  <Experience/>             
                </div>
              </div>
            </div>
        </div>
        <img
          src={left_cropped}
          className="arrow left"
          alt="image left"
          onClick={() => handleClick("left")}
        />
        <img
          src={left_cropped}
          className="arrow right"
          alt="image right"
          onClick={() => handleClick()}
        />
      </div>
    );
}

export default Resume;



