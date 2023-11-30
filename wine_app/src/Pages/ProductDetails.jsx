import React, { useEffect, useState } from 'react'
import Link, { NavLink } from "react-router-dom"
import CartPage from './CartPage';

const ProductDetails = ({id}) => {

const [pData , setPdata]=useState([]);

const getProductDetails = async (id) => {
  try {
    const res = await fetch(`https://server-3o3a.onrender.com/products/${id}`);
    console.log(res.data);
    setPdata(res.data)
  } 
  catch (error) {
    console.log(error)
  }
}

const handleClick = ()=>{
  <NavLink to={<CartPage />}>

  </NavLink>
}

useEffect(()=>{
getProductDetails(id)
},[])

  return (
    <div>

      <img src={pData.image} alt="Product Image" />




    </div>

  )
}

export default ProductDetails