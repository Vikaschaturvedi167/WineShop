import React, { useState, useEffect } from "react";
import "./css/PaymentPage.css";
import ShortCart from './ShortCart';
export default function PaymentPage() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      optionalMessage: "",
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
        alert("Please Fill All Details");
      } else {
        // Redirect or perform other actions on form submission success
        console.log("Redirecting to delivery page...");
        // Uncomment the next line when you have the proper routing logic in place
        // history.push('/deliverypage');
      }
    };
  
    // Placeholder for product data
    const productData = [
      {
        name: "Château Margaux",
        year: 2019,
        price: 2000,
        url: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2017/11/margaux-2015-limited-release.jpg",
      },
      // Add more products as needed
    ];
  
    return (
      <div id="info">
        <div id="left">
        <div>
          <h1 style={{textAlign:"center"}}>Payment</h1>
        </div>
        <div id="topLeft">
          <h3 style={{}}>1. Information</h3>
          <i className="fa-solid fa-arrow-right-long"></i>
          <h3 style={{}}>2. Delivery</h3>
          <i
            className="fa-solid fa-arrow-right-long"
            style={{ color: "cadetblue" }}
          ></i>
          <h3
            style={{ borderBottom: "2px solid #bf0d12", paddingBottom: "10px" }}
          >
            3. Payment method
          </h3>
        </div>
        <hr />
        <div id="details">
          <h4>Details</h4>
          <p>Name: Bharat Goswami</p>
          <div style={{ display: "flex" }}>
            <p style={{ paddingRight: "20px" }}>Email: bharat@gmaiil.com</p>
            <p>Phone Number: 123654789</p>
          </div>
          <p>
            Address : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga iure esse velit distinctio quasi suscipit corrupti enim
            recusandae libero adipisci, saepe odit, laborum vero odio autem nisi
            voluptate nemo eum!
          </p>
          <hr />

          <div
            class="main"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <input
              type="radio"
              name="checkbox"
              class="check"
              id="radio1"
              checked
            />
            <label for="radio1">
              <div class="container">
                <div class="cRadioBtn">
                  <div class="overlay"></div>
                  <div class="drops xsDrop"></div>
                  <div class="drops mdDrop"></div>
                  <div class="drops lgDrop"></div>
                </div>
              </div>
              <h2>Cash on delivery</h2>
            </label>
            <input type="radio" name="checkbox" class="check" id="radio2" />
            <label for="radio2">
              <div class="container">
                <div class="cRadioBtn">
                  <div class="overlay"></div>
                  <div class="drops xsDrop"></div>
                  <div class="drops mdDrop"></div>
                  <div class="drops lgDrop"></div>
                </div>
              </div>
              <h2>Online Payment</h2>
            </label>
          </div>
        </div>
      </div>
        <div>
          <ShortCart />
        </div>
      </div>
    );
  };
