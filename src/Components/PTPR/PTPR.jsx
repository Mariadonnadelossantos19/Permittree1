import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PTPR.css';

const PTPR = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    { title: "Owner Information", fields: ["name", "address", "contactNumber", "email"] },
    { title: "Plantation Location", fields: ["oct", "tct", "taxDeclaration", "barangay", "municipality", "province", "totalLotArea", "areaDevotedToPlantation"] },
    { title: "Tree Details", fields: ["treeSpecies", "numberOfTrees", "treeSpacing", "yearPlanted"] },
    { title: "Requirements Upload", fields: ["letterOfRequest", "titleOrTaxDeclaration", "darCertification", "specialPowerOfAttorney"] },
    { title: "Review and Submit", fields: [] }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSaveDraft = () => {
    alert('Draft saved successfully!');
  };  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    alert('Form submitted successfully!');
    // Or navigate to a success page
    // navigate('/success');
  };

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const renderFormFields = (fields) => {
    return fields.map(field => (
      <div key={field} className="ptpr-section">
        <label>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} <span className="ptpr-required">*</span></label>
        <input 
          type={field.includes('email') ? 'email' : field.includes('file') ? 'file' : 'text'} 
          className={field.includes('file') ? "ptpr-fileInput" : "ptpr-inputField"} 
          required={!field.includes('darCertification') && !field.includes('specialPowerOfAttorney')}
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
        />
      </div>
    ));
  };

  const renderReviewSection = () => {
    return steps.slice(0, -1).map((step, index) => (
      <div key={index} className="ptpr-reviewSection">
        <h4>{step.title}</h4>
        {step.fields.map(field => (
          <p key={field}><strong>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> {formData[field] || 'Not provided'}</p>
        ))}
      </div>
    ));
  };

  return (
    <div className="ptpr-container">
      <div className="ptpr-formCard">
        <h2 className="ptpr-formTitle">Private Tree Plantation Registration</h2>
        
        <div className="ptpr-stepIndicator">
          {steps.map((step, index) => (
            <div key={index} className={`ptpr-step ${currentStep === index + 1 ? 'active' : ''}`}>
              <div className="ptpr-stepNumber">{index + 1}</div>
              <div className="ptpr-stepTitle">{step.title}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <h3 className="ptpr-formSubtitle">{steps[currentStep - 1].title}</h3>
          {currentStep < steps.length - 1 ? (
            <div className="ptpr-formGrid">
              {renderFormFields(steps[currentStep - 1].fields)}
            </div>
          ) : (
            <div className="ptpr-reviewContainer">
              {renderReviewSection()}
            </div>
          )}

          <div className="ptpr-buttonContainer">
            {currentStep > 1 && (
              <button type="button" className="ptpr-backButton" onClick={handlePrevious}>Previous</button>
            )}
            {currentStep < steps.length - 1 ? (
              <button type="button" className="ptpr-nextButton" onClick={handleNext}>Next</button>
            ) : (
              <>
                <button type="button" className="ptpr-saveDraftButton" onClick={handleSaveDraft}>Save as Draft</button>
                <button type="submit" className="ptpr-submitButton">Submit</button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PTPR;