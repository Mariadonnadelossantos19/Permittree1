import React from 'react';
import './Styles/PTPR_certificate.css';
import denrLogo from './denrlogo.png';

const PTPRCertificate = () => {
  return (
    <div className="ptpr-certificate">
      <header className="certificate-header">
        <img src={denrLogo} alt="DENR Logo" className="logo" />
        <div className="header-text">
          <p>Republic of the Philippines</p>
          <p>Department of Environment and Natural Resources</p>
          <p>PENRO Marinduque</p>
        </div>
      </header>
      
      <div className="red-line"></div>
      
      <h1 className="title">PRIVATE TREE PLANTATION REGISTRATION</h1>
      <p className="registration-number">No. <span className="data-line"></span></p>
      
      <section className="owner-info">
        <h2>Owner's Basic Information</h2>
        <table>
          <tr><td>Name</td><td></td></tr>
          <tr><td>Permanent Address</td><td></td></tr>
          <tr><td>Contact Number</td><td></td></tr>
          <tr><td>Email Address</td><td></td></tr>
        </table>
      </section>
      
      <section className="plantation-location">
        <h2>Tree Plantation Location</h2>
        <table>
          <tr>
            <td>OCT/TCT No/ Tax. Dec No.</td>
            <td></td>
          </tr>
          <tr>
            <td>Barangay/s</td>
            <td></td>
          </tr>
          <tr>
            <td>Municipality/ies</td>
            <td></td>
          </tr>
          <tr>
            <td>Province</td>
            <td></td>
          </tr>
          <tr className="total-lot-area">
            <td>Total Lot Area</td>
            <td></td>
            <td>Total Lot Area Devoted to Plantation</td>
            <td></td>
          </tr>
          <tr>
            <td>Tree Species Planted</td>
            <td></td>
          </tr>
        </table>
      </section>
      
      <section className="attachments">
        <h2>Attachments</h2>
        <table>
          <tr><td><input type="checkbox" /> Copy of Tax Declaration</td></tr>
          <tr><td><input type="checkbox" /> GIS Generated Map of Tree Plantation</td></tr>
        </table>
      </section>
      
      <section className="certification">
        <p>I hereby certify that the above information are true and correct.</p>
        <div className="signature-section">
          <div className="signature-line">
            <span className="signature-placeholder"></span>
            <p>Signature over Printed Name of the Applicant</p>
          </div>
          <div className="date-line">
            <span className="date-placeholder"></span>
            <p>Date Submitted</p>
          </div>
        </div>
        
        <p>I hereby certify that the above information are verified and the Private Tree Plantation registration is approved:</p>
        <div className="signature-section">
          <div className="signature-line">
            <p className="officer-name">IMELDA M. DIAZ</p>
            <p>OIC-PENR OFFICER</p>
          </div>
          <div className="date-line">
            <span className="date-placeholder"></span>
            <p>Date Approved</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PTPRCertificate;
