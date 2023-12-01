import React from 'react';
import './styling/footer.css'
function Footer() {
  return (
    <>
      <div id="container_7">
        <div>
          <h4>CATALOG</h4>
          <p>Red wine</p>
          <p>White wine</p>
          <p>Rose wine</p>
          <p>Sparkling wine</p>
          <p>Promotions</p>
          <p>Sets and Gifts</p>
        </div>
        <div>
          <h4>SUPPORT</h4>
          <p>FAQ</p>
          <p><a href="term.html">Terms of use</a></p>
          <p><a href="">Privacy Policy</a></p>
          <p>Delivery and payment</p>
          <p>Return and exchange</p>
        </div>
        <div>
          <h4>OUR COMPANY</h4>
          <p><a href="about.html">About us</a></p>
          <p>Contact us</p>
          <p>Reviews</p>
          <p>Blog and news</p>
          <p>Loyalty program</p>
          <p>Wine subscription</p>
        </div>
        <div>
          <h4>CONTACT</h4>
          <p>0 800 123 456</p>
          <p>info@minewine.com</p>
          
          <h4>ADDRESS :</h4>
          <p>Ukraine</p>
          <p>kyiv,Bazhana St,17</p>
          
          <h4>WORKING HOURS :</h4>
          <p>Mon-Fri 09:00-20:00</p>
          <p>Sat-Sun 10:00-18:00</p>
          <p><i className="fa-brands fa-instagram icon"></i> <i className="fa-brands fa-telegram icon"></i></p>
        </div>
        <div id="subscribediv">
          <h4>Subscribe to our newsletter</h4>
          <p>And get -20% on you first order</p>
          <input id="input_email" type="email" placeholder="example@gmail.com" />
          <button id="subscribe_btn">subscribe</button>
        </div>
      </div>
      <hr />
      <div id="bottom_footer">
        <h1>Mine Wine</h1>
        <div>
          <p>We only sell Alcohol to Adults 21+</p>
          <p>@MineVine 2023. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
