import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import ProductDetails from '../Pages/ProductDetails';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import CartPage from '../Pages/CartPage';

export const AllRoute = () => {


  return (
    <div>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/productpage" element={<ProductPage />} />
<Route path="/productdetails" element={<ProductDetails />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/cart" element={<CartPage />} />
</Routes>
</div>
  )
}
