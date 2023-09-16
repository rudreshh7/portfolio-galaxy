import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Let&apos;s Connect!!</h1>
      </div>
      <div className="contact-info">
        <p>
          I am always looking to Make new connections , so drop me an email or
          shoot me a DM on twitter. Who knows where the conversation could lead?
        </p>
        <span>
          Let&apos;s explore the possibilities and see where it takes us!
        </span>
      </div>
      <div className="contact-button">
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Contact;
