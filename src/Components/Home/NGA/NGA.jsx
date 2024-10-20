import React, { useState } from 'react';
import './NGA.css';

const NGA = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    position: '',
    email: '',
    province: '',
    municipality1: '',
    barangay1: '',
    officeName: '',
    officeAddress: '',
    isProtectedArea: false,
    barangayCert: '',
    municipalityCert: '',
    otherAttachment: '',
    sitePlan: '',
    waiver: '',
    ecc: '',
    fpic: '',
    pambClearance: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Requesting Party",
    "Project Location",
    "Agency",
    "Upload Requirements"
  ];

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator">
        {steps.map((step, index) => (
          <div key={index} className={`step ${currentStep === index + 1 ? 'active' : ''} ${currentStep > index + 1 ? 'completed' : ''}`}>
            <div className="step-number">{index + 1}</div>
            <div className="step-title">{step}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderProgressBar = () => {
    const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const offices = [
    "DPWH - Department of Public Works and Highways",
    "DOTr - Department of Transportation",
    "DepED - Department of Education",
    "DA - Department of Agriculture",
    "DOH - Department of Health",
    "CHED - Commission on Higher Education",
    "DOE - Department of Energy",
    "NIA - National Irrigation Administration"
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="section nature-inspired">
            <h2>Requesting Party</h2>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="section nature-inspired">
            <h2>Project Location</h2>
            <div className="form-group">
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="Province"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="municipality1"
                value={formData.municipality1}
                onChange={handleChange}
                placeholder="Municipality"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="barangay1"
                value={formData.barangay1}
                onChange={handleChange}
                placeholder="Barangay"
                required
              />
            </div>
            <div className="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  name="isProtectedArea"
                  checked={formData.isProtectedArea}
                  onChange={handleChange}
                />
                Is this a protected area?
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="section nature-inspired">
            <h2>Agency</h2>
            <div className="form-group">
              <label htmlFor="officeName">Office Name:</label>
              <select
                id="officeName"
                name="officeName" 
                value={formData.officeName}
                onChange={handleChange}
                required
              >
                <option value="">Select an office</option>
                {offices.map((office, index) => (
                  <option key={index} value={office}>
                    {office}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="officeAddress"
                value={formData.officeAddress}
                onChange={handleChange}
                placeholder="Office Address"
                required
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="section nature-inspired">
            <h2>Upload Requirements</h2>
            <div className="upload-grid">
              <div className="upload-column">
                <div className="form-group">
                  <label>
                    Barangay Certification:
                    <input
                      type="file"
                      name="barangayCert"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Municipality Certification:
                    <input
                      type="file"
                      name="municipalityCert"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Site Plan:
                    <input
                      type="file"
                      name="sitePlan"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Waiver:
                    <input
                      type="file"
                      name="waiver"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="upload-column">
                <div className="form-group">
                  <label>
                    ECC:
                    <input
                      type="file"
                      name="ecc"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    FPIC (if applicable):
                    <input
                      type="file"
                      name="fpic"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    PAMB Clearance (if applicable):
                    <input
                      type="file"
                      name="pambClearance"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    Other Attachment:
                    <input
                      type="file"
                      name="otherAttachment"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">ISSUANCE OF TREE CUTTING AND/OR EARTH BALLING PERMIT FOR TREES AFFECTED BY PROJECTS OF NATIONAL GOVERNMENT AGENCIES</h1>
      <h4>(DPWH, DOTr, DepED, DA, DOH, CHED, DOE and NIA)</h4>

      {renderStepIndicator()}
      {renderProgressBar()}

      <form onSubmit={handleSubmit} className="permit-form">
        <h2 className="current-step-title">{steps[currentStep - 1]}</h2>
        {renderStep()}

        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="prev-btn">
              Previous
            </button>
          )}
          {currentStep < steps.length && (
            <button type="button" onClick={nextStep} className="next-btn">
              Next
            </button>
          )}
          {currentStep === steps.length && (
            <button type="submit" className="submit-btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NGA;