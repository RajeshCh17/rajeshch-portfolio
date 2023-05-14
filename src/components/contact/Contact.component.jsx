import React,{ useState } from 'react';
import CustomizedSnackbar from '../snackbar/Snackbar.component.jsx';
import './Contact.styles.scss'
import shake from '../../assets/shake.svg';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
    


  const emailChangedHandler = e => {
    //setting email value in state.
    setEmail(e.target.value);
  };
  
  const messageChangedHandler = e => {
    //setting message value in state.
    setMessage(e.target.value);
  };

  const submitHandler = e => {
    //stops reloading of page on click of submission.
    e.preventDefault();
    //checks email should have value before opening snackbar.
    if(email && message){
      setOpen(true); 
    } 
  };
    return (
      <div className="contact" id="contact">
        <div className="left">
          <img src={shake} alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={submitHandler}>
            <input type="email" placeholder="Email" name="email" onChange={emailChangedHandler}/>
            <textarea placeholder="Message" onChange={messageChangedHandler}></textarea>
            <button type="submit">Send</button>
            <CustomizedSnackbar open={open} setOpen={setOpen}/>
          </form>
        </div>
      </div>
    );
}

export default Contact;

