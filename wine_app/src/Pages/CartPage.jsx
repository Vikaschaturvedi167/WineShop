import React, { useState, useEffect } from 'react';
import "./css/CartPage.css"
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [over18, set18] = useState(false);

  useEffect(() => {
    // Initial data (replace this with your actual initial data)
    const initialData = [
      {
        name: "Château Margaux",
        image_url:
          "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2017/11/margaux-2015-limited-release.jpg",
        qty: 2,
        price: 25.99,
        quantity: 10,
        productCode: "Product code: 15937",
        crossProce: 29.9,
        year: 2015,
      },
      {
        name: "Chardonnay Reserve",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMp6R04hnvUdeMuJLvlXafVxJNNSo7bwVuW6JE27lj9szwekR9eaf6HUWaqxfy4U0o_8&usqp=CAU",
        qty: 1,
        price: 19.99,
        quantity: 15,
        productCode: "Product code: 15937",
        crossProce: 29.9,
        year: 2015,
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
    <div id="cart-div" style={{width:"50%", marginLeft:"350px"}}>
      <h1>Shopping Cart</h1>
      <div id="display-div">
        {cartItems.map((item, index) => (
          <div key={index} >
            {/* Render your item details here */}
            <img src={item.image_url} alt={item.name} />
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
              <p id="productCode">Year:{item.year}</p>
            </div>

            {/* <p>{item.productCode}</p> */}

            <div
              id="quantity-div"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <button
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
              <button onClick={() => handleQuantityChange(index, item.qty + 1)}>
              +
              </button>
            </div>
            <h5>${(item.price * item.qty).toFixed(2)}</h5>
            <div id="delete-div">
              <button onClick={() => handleDelete(index)}>Remove</button>
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
          onClick={() => (window.location.href = "#")}
        >
          <span>Checkout </span>
        </button>
      </div>
    </div>
  );
};

export default CartPage;
