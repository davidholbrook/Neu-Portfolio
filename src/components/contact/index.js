import React from 'react';

const Contact = () => (
  <form action="post">
    <label htmlFor="email">Your Name:</label>
    <input type="text" name="yname" placeholder="Bruce Wayne" />
    <label htmlFor="email">Your Email:</label>
    <input type="text" name="email" placeholder="bwayne@waynent.com" />
    <label htmlFor="message">Your Message:</label>
    <textarea name="message" placeholder="I got a project for you..." />
    <button type="submit"> Let's Talk</button>
  </form>
);

export default Contact;
