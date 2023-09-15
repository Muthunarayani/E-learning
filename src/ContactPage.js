import React from 'react';
import "./styles.css";
const ContactPage = () => {
  return (
    <>
    <div>
<body>
  <header>
    <h1>Contact Us</h1>
  </header>
  <div id="responsive-form" class="clearfix">

<div class="form-row">
<div class="column-half">
  <label  class="fname"> Name</label><br></br>
  <input type="text" id="fnam" name="firstname" placeholder="Your name.."></input><br></br>
  <label class="fname">Email</label><br></br>
  <input type="text" id="fnam" name="email" placeholder="Your email.."></input><br></br>
  <label class="fname">Phone number</label><br></br>
  <input type="text" id="fnam" name="phone" placeholder="Your number.."></input><br></br>
  <label class="fname">You are a</label><br></br>
    <select id="fnames" name="role">
      <option value="Faculty">Faculty</option>
      <option value="Student">Student</option>
      <option value="Employee">Employee</option>
    </select><br></br>
    
    <button class="button button">Submit</button>
</div>
<div class="column-half">
<img src="cont.jpg"width="400"alt="logo"></img><br></br>

<p1 align="left">
  Address: 
</p1>
<p2 align="left">  103/G2 Bypass road,<br></br>   Vannarpettai,Tirunelveli<br></br>Tamil Nadu-627003</p2>
</div>


<div class="column-half">
   </div>
</div>

<div class="form-row">

<div class="column-half"> </div>

</div>


<div class="form-row">
<div class="column-full"></div>
</div>
  <footer>
    <p>&copy; 2023 E-Learning Website. All rights reserved.</p>
  </footer>
  </div>
</body>
      
      {/* Add your contact form or contact information here */}
    </div>
    </>
  );
};

export default ContactPage;
