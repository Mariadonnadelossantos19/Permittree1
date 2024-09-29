import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './PTPR.css';
import '../Home/Home'

const PTPR = () => {
  const navigate = useNavigate();
  const [warningMessage, setWarningMessage] = useState(null);

  const handleSaveDraft = () => {
    setWarningMessage({
      message: 'Are you sure you want to save as draft?',
      action: 'saveDraft'
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setWarningMessage({
      message: 'Are you sure you want to submit?',
      action: 'submit'
    });
  };

  const handleConfirm = () => {
    if (warningMessage.action === 'saveDraft') {
      // Add your save draft logic here
      alert('Draft saved successfully!');
    } else if (warningMessage.action === 'submit') {
      // Add your submit logic here
      alert('Form submitted successfully!');
    }
    setWarningMessage(null);
  };

  const handleCancel = () => {
    setWarningMessage(null);
  };

  return (
    <div className="formCard">
      <h2 className="formTitle">Private Tree Plantation Registration</h2>
      
      {warningMessage && (
        <div className="warningMessage">
          <p>{warningMessage.message}</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Owner Basic Information */}
        <h3 className="formSubtitle">Owner Basic Information</h3>
        <div className="formGrid">
          <div className="section">
            <label>Name <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Address <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Contact Number <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Email Address <span className="required">*</span>:</label>
            <input type="email" className="inputField" required />
          </div>
        </div>

        {/* Tree Plantation Location */}
        <h3 className="formSubtitle">Tree Plantation Location</h3>
        <div className="formGrid">
          <div className="section">
            <label>OCT (Original Certificate of Title) <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>TCT (Transfer Certificate of Title) <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Tax Declaration Number <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Barangay <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Municipality <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Province <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Total lot Area <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Total lot Area Devoted to Plantation <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Trees of Species Planted <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>No of Trees Planted <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Spacing of Trees Planted <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
          <div className="section">
            <label>Year Planted <span className="required">*</span>:</label>
            <input type="text" className="inputField" required />
          </div>
        </div>

        {/* Requirements Upload */}
        <h3 className="formSubtitle">Requirements (Upload Files)</h3>
        <div className="formGrid">
          <div className="section">
            <label>Letter of Request <span className="required">*</span>:</label>
            <input type="file" className="fileInput" required />
          </div>
          <div className="section">
            <label>Title or Tax Declaration <span className="required">*</span>:</label>
            <input type="file" className="fileInput" required />
          </div>
          <div className="section">
            <label>DAR Certification (if title is CLOA):</label>
            <input type="file" className="fileInput" />
          </div>
        </div>

        {/* Additional Requirements */}
        <h3 className="formSubtitle">Additional Requirements (if the applicant is a representative)</h3>
        <div className="formGrid">
          <div className="section">
            <label>Special Power of Attorney:</label>
            <input type="file" className="fileInput" />
          </div>
        </div>

        <div className="buttonContainer">
          <button type="button" className="backButton" onClick={() => navigate(-1)}>Back</button>
          <button type="button" className="saveDraftButton" onClick={handleSaveDraft}>Save as Draft</button>
          <button type="submit" className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PTPR;