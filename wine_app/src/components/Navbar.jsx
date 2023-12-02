import React, { useState } from 'react';
import "./Navbaar.css"; 
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  // const element = <FontAwesomeIcon icon={faEnvelope} />
  // State variables for user and heart shop icons
  const [showUserIcon, setShowUserIcon] = useState(true);
  const [showHeartIcon, setShowHeartIcon] = useState(true);
  const navigate = useNavigate()

  const handleLogin = ()=> {
    navigate("/login");
  }
  const HnadleCart=()=>{
    navigate("/cart");
  }
 
  const handleWines=()=>{
    navigate("/productpage");
  }
  
  const handleRed=()=>{
    navigate("/productpage");
  }

  const handleWhite=()=>{
    navigate("/productpage");
  }
  const handleMainWine=()=>{
    navigate("/");
  }


  return (
    <div id='MainNavDiv'>
    <div id='upper_nav'>
      <div id="left">
        <h4>UA | EN</h4>
        <h4>0 800 123 456</h4>
      </div>
      <div id="right">
      
        
          
           <div id='IconDiv'>
              <img onClick={handleLogin} src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="" />
              <img onClick={HnadleCart} src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/535/535234.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/3121/3121540.png" alt="" />
              </div>
        

    </div>
    
  </div>
<hr id='hr'/>
  <div id='SecoundMAIN' >
  <div id='FirstDiv'>
    <h1 onClick={handleMainWine}>Mine Wine</h1>
  </div>

  <div id='secoudDiv'>
      <h3 onClick={handleWines}>WINES</h3>
      <h3 onClick={handleRed }>RED</h3>
      <h3 onClick={handleWhite}>WHITE</h3>
      <h3>ROSE</h3>
      <h3>SPARKLING</h3>
      <h3>PROMOTIONS</h3>
      <h3>SETS & GIFTS</h3>
  </div>
  <div id='search'>
    <img src="https://cdn-icons-png.flaticon.com/128/3031/3031293.png" alt="" />
    <input type="text"
     placeholder='Type to search...'
     onChange={(e)=>console.log(e.target.value)}/>
    {/* <button></button> */}
  </div>
</div>
<hr id='hr'></hr>
</div>
  )
}

export default Navbar;
