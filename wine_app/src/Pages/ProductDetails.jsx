import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import CartPage from './CartPage';
import "./ProductDetail.css"

const ProductDetails = ({id='1'}) => {


  const [randomNumbers, setRandomNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 
  
    const generateRandomNumbers = () => {
      const newRandomNumbers = [];
      for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        newRandomNumbers.push(randomNumber);
      }
      setRandomNumbers(newRandomNumbers);
      
    }
   
    const bUrl=`https://wine-api.onrender.com/wines`;
    const Myurl = `https://server-3o3a.onrender.com/products/${id}`;

  const Navigate = useNavigate()

const [pData , setPdata]=useState([]);
const [productID , setProductID]=useState('');
const [heart , setHeart]=useState('🤍');
const [btn , setBtn]=useState('Add to Cart');

const getProductDetails = async (id) => {
  try {
    setIsLoading(true);
    const res = await fetch(Myurl);
    const data = await res.json();
    setIsLoading(false)
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
  setProductID(pData)
 
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

const navigationFun=()=>{

}

return (
  <div id="allProdDetails">
    {/* <h2>hi</h2> */}
     {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
    <div id="prodImgDiv">
      <img src={pData.img_url} alt={pData.name} height={"450px"}/>
      
      <h3>{pData.name}</h3>
    </div>
      )
}
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
          <button>1.{randomNumbers[2]} L</button>
          <p id="quantityDiv">{randomNumbers[0]}{randomNumbers[1]} bottles left</p>
        </div>
      </div>
      <div id="paymentDiv">
        <div id="priceDiv">${pData.price}</div>
        <div id="cartDiv">
          <button onClick={handleClick}>{btn}</button>
        </div>
        <div id="quickOrderDiv" onClick={() =>{  Navigate("/Cart")}}>
          <button>Quick order</button>
        </div>
        
      </div>
      <hr></hr>
      <div id='FootImg'>
          <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png' style={{mixBlendMode:"darken"}} alt="" />
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHcaVLWr1861HUjZGI_lske8h3dGAEPwn-yqLBiQ&s' style={{mixBlendMode:"darken"}} alt="" />
          <img src='https://static.vecteezy.com/system/resources/thumbnails/007/634/442/small/bottle-logo-icon-design-template-free-vector.jpg' style={{mixBlendMode:"darken"}} alt="" />
          <img src='https://media.istockphoto.com/id/1375716890/vector/same-day-delivery-icon-vector-for-graphic-design-logo-website-social-media-mobile-app-ui.jpg?s=612x612&w=0&k=20&c=f0tCmdUgj9Fq0pC1Ni9V6v6Jp0LV0UdrKXSUOUd-0gs=' style={{mixBlendMode:"darken"}} alt="" />
        </div>

      <div id='FootP'>
        <p>Free Delivery</p>
        <p>{randomNumbers[3]}{randomNumbers[2]} coins</p>
        <p>Top Brand</p>
        <p>One day delivery</p>
      </div>
      
    </div>
  </div>
);
}

export default ProductDetails
