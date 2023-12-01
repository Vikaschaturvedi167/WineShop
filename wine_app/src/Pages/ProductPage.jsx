import React, { useState, useEffect } from 'react';
import './styling/products.css'

const ProductPage = () => {
  const [products, setProducts] = useState([]); // State to hold all products
  const [filteredProducts, setFilteredProducts] = useState([]); // State to hold filtered products
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page number
  const productsPerPage = 9; 
  // State to manage applied filters
  const [filters, setFilters] = useState({
    price: null,
    category: '',
    rating: '',
    country: '',
  });

  // Fetching products from an API endpoint on component mount
  useEffect(() => {
    const fetchData = async (pageNumber) => {
      try {
        const res = await fetch(`https://server-3o3a.onrender.com/products`);
        const data = await res.json();
        setProducts(data);
        console.log(data);
        setFilteredProducts(data.slice(0, productsPerPage))
        // setFilteredProducts(data); // Initialize filtered products with all products
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []); // Update products when pageNumber changes
  
  // Function to apply filters and update filtered products
  const applyFilters = () => {
    let filtered = [...products];

    // Applying filters
    if (filters.price) {
      filtered = filtered.filter(product => product.price <= filters.price);
    }

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.rating) {
      filtered = filtered.filter(product => product.rating === filters.rating);
      
    }

    if (filters.country) {
      filtered = filtered.filter(product => product.country === filters.country);
    
    
    }
    // Update the filtered products state
    setFilteredProducts(filtered);
    
  };

  // Handle changes in filters when user interacts with filter inputs
  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  // Apply filters whenever the filter values change
  useEffect(() => {
    applyFilters();
  }, [filters, products]); // Re-run filtering logic when filters or products change
function handleAddToCart(){

}
const handlePageChange = (page) => {
  setCurrentPage(page);
};

// Calculate total pages for pagination
const totalPages = Math.ceil(products.length / productsPerPage);

// Get products for the current page
const startIndex = (currentPage - 1) * productsPerPage;
const endIndex = currentPage * productsPerPage;
const currentProducts = products.slice(startIndex, endIndex);

// Generate page number buttons
const pageNumbers = [];
for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(
    <button key={i} onClick={() => handlePageChange(i)} disabled={currentPage === i} className='pagee'>
      {i}
    </button>
    );
  }


  return (
    <div id='maindiv'>
      {/* Filter inputs */}
      <div id='box'>
      <h2>Apply Filter</h2>
      <div id='filter'>
      <div id='fiterp'>
        {/* Price filter */}
        <label id='pricess'>Price</label>
        <input type="number" onChange={(e) => handleFilterChange('price', +e.target.value)} id='prices'/>
</div>
<div>
        {/* Category filter */}
        <label id='pricess'>Category</label>
        <select onChange={(e) => handleFilterChange('category', e.target.value)} id='select'>
          <option value="" id='option'>All</option>
          <option value="Red Wine" id='option'>Red Wine</option>
          <option value="White Wine" id='option'>White Wine</option>
          <option value="Sparkling Wine" id='option'>Sparkling Wine</option>
          <option value="Rose Wine" id='option'>Rose Wine</option>
        </select>
        </div>


        {/* Rating filter */}
        <div>
        <label id='pricess'>Rating</label>
        <select onChange={(e) => handleFilterChange('rating', e.target.value)} id='select'>
          <option value="" id='option'>All</option>
          
          <option value="5" id='option'>⭐⭐⭐⭐⭐</option>
          <option value="4" id='option'>⭐⭐⭐⭐</option>
          <option value="3" id='option'>⭐⭐⭐</option>
          {/* Add more options for other ratings */}
        </select>
</div>
        {/* Country of Origin filter */}
        <div>
        <label id='pricess'>Country of Origin</label>
        <select onChange={(e) => handleFilterChange('country', e.target.value)} id='select'>
          <option value="" id='option'>All</option>
          <option value="Italy" id='option'>Italy</option>
          <option value="California" id='option'>California</option>
          <option value="Spain" id='option'>Spain</option>
          <option value="France" id='option'>France</option>
          <option value="Portugal" id='option'>Portugal</option>
          
          {/* Add more options for other countries */}
        </select>
        </div>
        </div>
      
      {/* Filter counter */}
      <div>
        {Object.values(filters).filter(Boolean).length > 0 && (
          <p>Active Filters: {Object.values(filters).filter(Boolean).length}</p>
        )}
      </div>
</div>
      {/* Display filtered products */}
      <div>
      <div className='pagi'>
        {pageNumbers}
      </div>
        <div className="product-list">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-item">
              <div className="wineimg" style={{ cursor: 'pointer' }} onClick={() => {
                localStorage.setItem('details', JSON.stringify(product));
                window.location.href = './ProductDetails';
              }}>
              <div id='rating'>
              <span id='rate'> ⭐: {product.rating} </span>
            </div>
                <img src={product.img_url} alt={product.name} />
              </div>
              <div className="nameDiv">
                <h2>{product.name}</h2>
              </div>
              <div className="belowName">
                <img src={product.flag} alt="Flag"  id='flag'/>
                <span id='reg'>{product.region}</span>
                <span id='reg'>{product.category}</span>
               </div>
                <div className="priceDiv">
                <h3>₹ {product.price}</h3>
                <button className="cart" onClick={() => handleAddToCart(product)}>+</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProductPage;
