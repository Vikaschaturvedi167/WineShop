import React, { useState, useEffect } from 'react';
import "../css/CartPage.css"
const CartPage = () =>  {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Initial data (replace this with your actual initial data)
    const initialData = [
      {
        name: 'Product 1',
        image_url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        qty: 2,
        price: 25.99,
        quantity: 10,
      },
      {
        name: 'Product 2',
        image_url: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        qty: 1,
        price: 19.99,
        quantity: 15,
      },
      // Add more initial data as needed
    ];

    // Set initial data to state
    setCartItems(initialData);
  }, []);

  const totalPriceShow = () => {
    const sum = cartItems.reduce((acc, elem) => {
      return acc + elem.price * elem.qty;
    }, 0);

    return sum.toFixed(2); // Assuming you want to display the total with two decimal places
  };

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (index, newQty) => {
    const updatedCart = [...cartItems];
    updatedCart[index].qty = newQty;
    setCartItems(updatedCart);
  };

  return (
    <div id="cart-div">
      <h1>Shopping Cart</h1>
      <div id="display-div">
        {cartItems.map((item, index) => (
          <div key={index}>
            {/* Render your item details here */}
            <img src={item.image_url} alt={item.name} />
            <h5>{item.name}</h5>
            <div id="quantity-div" style={{display:"flex", flexDirection:"column"}}>
              <button

              disabled={item.qty==0}
                onClick={() => handleQuantityChange(index, item.qty - 1)}
              >
                -
              </button>
              {/* <input
                type="text"
                value={item.qty}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              /> */}
              <h5 style={{textAlign:"center"}}>{item.qty}</h5>
              <button
                onClick={() => handleQuantityChange(index, item.qty + 1)}
              >
                +
              </button>
            </div>
            <h5>${(item.price * item.qty).toFixed(2)}</h5>
            <div id="delete-div">
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div id="checkout-div">
        {/* Your checkout details */}
        <h5>I am 18+</h5>
        {/* ... (other checkout details) */}
        <div id="total-price">
          <div id="sub-items">
            <h3>Subtotal</h3>
            <span id="total-items">({cartItems.length} items)</span>
          </div>
          <div id="price-total">{`$${totalPriceShow()}`}</div>
        </div>
        <button id="checkoutBtn" onClick={() => window.location.href = '#'}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage