import React from "react";

const Contact = () => (
  <div>
    <form action="https://formspree.io/david@davidholbrook.info" method="POST">
      <label htmlFor="name">Your Name:</label>
      <input type="text" name="name" />
      <label htmlFor="email">Your Email</label>
      <input type="email" name="_replyto" />
      <label htmlFor="message">Your Message</label>
      <textarea name="message" />
      <button type="submit"> Let's Talk </button>
    </form>
  </div>
);

export default Contact;
