
import React, { useState, useEffect } from "react";
import ShortCart from './ShortCart';
import "./css/CheckOutPage.css"
export default function CheckOutPage() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      optionalMessage: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { firstName, lastName, phoneNumber, emailAddress } = formData;
  
      if (!firstName || !lastName || !phoneNumber || !emailAddress) {
        alert('Please Fill All Details');
      } else {
        // Redirect or perform other actions on form submission success
        console.log('Redirecting to delivery page...');
        // Uncomment the next line when you have the proper routing logic in place
        // history.push('/deliverypage');
      }
    };
  
    // Placeholder for product data
    const productData = [
      {
        name: 'Château Margaux',
        year: 2019,
        price: 2000,
        url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2017/11/margaux-2015-limited-release.jpg',
      },
      // Add more products as needed
    ];
  
    return (
      <div id="info">
        <div id="left">
          <div>
            <h1>Checkout</h1>
          </div>
          <div id="topLeft">
            <h3 style={{ borderBottom: '2px solid #bf0d12', paddingBottom: '10px' }}>1. Information</h3>
            <i className="fa-solid fa-arrow-right-long"></i>
            <h3 style={{color:"#bfbbb2"}} >2. Delivery</h3>
            <i className="fa-solid fa-arrow-right-long" style={{ color: 'cadetblue' }}></i>
            <h3 style={{color:"#bfbbb2"}}>3. Payment method</h3>
          </div>
          <div id="details">
            <form onSubmit={handleSubmit}>
              <div id="fullName">
                <div id="fName">
                  <label htmlFor="firstName">First name</label><br />
                  <input type="text" id="firstName" placeholder="Enter Your First Name" onChange={handleInputChange} />
                </div>
                <div id="lName">
                  <label htmlFor="lastName">Last name</label><br />
                  <input type="text" id="lastName" placeholder="Enter Your Last Name" onChange={handleInputChange} />
                </div>
              </div>
              <label htmlFor="number">Phone number</label><br />
              <input type="text" id="number" placeholder="Enter Phone Number" onChange={handleInputChange} /><br />
              <label htmlFor="email">Email address</label><br />
              <input type="text" placeholder="Enter Email Address" id="email" onChange={handleInputChange} /><br />
              <label htmlFor="optionalMessage">Your message (optional)</label><br />
              <input type="text" id="optionalMessage" onChange={handleInputChange} />
              <button type="submit" id="submit">Continue</button>
            </form>
          </div>
        </div>
        <div >
        <ShortCart/>
        </div>
      </div>
    );
  };
  