import React, { useState, useEffect } from 'react';
import "./css/CartPage.css"
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [over18, set18] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    // Initial data (replace this with your actual initial data)
    const initialData = JSON.parse(localStorage.getItem("cart")) || [];
      // Add more initial data as needed
      const itemsWithQuantity = initialData.map(item => ({ ...item, qty: 1 }));
      setCartItems(itemsWithQuantity);
  }, []);

  const totalPriceShow = () => {
    const sum = cartItems.reduce((acc, elem) => {
      return acc + elem.price * elem.qty;
    }, 0);

    return sum.toFixed(2); 
  };

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  const handleQuantityChange = (index, newQty) => {
    if (newQty >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[index].qty = newQty;
      setCartItems(updatedCart);
    }
  };


  const OnSubmit =()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems));
    navigate('/cartcheckout')
  }

  return (
    <div id="cart-div" style={{width:"50%", marginLeft:"350px"}}>
      <h1>Shopping Cart</h1>
      <div id="display-div">
        {cartItems.map((item, index) => (
          <div key={index} >
            {/* Render your item details */}
            <img src={item.img_url} alt={item.name} />
            <div
              style={{
                display: "flex",
                width: "150px",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "flex-start",
                textAlign: "start",
                padding: "5px",
                alignItems: "flex-start",
              }}
            >
              <h5 >{item.name}</h5>
              <p id="productCode">Region: {item.region}</p>
            </div>

            {/* <p>{item.productCode}</p> */}

            <div
              id="quantity-div"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <button
              className='cartButton'
                disabled={item.qty == 0}
                onClick={() => handleQuantityChange(index, item.qty - 1)}
              >
                -
              </button>
              {/* <input
                type="text"
                value={item.qty}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              /> */}
              <h5 style={{ textAlign: "center" }}>{item.qty}</h5>
              <button className='cartButton' onClick={() => handleQuantityChange(index, item.qty + 1)}>
              +
              </button>
            </div>
            <h5>${(item.price * item.qty).toFixed(2)}</h5>
            <div id="delete-div">
              <button className='cartButton' onClick={() => handleDelete(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div id="checkout-div">
        {/* Your checkout details */}
        <div className="Over-18">
          <div style={{ display: "flex", alignItems: "center" }}>
            <label class="switch">
              <input
                type="checkbox"
                onClick={() => {
                  set18(!over18);
                }}
              />
              <span class="slider round"></span>
            </label>
            <h5 style={{ marginLeft: "10px" }}>I am 18+</h5>
          </div>
          <p style={{ textAlign: "start" }}>
            {" "}
            An adult signature (18+) is required for delivery
          </p>
        </div>

        {/* ... (other checkout details) */}
        <div id="total-price">
          <div id="sub-items">
            <h3>Subtotal</h3>
            <span id="total-items">({cartItems.length} items)</span>
          </div>
          <div id="price-total">{`$${totalPriceShow()}`}</div>
        </div>
        <button
          id={!over18 ? "checkoutBtn-disabled" : "checkoutBtn"}
          disabled={!over18}
          onClick={() => (OnSubmit())}
        >
          <span>Checkout </span>
        </button>
      </div>
    </div>
  );
};

export default CartPage;


// category
// : 
// "Red Wine"
// flag
// : 
// "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
// id
// : 
// 4
// img_url
// : 
// "https://images.vivino.com/thumbs/OpZa3okqQzuG6HUbGkusqQ_pb_x600.png"
// name
// : 
// "Adaptation Cabernet Sauvignon 2018"
// price
// : 
// "4990"
// rating
// : 
// "4"
// region
// : 
// "California"