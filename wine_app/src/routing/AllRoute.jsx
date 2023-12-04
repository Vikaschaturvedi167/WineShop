import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';
import ProductDetails from '../Pages/ProductDetails';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import CartPage from '../Pages/CartPage';
import CheckOutPage from '../Pages/CheckOutPage'
import Delivery from '../Pages/Delivery'
import PaymentPage from '../Pages/PaymentPage'
import Thankyou from '../Pages/Thankyou'
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
<Route path="/cartcheckout" element={<CheckOutPage />} />
<Route path="/Delivery" element={<Delivery/>}/>
<Route path="/payment" element={<PaymentPage/>}/>
<Route path="/thankyou" element={<Thankyou/>}/>
</Routes>
</div>
  )
}
