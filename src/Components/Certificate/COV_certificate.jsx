import React from 'react';
import './Styles/COV_certificate.css';
import denrLogo from './denrlogo.png';

const COVCertificate = () => {
  return (
    <div className="cov-certificate">
      <header className="certificate-header">
        <img src={denrLogo} alt="DENR Logo" className="logo" />
        <div className="header-text">
          <p>Republic of the Philippines</p>
          <p>Department of Environment and Natural Resources</p>
          <p>PENRO Marinduque</p>
        </div>
      </header>
      <div className="red-line"></div>
      
      <div className="control-number-container">
        <span className="control-number-label">Control No.</span>
        <span className="data-line control-number-value"></span>
      </div>
      
      <h1 className="title">CERTIFICATE OF VERIFICATION</h1>
      
      <div className="main-content">
        <p><strong>To all concern:</strong></p>
        <p>Be informed that I, <span className="data-line"></span> is a holder of Private Land Timber Permit from the DENR PENRO Marinduque bearing control Number PLTP No. <span className="data-line"></span> to cut/utilize/manufacture <span className="data-line"></span> (<span className="data-line"></span>) mahogany (<i>Swietenia macrophylla</i>) trees located at Brgy. <span className="data-line"></span>, Boac, Marinduque. That I am transporting the following forest products gathered from Brgy. <span className="data-line"></span>, Boac, Marinduque described as follows, to wit:</p>
        
        <ol>
          <li>Kind, species, quantity & vol. of forest products: <span className="data-line"></span></li>
          <li>Conveyance: <span className="data-line"></span></li>
          <li>Driver: <span className="data-line"></span></li>
          <li>Consignee/Destination: <span className="data-line"></span></li>
        </ol>
        
        <div className="signature-line right-align">
          <span className="data-line"></span>
          <p>Owner</p>
        </div>
      </div>
      
      <div className="certification">
        <h2>CERTIFICATION</h2>
        <p><strong>To whom it may concern:</strong></p>
        <p>This is to certify that the above described forest products had been verified by this Office to have originated from the private land and is hereby allowed to be transported with the following particulars:</p>
        
        <div className="route-and-validity">
          <div className="info-row">
            <span className="info-label">Described Route:</span>
            <span className="info-value">From : <span className="data-line"></span></span>
          </div>
          <div className="info-row">
            <span className="info-label"></span>
            <span className="info-value">To : <span className="data-line"></span></span>
          </div>
          <div className="info-row">
            <span className="info-label">Validity Date:</span>
            <span className="info-value">From : <span className="data-line"></span></span>
          </div>
          <div className="info-row">
            <span className="info-label"></span>
            <span className="info-value">To : <span className="data-line"></span></span>
          </div>
          <div className="info-row">
            <span className="info-label">Others:</span>
            <span className="info-value"><span className="data-line"></span></span>
          </div>
        </div>
        
        <p>Certification and inspection fees in the amount of Php <span className="data-line"></span> in favor of the Department and Environment and Natural Resources were paid under Official Receipt No. <span className="data-line"></span> dated <span className="data-line"></span>.</p>
        
        <div className="signatures">
          <div className="signature-block">
            <p>Scaled by:</p>
            <span className="data-line"></span>
            <p>Forest Ranger</p>
          </div>
          <div className="signature-block">
            <p>Attested by:</p>
            <span className="data-line"></span>
            <p>Chief, Technical Services Division</p>
          </div>
        </div>
        
        <p>SUBSCRIBED AND SWORN to before me this <span className="data-line"></span> day of <span className="data-line"></span> at Boac, Marinduque.</p>
        
        <div className="final-signature">
          <span className="data-line">__________________</span>
          <p>OIC, PENR Officer</p>
          <p>Authorized Person to Administer Oath</p>
        </div>

        <div className="arrival-confirmation">
          <p className="note">NOTE: The shipper is liable of any unaccounted lumbers or forest products aside from the herein certified lumber shipment.</p>
          <p className="permit-warning centered">THIS PERMIT IS NOT VALID IF IT CONTAINS ERASURE OR ALTERATION</p>
          <div className="dotted-line"></div>
          <p className="control-number">Control No.: <span className="data-line"></span></p>
          <h3>ARRIVAL CONFIRMATION RECEIPT</h3>
          <p>Date: <span className="data-line"></span></p>
          <p>This is to acknowledge the arrival of the transported forest products within this area of responsibility with the following particulars, to wit:</p>
          <div className="confirmation-details">
            <div className="detail-row">
              <p>1. Volume, kind and species: <span className="data-line"></span></p>
              <p>4. Date of Arrival: <span className="data-line"></span></p>
            </div>
            <div className="detail-row">
              <p>2. SMF Control No.: <span className="data-line"></span></p>
              <p>5. Consignee/Destination: <span className="data-line"></span></p>
            </div>
            <div className="detail-row">
              <p>3. Description of Conveyance: <span className="data-line"></span></p>
              <p>6. Scaler: <span className="data-line"></span></p>
            </div>
          </div>
          <div className="copy-details">
            <p>ORIGINAL COPY : OWNER TO ACCOMPANY TRANSPORT</p>
            <p>DUPLICATE COPY : PENRO FILE</p>
            <p>TRIPLICATE : OWNER FILE</p>
          </div>
          <p className="validity-note">***Not Valid Without Official DENR PENRO Marinduque Dry Seal***</p>
        </div>
      </div>  {/* End of arrival-confirmation */}
    </div>  
  );
};

export default COVCertificate;
