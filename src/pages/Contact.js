import React, {useRef, useState} from 'react'
import "../style/Contact.css";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [sumbitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    
    const sendEmailService = (e) => {
        e.preventDefault();
        var checked = validateForm();

        if(checked){ 
          setSuccess(false);
          setFail(false);

          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
                clearForm();
            }, (error) => {
                console.log(error.text);
                setFail(true);
            });
            setSubmitted(true);
        }
    };

    function validateForm() {
      var x = document.forms["contactForm"]["firstname"].value;
      if (x === "") {
        alert("Firstname must be filled out");
        return false;
      }
      
      x = document.forms["contactForm"]["lastname"].value;
      if (x === "") {
        alert("Lastname must be filled out");
        return false;
      }

      x = document.forms["contactForm"]["email"].value;
      if (x === "") {
        alert("Email must be filled out");
        return false;
      }

      x = document.forms["contactForm"]["message"].value;
      if (x === "") {
        alert("Message must be filled out");
        return false;
      }

      return true;
    }

    const clearForm = () => {
      document.forms["contactForm"]["firstname"].value = '';
      document.forms["contactForm"]["lastname"].value = '';
      document.forms["contactForm"]["email"].value = '';
      document.forms["contactForm"]["message"].value = '';

    }


    return (
      <div className='container'>
        <h1>Shoot a Message!</h1>
        <form className='form' name="contactForm" ref={form} onSubmit={sendEmailService}>
        <div className='row'>
          <label>First name*</label>
          <input type="text" name="firstname" />
        </div>
        <div className='row'>
          <label>Last name*</label>
          <input type="text" name="lastname" />
        </div>
        <div className='row'>
          <label>Email address*</label>
          <input type="email" name="email" />
        </div>
        <div className='row'>
          <label>Message*</label>
          <textarea name="message" />
        </div>
        <input className='submit' type="submit" value="Send" />
        </form>
        <div className='status'>
          <p className='success'>{sumbitted && success ? "Message successfully sent!": ""}</p>
          <p className='faild'>{sumbitted && fail ?"Email service is temporarily down. Please reach out through social medias. Sorry for the inconvenience!": ""}</p>
        </div>
      </div>
    
    )
}

export default Contact
