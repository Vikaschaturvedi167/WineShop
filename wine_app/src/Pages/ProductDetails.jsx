import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import CartPage from './CartPage';

const ProductDetails = ({id}) => {

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
    console.log("Hello")
  } 
  catch (error) {
    console.log(error)
  }
}
console.log("Hel")

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
},[])

  return (
    <div style={{disply:"flex" , justifyContent:"center" }}>

      <img src={pData.img_url} alt="Product Image" />
      <h2>{pData.name}</h2>
      <h2>{pData.price}</h2>
      <h2>{pData.category}</h2>
      <h1>{pData.region} :-<img src={pData.flag} alt={pData.region} width={"50px"} /></h1>
      <Link></Link>
      <button onClick={handleClick} className='CartAddBtn'>{btn}</button>
    </div>

  )
}

export default ProductDetails


// "id": 1,
//     "img_url": "https://icdn.bottlenose.wine/images/full/509218.png?fit=clip&h=442&w=442&auto=format&ixlib=imgixjs-3.6.1",
//     "name": "LaCappuccina Sauvignon Blanc VNS ",
//     "price": "2860",
//     "category": "White Wine",
//     "region": "Italy",
//     "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Italy_with_border.svg/1500px-Flag_of_Italy_with_border.svg.png",
//     "rating": "4"