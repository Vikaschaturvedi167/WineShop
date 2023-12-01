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
      // console.log(randomNumbers)
    }
    
    // console.log(randomNumbers)

  const Navigate = useNavigate()

const [pData , setPdata]=useState([]);
const [productID , setProductID]=useState('');
const [heart , setHeart]=useState('🤍');
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
  setProductID(pData.id)
  setBtn("Added")
  console.log(productID)
}

const heartClick = ()=>{

  heart==='🤍'?setHeart('❤️'):setHeart('🤍')

}

useEffect(()=>{
getProductDetails(id)
generateRandomNumbers()
},[])

{/* <link rel="icon" href="./Images/mine wine logo.jpg"></link> */}
return (
  <div id="allProdDetails">
    {/* <h2>hi</h2> */}
    <div id="prodImgDiv">
      <img src={pData.img_url} alt={pData.name} />
      <h3>{pData.name}</h3>
    </div>
    <div id="prodDetails">
      <div id="rate-stock-fav">
       
        <span> ★ {pData.rating}</span>
        <hr></hr>
        <span>Rating :{pData.rating}</span>
        <hr></hr>
        <span>In stock</span>
        <hr></hr>
        
        <span className="heart" onClick={heartClick}>{heart}</span>
      </div>
      <div id='SecoundDiv'>
        <div id="aboutProd">
         
          <p>Product code: {randomNumbers}</p>

          <h5> Country : {pData.region}   <img id='FlagID' src={pData.flag} alt="" /></h5>

        </div>
        <div id="description">
          <span>A mix of red and blue fruit thc nose unfolds with distinctive layers of violets. spice notes, and the fresh, haunting quality of an evergreen forest</span>
        </div>
        <div id="bottle-button">
          <button>0.75 L</button>
          <p id="quantityDiv">{pData.rating} bottles left</p>
        </div>
      </div>
      <div id="paymentDiv">
        <div id="priceDiv">${pData.price}</div>
        <div id="cartDiv">
          <button onClick={handleClick}>{btn}</button>
        </div>
        <div id="quickOrderDiv" onClick={() => window.location.href = 'cart.html'}>
          <button>Quick order</button>
        </div>
      </div>
      
    </div>
  </div>
);
}

export default ProductDetails

