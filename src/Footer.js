import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div class="fot1">
      <div class="col1">
      <p><h2>Smart tracer</h2>
          <a href="/Home">Home</a><br></br>
          <a href="/contact">Contact</a><br></br>
          <a href="/login">Login</a><br></br>
          </p>
          </div>
          <div class="col1">
            <p><h2>Learn</h2>
            <a href="/courses">Courses</a><br></br>
          <a href="/Explorelearning">Explorelearning</a><br></br>
            </p>

          </div>
          
          <div class="col1">
            <h2>CS Languages</h2><p1>
            HTML<br></br>Python<br></br>Java<br></br>Javascript<br></br>C programming<br></br>
            
            </p1>

          </div>
        <div class="col1">
        <p><h2>Company</h2>
        <a href="/about">AboutUs</a><br></br>
            </p>

        </div>
            
        <div class="col1">
        <h2>Contact us</h2><p1>
        Address: <br></br>103/G2, Bypass road,<br></br>Vannarpet,Tirunelveli<br></br>Tamilnadu=627003
            </p1>

        </div>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Smart Tracer Learning Website.All rights reserved.</p>
        <p2>Terms of Service | Privacy Policy</p2>
        </div>
    
      
    </footer>
  
    </>
  );
};

export default Footer;
