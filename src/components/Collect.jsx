import React, { useState } from 'react';
import './Sell.css'; // Ensure this path is correct

function Collect({ scrapData }) {
  const [selectedCategory, setSelectedCategory] = useState(''); // State to track selected category

  // Handler for category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filtered scrap data based on selected category
  const filteredScrapData = selectedCategory
    ? scrapData.filter((scrapItem) => scrapItem.category === selectedCategory)
    : scrapData;

  return (
    <div>
      {/* Buttons for each category */}
      <div className="category-buttons-container">
        <button className="category-button" onClick={() => handleCategoryClick('wetwaste')}>Wet Waste</button>
        <button className="category-button" onClick={() => handleCategoryClick('plastic')}>Plastic</button>
        <button className="category-button" onClick={() => handleCategoryClick('paper')}>Paper</button>
        <button className="category-button" onClick={() => handleCategoryClick('glass')}>Glass</button>
        <button className="category-button" onClick={() => handleCategoryClick('metal')}>Metal</button>
        <button className="category-button" onClick={() => handleCategoryClick('wood')}>Wood</button>
        <button className="category-button" onClick={() => handleCategoryClick('e-waste')}>E-waste</button>
        <button className="category-button" onClick={() => handleCategoryClick('')}>Show All</button>
      </div>

      {/* Display filtered scrap data */}
      {filteredScrapData.length > 0 ? (
        <div className="product-cards-container">
          {filteredScrapData.map((scrapItem) => (
            <div className="product-card" key={scrapItem.id || Math.random()}>
              <img src="https://via.placeholder.com/320x200" alt={scrapItem.productName} />
              <div className="product-details">
                <div className="product-name">{scrapItem.productName}</div>
                <div className="product-description">{scrapItem.description}</div>
                <div className="product-weight">Weight: {scrapItem.weight}</div>
                <div className="product-category">Category: {scrapItem.category}</div>
                <div className="product-contact">Contact: {scrapItem.contactInfo}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No scrap data found for this category.</p>
      )}
    </div>
  );
}

export default Collect;
