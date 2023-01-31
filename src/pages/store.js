import React from "react";
import Jumbotron from 'react-bootstrap';
  
const About = () => {
  return (
    <div>
      <h1>Store</h1>
      <p class="lead">Click this button to go to "cart".</p>
      <p><a href="/cart" class="btn btn-primary btn-lg">Cart &raquo;</a></p>
  </div>
  );
};
  
export default About;