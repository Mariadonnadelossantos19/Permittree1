import React from 'react';
import './Styles/Csaw_certificate.css';
import denrLogo from './denrlogo.png';
import COVCertificate from './COV_certificate';

const CsawCertificate = ({ certificateData = {} }) => {
  return (
    <div className="certificate">
      <header className="certificate-header">
        <img src={denrLogo} alt="DENR Logo" className="logo" />
        <div className="header-text">
          <p>Republic of the Philippines</p>
          <p>Department of Environment and Natural Resources</p>
          <p>PENRO Marinduque</p>
        </div>
      </header>
      <div className="certificate-title">CERTIFICATE OF REGISTRATION</div>
      <p className="certificate-number">No. MR-MRQ- <span className="data-field">{certificateData.number}</span> (RENEWAL)</p>
      <p className="preamble">
        After having complied with the provisions of DENR Administrative Order No. 2003 – 24,
        Series of 2003 otherwise known as "The Implementing Rules and Regulations of the
        Chainsaw Act of 2002 (RA No. 9175)" entitled "AN ACT REGULATING THE
        OWNERSHIP, POSSESION, SALE, IMPORTATION AND USE OF CHAINSAWS
        PENALIZING VIOLATIONS THEREOF AND FOR OTHER PURPOSES" this Certificate
        of Registration to own, possess and / or use a chainsaw is hereby issued to:
      </p>
      <div className="owner-name data-field">{certificateData.ownerName}</div>
      <p className="owner-title">(Name of Owner)</p>
      <div className="owner-address data-field">{certificateData.ownerAddress}</div>
      <p className="address-title">(Address)</p>
      <p className="info-label">Bearing the following information and descriptions:</p>
      <div className="chainsaw-info">
        <p><span className="info-key">Use of the Chainsaw:</span> <span className="info-value data-field">{certificateData.chainsawUse}</span></p>
        <p><span className="info-key">Brand:</span> <span className="info-value data-field">{certificateData.brand}</span></p>
        <p><span className="info-key">Model:</span> <span className="info-value data-field">{certificateData.model}</span></p>
        <p><span className="info-key">Serial No.:</span> <span className="info-value data-field">{certificateData.serialNo}</span></p>
        <p><span className="info-key">Date of Acquisition:</span> <span className="info-value data-field">{certificateData.acquisitionDate}</span></p>
        <p><span className="info-key">Power Output (kW/bhp):</span> <span className="info-value data-field">{certificateData.powerOutput}</span></p>
        <p><span className="info-key">Maximum Length of Guidebar:</span> <span className="info-value data-field">{certificateData.guidebarLength}</span></p>
        <p><span className="info-key">Country of Origin:</span> <span className="info-value data-field">{certificateData.countryOfOrigin}</span></p>
        <p><span className="info-key">Purchase Price:</span> <span className="info-value data-field">{certificateData.purchasePrice}</span></p>
        <p><span className="info-key">Others:</span> <span className="info-value data-field">{certificateData.others}</span></p>
      </div>
      <div className="certificate-footer">
        <p><span className="info-key">Issued on:</span> <span className="info-value data-field">{certificateData.issuedDate}</span></p>
        <p><span className="info-key">Expiry Date:</span> <span className="info-value data-field">{certificateData.expiryDate}</span></p>
        <p className="footer-note">An authenticated copy of this Certification must accompany the chainsaw at all times.</p>
        <div className="approval">
          <p>APPROVED BY:</p>
          <div className="signature-space"></div>
          <p className="approver-name">IMELDA M. DIAZ</p>
          <p className="approver-title">OIC, PENR Officer</p>
          <div className="additional-info">
            <p><span className="info-key">Amount paid:</span> <span className="info-value data-field">{certificateData.amountPaid}</span></p>
            <p><span className="info-key">OR. No.:</span> <span className="info-value data-field">{certificateData.orNumber}</span></p>
            <p><span className="info-key">Date:</span> <span className="info-value data-field">{certificateData.paymentDate}</span></p>
          </div>
          <p className="validity-note">*** Not valid w/o PENRO Official Seal***</p>
        </div>
      </div>
    </div>

  );
};

export default CsawCertificate;
