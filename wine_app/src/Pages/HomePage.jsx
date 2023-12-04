import React from 'react';
// import './index.css'; // Make sure to import your CSS file
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const navigate = useNavigate();
  const handlePopUp = () => {
    setPopupVisible(false);
    navigate("/");
    
  }
  const handlePopNo = () => {
    
    navigate("/login");
    
  }
    return (
 <div>
            
            {/* {/* Popup } */}
            {isPopupVisible ? (
            <div id="popup">
                 <div id="popup-content">
                    <p>Are you over 18 years old?</p>
                    <button id="yes-button" onClick={handlePopUp}>Yes, I'm confirmed!</button>
                    <button id="no-button" onClick={handlePopNo}>No, I'm not 18+</button>
                </div> 
             </div> 
            ) : ("")} 


            {/* Slide Carousel */}
            <div className='content'><h1>Wines form the best vineyards!</h1></div>

      <div class="slider">

        <div class="slides">

          <div class="slide">
            <img src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
            <div class="content">
                <div>
                <h1>DISCOVER OUR NEW ARRIAVALS!</h1>
                <button class="shopnow">Shop Now</button>
                </div>
            </div>
          </div>
          <div class="slide">
            <img src="https://media.istockphoto.com/id/640078294/photo/valentines-day-greeting-card.jpg?s=612x612&w=0&k=20&c=_Sd0umhkNA4IPVr_dRMltHhbRg4qiEIzI816VcBCt2U=" alt=" "/>
            <div class="content">
             
            </div>
          </div>
          <div class="slide">
            <img src="https://stonefishinternational.com.au/wp-content/uploads/2016/03/Vineyard-Slider-Background.jpg" alt=""/>
            <div class="content">
                
            </div>
          </div>
        </div>
      </div>
    
      <div class="slider-controls">
        <input type="radio" name="slider-radio" id="radio1"/>
        <label for="radio1"></label>
        <input type="radio" name="slider-radio" id="radio2"/>
        <label for="radio2"></label>
        <input type="radio" name="slider-radio" id="radio3"/>
        <label for="radio3"></label>
      </div>

      <h2 id='WhatWould'>What would you like ?</h2>
      <div id="container_1">
      
        <div id="wine_bottles">
            <div><img src="https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/Images/product-1.png" alt="" />
                <h3>Rose</h3>
            </div>
            <div><img src="https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/Images/product-2.png" alt="" />
                <h3>Sparkling</h3>
            </div>
            <div><img src="https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/Images/product-4.png" alt="" />
                <h3>White</h3>
            </div>
            <div><img src="https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/Images/product-3.png" alt="" />
                <h3>Red</h3>
            </div>
        </div>
    </div>
    {/* <br> */}

    <div id="container_2">
        <h2>Sets and Gifts </h2>
        <div>
            <div>
                <img src="https://hips.hearstapps.com/hmg-prod/images/delicious-red-wine-royalty-free-image-1585590768.jpg?resize=1200:*" alt=""/>
                <h3>Wine glasses</h3>
            </div>
            <div>
                <img src="https://d3f6h8s0w402y5.cloudfront.net/shared/general-image/Gifts-Home-Category-Links-Panel-Wine-Gifts.jpg" alt=""/>
                <h3>Wine sets</h3>
            </div>
            <div>
                <img src="https://www.allrecipes.com/thmb/emKL1qDa5cjFjzKGIGnTwQTAj4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-wine-decanters-tested-tout-62053aea2ad14ad0b8f5f8eb5c6584b4.png" alt=""/>
                <h3>Decanters</h3>
            </div>
             
        </div>
        {/* <button><a href="product.html">View all </a><i class="fa-solid fa-arrow-right-long"></i></button> */ }
        <button onClick={()=>{navigate("/productpage")}}>View All</button>
    </div>

    <div id="container_3">

<div>
    <h2>Wine subscription!</h2>
    <p>subscription is a journey through the world of wine,four bottles at a time. Each month, we select wines based on a chosen theme and explain how each bottle fits that theme - it's wine education and enjoyment in a equal measure!</p>
    <button>More about subscription</button>
</div>

<div>
    <img src="https://buywinesonline.com/cdn/shop/collections/tasting_set_600x600_crop_center.jpg?v=1656710150" alt=""/>
    <img id='secoundImg' src="https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/Images/vertical%20img.jpg" alt=""/>
</div>

</div>

<div id="container_4">
<h2>Blog and News</h2>
<div>
    <div>
        <img src="https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""/>
        <p>29/01/2023</p>
        <h4>Enjoy a fun new way to get to know wine</h4>
    </div>
    <div>
        <img src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/61097_etched-wine-glass-set-and-red-wine.jpeg" alt=""/>
        <p>10/02/2023</p>
        <h4>Wine and oysters. A rule just waiting to be broken</h4>
    </div>
    <div>
        <img src="https://djhiy8e1dslha.cloudfront.net/media/images/product/Medium/I00223533-1630654252.jpg" alt=""/>
        <p>17/02/2023</p>
        <h4>A brief (troubled) history of Champagne</h4>
    </div>
    
    {/* <div>
        <img src="https://www.raventos.com/store_site/api/uploads/products/images/original/b9f9685758b108e8c74725d8a3c1888d_phpWTH1Pq.jpg" alt=""/>
        <p>26/02/2023</p>
        <h4>The wines we have on our own table right now</h4>
    </div> */}
    
</div>

<div id="container_4_2div">
    <div><img src="https://www.gosanangelo.com/gcdn/-mm-/e96e0643c5689773c8345faf257bfef003d01277/c=0-104-3600-2138/local/-/media/2017/02/17/Phoenix/Phoenix/636229274746961895--04W1087.jpg" alt=""/>
        <p>26/02/2023</p>
        <h4>To drink better, wine lovers need to look beyond the bottle!</h4>
    </div>

    <div>
        <img src="https://resources.chainbox.io/2/pegani/public/pim/a332cb9d-0242-47bf-9b4b-9a5feeb215cb/flasker_0_default.jpg" alt=""/>
        <img src="https://qvc.scene7.com/is/image/QVC/m/09/m92109.001?$aempdlarge$" alt=""/>
    </div>
</div>
</div>



<div id="container_5">
        <img src="https://64dc647497ed712d3fab4cb5--lambent-quokka-6e7d37.netlify.app/Images/wineslide12.png" alt=""/>
        <h3>
            We believe that wine is more than just a drink. It's an experience, a journey through the senses, an exploration of flavours and aromas that captivate the palate and transport us to distant vineyards!
        </h3>
    </div>
    <br/>

    <div id="container_6"/>
        <div id='instaWord'>
            <h3>We are on Instagram</h3>
            <p>@minewine</p>
        </div>


        <div id="insta">
            <img src="https://www.realsimple.com/thmb/kMZlkYmZYnfoFt2u4sugYfLVXfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-wine-health-benefits-ce3be96b730b41cc82f128abb75c2395.jpg" alt=""/>
            <img src="https://www.arishtam.com/wp-content/uploads/2020/03/wine-bottle-beside-grapes-roses-and-several-fruits-on-brown-1407857-scaled.jpg" alt=""/>
            <img src="https://images.ctfassets.net/rxqefefl3t5b/4alBRNnYyWJuVwgkQSyoFU/a1dddd145a9f950c887865bc5e12f622/Virgin-Wines_Image-01.png?fl=progressive&q=80" alt=""/>
            <img src="https://www.niagaravintagewinetours.com/wp-content/uploads/2019/10/what-to-eat-with-wine.jpg" alt=""/>
        </div>
<hr></hr>
     </div> 
    //  </div>
     
    );
}

export default App;
