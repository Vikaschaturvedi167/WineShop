import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import CartPage from './CartPage';
import "./ProductDetail.css"

const ProductDetails = ({id}) => {


  const [randomNumbers, setRandomNumbers] = useState([]);

 
  
    const generateRandomNumbers = () => {
      const newRandomNumbers = [];
      for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        newRandomNumbers.push(randomNumber);
      }
      setRandomNumbers(newRandomNumbers);
      console.log(randomNumbers)
    }
    
    console.log(randomNumbers)

  const Navigate = useNavigate()

const [pData , setPdata]=useState([]);
const [productID , setProductID]=useState('');
const [btn , setBtn]=useState('Add to Cart');

const getProductDetails = async (id) => {
  try {
    const res = await fetch(`https://server-3o3a.onrender.com/products/1`);
    const data = await res.json();
    console.log(data);
    setPdata(data)
    // console.log("Hello")
  } 
  catch (error) {
    console.log(error)
  }
}
// console.log("Hel")

const handleClick = ()=>{
  // <Link to={"/"} element={<CartPage/>}></Link>
  setProductID(pData.id)
  // CartAddBtn.innerText="Added",
  setBtn("Added")
  // alert("Product Added")
  console.log(productID)
}

useEffect(()=>{
getProductDetails(id)
generateRandomNumbers()
},[])

return (
  <div id="allProdDetails">
    <div id="prodImgDiv">
      <img src={pData.img_url} alt={pData.name} />
    </div>
    <div id="prodDetails">
      <div id="rate-stock-fav">
        {/* /* Add your rating, stock, and favorites components here */ }
        <span> ★ {pData.rating}</span>
        <h1>Rating :{pData.rating}</h1>
        <h1>In stock</h1>
        <span className="heart">🤍</span>
      </div>
      <div>
        <div id="aboutProd">
          {/* Add your about pData components here */}
          <p>Product code: {randomNumbers}</p>
        </div>
        <div id="description">{pData.details}</div>
        <div id="bottle-button">
          <button>0.75 L</button>
          <p id="quantityDiv">{pData.rating} bottles left</p>
        </div>
      </div>
      <div id="paymentDiv">
        <div id="priceDiv">${pData.price}</div>
        <div id="cartDiv">
          <button>Add to cart</button>
        </div>
        <div id="quickOrderDiv" onClick={() => window.location.href = 'cart.html'}>
          <button>Quick order</button>
        </div>
      </div>
      {/* Add the rest of your components */}
    </div>
  </div>
);
}

export default ProductDetails



// "id": 1,
// "img_url": "https://icdn.bottlenose.wine/images/full/509218.png?fit=clip&h=442&w=442&auto=format&ixlib=imgixjs-3.6.1",
// "name": "LaCappuccina Sauvignon Blanc VNS ",
// "price": "2860",
// "category": "White Wine",
// "region": "Italy",
// "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Italy_with_border.svg/1500px-Flag_of_Italy_with_border.svg.png",
// "rating": "4"