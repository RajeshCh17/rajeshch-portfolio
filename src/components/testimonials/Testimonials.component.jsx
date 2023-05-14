import React from 'react';
import './Testimonials.styles.scss';
import linkedin from '../../assets/linkedin.png';
import rightArrow from '../../assets/right-arrow.png';
import Recommendation1 from '../../assets/testimonial1.jpeg';
import Recommendation2 from '../../assets/testimonial2.jpeg';
import Recommendation3 from '../../assets/testimonial3.jpeg';


const Testimonials = () => {
    const data = [
        {
          id: 1,
          name: "Jithendra Koduru",
          title: "Director Engineering & Product Management at Salesforce",
          img: Recommendation1,
          icon: linkedin,
          socila_profile_link:"http://www.linkedin.com/in/jithendra-koduru-43bba021/",
          desc:
            "Rajesh is a very quick learner. You give a task and he comes up with great solutions, even though the technology is new to him. As a person, Rajesh is a great person to be around, always spreading joy and positive energy and very easy to get along with.",
        },
        {
          id: 2,
          name: "Sai Santosh Suddula",
          title: "Senior Salesforce Developer at Walker & Dunlop",
          img:Recommendation2,
          icon: linkedin,
          socila_profile_link:"http://www.linkedin.com/in/sai-santosh-suddula-b4b42b55/",
          desc:
            "I have worked with Rajesh for over an year. He has good analytical skills and capable of acquiring Technology very fast. Moreover he is committed to his goals.",
          featured: true,
        },
        {
          id: 3,
          name: "Satyabrata Sahoo",
          title: "Business Intelligence Engineer at KPMG India",
          img:Recommendation3,
          icon: linkedin,
          socila_profile_link:'https://www.linkedin.com/in/satyabratasahoo238/',
          desc:
            "An all-time lively spirit who doesn't have any restrictions on expanding his knowledge in the IT space. Hard working and punctual and is open towards all sorts of suggestions and improvement advices. A must have teammate who is very good at a crisis.",
        },
      ];
      return (
        <div className="testimonials">
          <h1>Testimonials</h1>
          <div className="container">
            {data.map((d) => (
              <div className={d.featured ? "card featured" : "card"} id={d.id}>
                <div className="top">
                  <img src={rightArrow} className="left" alt="" />
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
