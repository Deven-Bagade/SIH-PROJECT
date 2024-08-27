import React from 'react';
import './SecondHandDiv.css';

function SecondHandDiv({ formData, handleChange, handleSubmit, getCurrentLocation }) {
  return (
    <div className='secondhanddiv'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={getCurrentLocation} className="current-location-button">
            Use Current Location
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="categorydiv2">
  <label htmlFor="category">Category:</label>
  <select
    id="category"
    name="category"
    value={formData.category}
    onChange={handleChange}
    required
  >
    <option value="" disabled>Category</option>
    <option value="laptop">Laptop</option>
    <option value="smartphone">Smartphone</option>
    <option value="tablet">Tablet</option>
    <option value="smartwatch">Smartwatch</option>
    <option value="camera">Camera</option>
    <option value="headphones">Headphones</option>
    <option value="tv">Television</option>
  </select>
</div>


        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo">Contact Information:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default SecondHandDiv;