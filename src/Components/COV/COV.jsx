import React, { useState } from 'react';
import './COV.css';

function COV() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cellphone: '',
    purpose: '',
    driverName: '',
    driverLicenseNumber: '',
    vehiclePlateNumber: '',
    originAddress: '',
    destinationAddress: '',
    letterOfIntent: null,
    tallySheet: null,
    forestCertification: null,
    orCr: null,
    driverLicense: null,
    specialPowerOfAttorney: null,
  });

  const [step, setStep] = useState(1);

  const steps = [
    { number: 1, title: 'Applicant Information' },
    { number: 2, title: 'Purpose of Application' },
    { number: 3, title: 'Driver Information' },
    { number: 4, title: 'Transport Information' },
    { number: 5, title: 'Document Uploads' },
    { number: 6, title: 'Review Application' },
  ];

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
    setFormData({
      name: '',
      address: '',
      cellphone: '',
      purpose: '',
      driverName: '',
      driverLicenseNumber: '',
      vehiclePlateNumber: '',
      originAddress: '',
      destinationAddress: '',
      letterOfIntent: null,
      tallySheet: null,
      forestCertification: null,
      orCr: null,
      driverLicense: null,
      specialPowerOfAttorney: null,
    });
    setStep(1);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step step-1">
            <h2>Applicant Information</h2>
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
          </div>
        );
      case 2:
        return (
          <div className="step step-2">
            <h2>Purpose of Application</h2>
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
          </div>
        );
      case 3:
        return (
          <div className="step step-3">
            <h2>Driver Information</h2>
            <div className="form-group">
              <label htmlFor="driverName">Driver's Name:</label>
              <input
                type="text"
                id="driverName"
                name="driverName"
                value={formData.driverName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="driverLicenseNumber">Driver's License Number:</label>
              <input
                type="text"
                id="driverLicenseNumber"
                name="driverLicenseNumber"
                value={formData.driverLicenseNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehiclePlateNumber">Vehicle Plate Number:</label>
              <input
                type="text"
                id="vehiclePlateNumber"
                name="vehiclePlateNumber"
                value={formData.vehiclePlateNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step step-4">
            <h2>Transport Information</h2>
            <div className="form-group">
              <label htmlFor="originAddress">Origin Address:</label>
              <input
                type="text"
                id="originAddress"
                name="originAddress"
                value={formData.originAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="destinationAddress">Destination Address:</label>
              <input
                type="text"
                id="destinationAddress"
                name="destinationAddress"
                value={formData.destinationAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step step-5">
            <h2>Document Uploads</h2>
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
        );
      case 6:
        return (
          <div className="step step-6">
            <h2>Review Your Application</h2>
            <div className="review-section">
              <h3>Applicant Information</h3>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Cellphone:</strong> {formData.cellphone}</p>
            </div>
            <div className="review-section">
              <h3>Purpose of Application</h3>
              <p>{formData.purpose}</p>
            </div>
            <div className="review-section">
              <h3>Driver Information</h3>
              <p><strong>Driver's Name:</strong> {formData.driverName}</p>
              <p><strong>Driver's License Number:</strong> {formData.driverLicenseNumber}</p>
              <p><strong>Vehicle Plate Number:</strong> {formData.vehiclePlateNumber}</p>
            </div>
            <div className="review-section">
              <h3>Transport Information</h3>
              <p><strong>Origin Address:</strong> {formData.originAddress}</p>
              <p><strong>Destination Address:</strong> {formData.destinationAddress}</p>
            </div>
            <div className="review-section">
              <h3>Uploaded Documents</h3>
              <p><strong>Letter of Intent:</strong> {formData.letterOfIntent ? formData.letterOfIntent.name : 'Not uploaded'}</p>
              <p><strong>Tally Sheet:</strong> {formData.tallySheet ? formData.tallySheet.name : 'Not uploaded'}</p>
              <p><strong>Forest Certification:</strong> {formData.forestCertification ? formData.forestCertification.name : 'Not uploaded'}</p>
              <p><strong>OR/CR:</strong> {formData.orCr ? formData.orCr.name : 'Not uploaded'}</p>
              <p><strong>Driver's License:</strong> {formData.driverLicense ? formData.driverLicense.name : 'Not uploaded'}</p>
              <p><strong>Special Power of Attorney:</strong> {formData.specialPowerOfAttorney ? formData.specialPowerOfAttorney.name : 'Not uploaded'}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cov-container">
      <h1 className="cov-title">Certificate of Verification (DENR)</h1>
      
      <div className="progress-bar">
        <div className="progress" style={{width: `${(step / steps.length) * 100}%`}}></div>
      </div>

      <div className="step-indicator">
        {steps.map((s) => (
          <div 
            key={s.number} 
            className={`step ${step === s.number ? 'active' : ''} ${step > s.number ? 'completed' : ''}`}
          >
            <div className="step-number">{s.number}</div>
            <div className="step-title">{s.title}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        <div className="navigation-buttons">
          {step > 1 && (
            <button type="button" className="btn previous-btn" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 6 && (
            <button type="button" className="btn next-btn" onClick={nextStep}>
              Next
            </button>
          )}
          {step === 6 && (
            <button type="submit" className="btn submit-btn">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default COV;