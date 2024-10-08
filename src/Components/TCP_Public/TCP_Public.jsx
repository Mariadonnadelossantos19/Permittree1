import React, { useState } from 'react';
import './TCP_Public.css';

function TCP_Public() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Applicant Details
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    
    // Project Location
    region: '',
    province: '',
    cityMunicipality: '',
    barangay: '',
    specificLocation: '',
    
    // Location Type & Upload Requirements
    locationType: '',
    letterOfIntent: null,
    endorsementLetter: null,
    sitePhotos: null,
    sketchPlan: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="form-step">
            <h2>Applicant Details</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Complete Address"
              required
            ></textarea>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2>Project Location</h2>
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Region</option>
              {/* Add region options */}
            </select>
            <select
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Province</option>
              {/* Add province options */}
            </select>
            <select
              name="cityMunicipality"
              value={formData.cityMunicipality}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City/Municipality</option>
              {/* Add city/municipality options */}
            </select>
            <select
              name="barangay"
              value={formData.barangay}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Barangay</option>
              {/* Add barangay options */}
            </select>
            <textarea
              name="specificLocation"
              value={formData.specificLocation}
              onChange={handleInputChange}
              placeholder="Specific Location (e.g., street name, landmarks)"
              required
            ></textarea>
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h2>Location Type & Upload Requirements</h2>
            <select
              name="locationType"
              value={formData.locationType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Location Type</option>
              <option value="plaza">Plaza</option>
              <option value="publicPark">Public Park</option>
              <option value="school">School</option>
              <option value="politicalSubdivision">Political Subdivision</option>
            </select>
            <div className="file-upload">
              <label>Letter of Intent</label>
              <input
                type="file"
                name="letterOfIntent"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="file-upload">
              <label>Endorsement Letter</label>
              <input
                type="file"
                name="endorsementLetter"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="file-upload">
              <label>Site Photos</label>
              <input
                type="file"
                name="sitePhotos"
                onChange={handleFileChange}
                multiple
                required
              />
            </div>
            <div className="file-upload">
              <label>Sketch Plan</label>
              <input
                type="file"
                name="sketchPlan"
                onChange={handleFileChange}
                required
              />
            </div>
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        );
      case 4:
        return (
          <div className="form-step">
            <h2>Review and Submit</h2>
            {/* Display a summary of all entered information */}
            <div className="review-section">
              <h3>Applicant Details</h3>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phoneNumber}</p>
              <p>Address: {formData.address}</p>
            </div>
            <div className="review-section">
              <h3>Project Location</h3>
              <p>Region: {formData.region}</p>
              <p>Province: {formData.province}</p>
              <p>City/Municipality: {formData.cityMunicipality}</p>
              <p>Barangay: {formData.barangay}</p>
              <p>Specific Location: {formData.specificLocation}</p>
            </div>
            <div className="review-section">
              <h3>Location Type & Uploads</h3>
              <p>Location Type: {formData.locationType}</p>
              <p>Letter of Intent: {formData.letterOfIntent ? 'Uploaded' : 'Not uploaded'}</p>
              <p>Endorsement Letter: {formData.endorsementLetter ? 'Uploaded' : 'Not uploaded'}</p>
              <p>Site Photos: {formData.sitePhotos ? 'Uploaded' : 'Not uploaded'}</p>
              <p>Sketch Plan: {formData.sketchPlan ? 'Uploaded' : 'Not uploaded'}</p>
            </div>
            <button onClick={prevStep}>Previous</button>
            <button onClick={() => {/* Handle form submission */}}>Submit Application</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">
        ISSUANCE OF TREE CUTTING PERMIT FOR PLANTED TREES AND NATURALLY GROWING TREES FOR PURPOSES OF PUBLIC SAFETY
      </h1>
      <h2 className="form-subtitle">
        (PLAZA, PUBLIC PARKS, SCHOOL, AND POLITICAL SUBDIVISIONS)
      </h2>

      <div className="progress-bar">
        <div className="progress" style={{width: `${(currentStep / 4) * 100}%`}}></div>
      </div>

      <div className="step-indicator">
        Step {currentStep} of 4
      </div>

      {renderStep()}
    </div>
  );
}

export default TCP_Public;