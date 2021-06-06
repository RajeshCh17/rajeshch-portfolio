import React from 'react';
import './Testimonials.styles.scss';

const Testimonials = () => {
    const data = [
        {
          id: 1,
          name: "Jithendra Koduru",
          title: "Senior Manager at Salesforce",
          img:
            "https://media-exp1.licdn.com/dms/image/C4D03AQF8hy284cIBdw/profile-displayphoto-shrink_800_800/0/1516960492574?e=1627516800&v=beta&t=kKwcmsvcwgbI2cDr8Wd6zvNkvTXZrWk75IbB2FGBOUo",
          icon: "assets/linkedin.png",
          socila_profile_link:"http://www.linkedin.com/in/jithendra-koduru-43bba021/",
          desc:
            "Rajesh is a very quick learner. You give a task and he comes up with great solutions, even though the technology is new to him. As a person, Rajesh is a great person to be around, always spreading joy and positive energy and very easy to get along with.",
        },
        {
          id: 2,
          name: "Sai Santosh Suddula",
          title: "Senior Developer at Walker & Dunlop",
          img:
            "https://media-exp1.licdn.com/dms/image/C4E03AQF9VOik8lMzZg/profile-displayphoto-shrink_800_800/0/1616546483065?e=1627516800&v=beta&t=hL8QVRJTiRfkg2PMGM_NG_L0_fj5aaSBw66phAi42pc",
          icon: "assets/linkedin.png",
          socila_profile_link:"http://www.linkedin.com/in/sai-santosh-suddula-b4b42b55/",
          desc:
            "I have worked with Rajesh for over an year. He has good analytical skills and capable of acquiring Technology very fast. Moreover he is committed to his goals.",
          featured: true,
        },
        {
          id: 3,
          name: "Alok Vishwakarma",
          title: "Full Stack Developer at Xilinx",
          img:
            "https://media-exp1.licdn.com/dms/image/C5103AQGnpoQ-czOgaw/profile-displayphoto-shrink_400_400/0/1559289697917?e=1627516800&v=beta&t=3iqVy6rI6pMgoHRKoS-d_xdFkqxQ9p19-bMDw2NIcsk",
          icon: "assets/linkedin.png",
          socila_profile_link:'https://www.linkedin.com/in/alok631/',
          desc:
            "It’s rare that you come across standout talent like Rajesh. I had the pleasure of working with Rajesh for one year at Qualcomm.",
        },
      ];
      return (
        <div className="testimonials" id="testimonials">
          <h1>Testimonials</h1>
          <div className="container">
            {data.map((d) => (
              <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                  <img src="assets/right-arrow.png" className="left" alt="" />
                  <img
                    className="user"
                    src={d.img}
                    alt=""
                  />
                  <a href="{d.social_profile_link}">
                    <img className="right" src={d.icon} alt="" />
                  </a>
                </div>
                <div className="center">
                  {d.desc}
                </div>
                <div className="bottom">
                  <h3>{d.name}</h3>
                  <h4>{d.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Testimonials;
