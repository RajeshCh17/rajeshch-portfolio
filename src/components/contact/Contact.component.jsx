import React,{ useState } from 'react';
import CustomizedSnackbar from '../snackbar/Snackbar.component.jsx';
import './Contact.styles.scss'
import shake from '../../assets/shake.svg';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(false);
    


  const inputChangedHandler = e => {
    console.log(e.target.value)
   // setEmail(e.target.value);
  };
    const handleSubmit = e => {
      //e.preventDefault();
      if(email){
        setMessage(true);
      }  
    };
    return (
      <div className="contact" id="contact">
        <div className="left">
          <img src={shake} alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" name="email" changed={event =>
                    this.inputChangedHandler(event)
                  }/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            <CustomizedSnackbar message={message} setMessage={setMessage}/>
          </form>
        </div>
      </div>
    );
}

export default Contact;

