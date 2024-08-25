import React from 'react';
import './SecondHand.css';

function Secondhand({ secondHandData }) {
  console.log('Submitted Data in Secondhand:', secondHandData);

  return (
    <div className="product-cards-container">
      {secondHandData.length > 0 ? (
        secondHandData.map((data, index) => (
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
        <p>No data submitted yet.</p>
      )}
    </div>
  );
}

export default Secondhand;
