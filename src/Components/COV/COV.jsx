import React, { useState } from 'react';
import './COV.css'; // Importing enhanced CSS

function COV() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cellphone: '',
    purpose: '',
    letterOfIntent: null,
    tallySheet: null,
    forestCertification: null,
    orCr: null,
    driverLicense: null,
    specialPowerOfAttorney: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form Submitted Successfully!');
    // Reset form (you can change this part as needed)
    setFormData({
      name: '',
      address: '',
      cellphone: '',
      purpose: '',
      letterOfIntent: null,
      tallySheet: null,
      forestCertification: null,
      orCr: null,
      driverLicense: null,
      specialPowerOfAttorney: null,
    });
  };

  return (
    <div className="form-container">
      <h1>Request for Transport Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cellphone">Cellphone No:</label>
          <input
            type="text"
            id="cellphone"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Purpose of the Application:</label>
          <textarea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>

        {/* File Uploads in Two Rows */}
        <div className="file-upload-container">
          <div className="file-upload-group">
            <label htmlFor="letterOfIntent">Upload the Written Letter of Intent:</label>
            <input
              type="file"
              id="letterOfIntent"
              name="letterOfIntent"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="file-upload-group">
            <label htmlFor="tallySheet">Upload the Tally Sheet of the Lumbers:</label>
            <input
              type="file"
              id="tallySheet"
              name="tallySheet"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="file-upload-group">
            <label htmlFor="forestCertification">Upload Certification of Forest Products:</label>
            <input
              type="file"
              id="forestCertification"
              name="forestCertification"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="file-upload-group">
            <label htmlFor="orCr">Upload OR/CR of the Vehicle/Conveyance:</label>
            <input
              type="file"
              id="orCr"
              name="orCr"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="file-upload-group">
            <label htmlFor="driverLicense">Upload Driver's License:</label>
            <input
              type="file"
              id="driverLicense"
              name="driverLicense"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="file-upload-group">
            <label htmlFor="specialPowerOfAttorney">Upload Special Power of Attorney (if applicable):</label>
            <input
              type="file"
              id="specialPowerOfAttorney"
              name="specialPowerOfAttorney"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Navigation Buttons on the Right Side */}
        <div className="navigation-buttons">
          <button type="button" className="previous-btn">Previous</button>
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default COV;
