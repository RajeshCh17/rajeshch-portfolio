import React,{useState} from 'react'
import './Resume.styles.scss'

const Resume = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
      {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Web Design",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        icon: "./assets/globe.png",
        title: "Mobile Application",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "3",
        icon: "./assets/writing.png",
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
                    </div>
                    <h2>Skills</h2>
                  </div>
                </div>
                <div className="right">
                  <ul className='icon-list'>
                      <li className="icon">
                       <img src='https://media-exp1.licdn.com/dms/image/C560BAQF0bC8s3lcV0A/company-logo_100_100/0/1519909751117?e=1629936000&v=beta&t=jFriqX2BZ4ZO7wpTd4dSB-pYZNvGyFZjQi6o9HaIDWA'></img>
                      </li>
                      <li className="icon">
                          <img  src="data:image/png;base64,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" alt="" />
                      </li>
                      <li className='icon'>
                          <img  src="https://media-exp1.licdn.com/dms/image/C510BAQGyCfCQzGP_RA/company-logo_200_200/0/1519900931012?e=1629936000&v=beta&t=Y7l_OzICkKvCfD8gnLEQW7DvifdPg8l9c6As7gIJ_TA" alt="" />
                      </li>
                      <li className='icon'>
                          <img  src='https://media-exp1.licdn.com/dms/image/C4E0BAQE20NeKJU6zUA/company-logo_100_100/0/1519876486338?e=1629936000&v=beta&t=PEEHEdUGzyD02GHfJy5NdP-Vy5PYdbESUOPWGq62HeI'></img>
                      </li>
                      <li className='icon'>
                          <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEHRfnOLgpl7g/company-logo_200_200/0/1519881942035?e=1629936000&v=beta&t=P6HDuKDzhJetbifhw_AZJdmXi1GpAWbih39CTgEN3Bc" alt="" />
                      </li>
                      <li className='icon'>
                          <img  src="data:image/png;base64,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" alt="" />
                      </li>
                      <li className='icon'>
                          <img  src="https://media-exp1.licdn.com/dms/image/C560BAQGC029P7UbAMQ/company-logo_200_200/0/1562088387077?e=1629936000&v=beta&t=xLEhWYpvxK_YgKe8sAQLxOkVpDjAcd_lpXagUuNtDwk" alt="" />
                      </li>
                      <li className='icon'>
                          <img src="data:image/png;base64,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" alt="" />
                      </li>
                      <li className='icon'>
                          <img src="data:image/png;base64,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" alt="" /></li>
                      <li className='icon'>
                          <img  src="data:image/png;base64,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" alt="" />
                      </li>          
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    );
}

export default Resume;



