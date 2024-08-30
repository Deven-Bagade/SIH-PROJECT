import React from 'react';

function ScrapDiv({ formData, handleChange, handleSubmit, getCurrentLocation }) {
  return (
    <div className='scrapdiv'>
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
    <option value="wetwaste">Wet Waste</option>
    <option value="plastic">Plastic</option>
    <option value="paper">Paper</option>
    <option value="glass">Glass</option>
    <option value="metal">Metal</option>
    <option value="wood">Wood</option>
    <option value="e-waste">E-waste</option>
  </select>
</div>

        <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
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

export default ScrapDiv;