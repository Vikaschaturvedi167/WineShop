import React from 'react'

export default function Thankyou() {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div id="cart-div">
          <h1>Your order is been placed</h1>
          
  
          <div id="checkout-div">
            {/* Your checkout details */}
            <h3>Yours Order ID is 1236547</h3>
            {/* ... (other checkout details) */}
            <div id="total-price">
              <div id="sub-items">
                <h3>ThankYou....</h3>
                
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
  
