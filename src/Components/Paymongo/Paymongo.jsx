// src/Components/Paymongo/Paymongo.jsx

import React, { useState } from 'react';
import { FaSpinner, FaArrowRight, FaArrowLeft, FaCreditCard, FaMobileAlt } from 'react-icons/fa';
import './Paymongo.css'; // Ensure this file exists and is correctly referenced

const Paymongo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = "pk_test_ujmeT1tJyxx799BXvrSi4fo1"; // Define the API key at the top level

  const steps = [
    {
      title: "Step 1: Introduction",
      content: "Welcome to the PayMongo payment setup. Let's get started!",
    },
    {
      title: "Step 2: Enter Details",
      content: "Please enter your payment details to proceed.",
    },
    {
      title: "Step 3: Review",
      content: "Review your details before proceeding to payment.",
    },
    {
      title: "Step 4: Complete Payment",
      content: "Click the button below to complete your payment.",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePaymentRedirect = () => {
    window.location.href = `https://developers.paymongo.com/reference/create-a-link?api_key=${apiKey}`; // Use the API key here
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="wrapper-container">
      <header className="header">
        <h1>Secure Payment Gateway</h1>
        <p>Powered by PayMongo</p>
      </header>

      <div className="content">
        <h2>{steps[currentStep].title}</h2>
        <p>{steps[currentStep].content}</p>
        {currentStep === steps.length - 1 && (
          <div>
            {isLoading && (
              <div className="loading-spinner">
                <FaSpinner className="spinner" />
                <p>Loading Payment Gateway...</p>
              </div>
            )}
            <iframe
              src={`https://developers.paymongo.com/reference/create-a-link?api_key=${apiKey}`} // Use the API key here
              title="PayMongo Payment"
              className="payment-iframe"
              onLoad={handleIframeLoad}
            />
          </div>
        )}
        <div className="navigation-buttons">
          {currentStep > 0 && (
            <button onClick={handlePrevious}>
              <FaArrowLeft /> Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button onClick={handleNext}>
              Next <FaArrowRight />
            </button>
          ) : (
            <button onClick={handlePaymentRedirect}>
              Complete Payment <FaArrowRight />
            </button>
          )}
        </div>
      </div>

      <footer className="footer">
        <div className="info">
          <FaCreditCard /> <span>Secure and Reliable</span>
          <FaMobileAlt /> <span>Mobile Friendly</span>
        </div>
      </footer>
    </div>
  );
};

export default Paymongo;