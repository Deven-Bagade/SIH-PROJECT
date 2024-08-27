import React, { useState } from 'react';
import './SecondHand.css';

function Secondhand({ secondHandData }) {
  // State for the selected filter category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle filter changes
  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter the data based on the selected category
  const filteredData = selectedCategory
    ? secondHandData.filter((data) => data.category === selectedCategory)
    : secondHandData;

  return (
    <>
    <div className="categorydiv">
  {/* Your content here */}
  <label>Category</label>
  <select
    id="categoryfilter"
    name="categoryfilter"
    value={selectedCategory}
    onChange={handleFilterChange}
    required
  >
    <option value="" disabled>Filter</option>
    <option value="laptop">Laptop</option>
    <option value="smartphone">Smartphone</option>
    <option value="tablet">Tablet</option>
    <option value="smartwatch">Smartwatch</option>
    <option value="camera">Camera</option>
    <option value="headphones">Headphones</option>
    <option value="tv">Television</option>
  </select>
</div>


      <div className="product-cards-container">
        
        {filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <div key={index} className="product-card">
              <img src="https://via.placeholder.com/320x200" alt={data.productName} />
              <div className="product-details">
                <div className="product-name">{data.productName}</div>
                <div className="product-description">{data.description}</div>
                <div className="product-price">${data.price}</div>
                <div className="product-contact">Contact: {data.contactInfo}</div>
                <button className="product-button">More Details</button>
              </div>
            </div>
          ))
        ) : (
          <p>No data available for the selected category.</p>
        )}
      </div>
    </>
  );
}

export default Secondhand;
