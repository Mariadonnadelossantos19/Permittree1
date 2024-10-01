import React, { useState } from 'react';
import './NGA.css';  // Import the CSS file

const NGA = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    telephone: '',
    purpose: '',
    intentLetter: null,
    lguEndorsement: null,
    landTenure: null,
    siteDevPlan: null,
    cnc: null,
    fpic: null,
    waiverConsent: null,
    pambClearance: null,
    agreeStatement1: false, // Checkbox for the first statement
    agreeStatement2: false, // Checkbox for the second statement
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeStatement1 || !formData.agreeStatement2) {
      alert('You must agree to both terms before submitting.');
      return;
    }

    console.log(formData);
    // Submit logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Request for Inventory for Cutting/Earth Balling (NGA's)</h3>

      <div>
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

      <div>
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

      <div>
        <label htmlFor="telephone">Telephone No.:</label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="purpose">For the purpose/s of:</label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
      </div>

      <h4>Submitted Requirements:</h4>

      <div>
        <label htmlFor="intentLetter">Written Letter of Intent (Addressed to OIC-PENRO Officer)</label>
        <input
          type="file"
          id="intentLetter"
          name="intentLetter"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="lguEndorsement">LGU Endorsement/Certification of No Objection</label>
        <input
          type="file"
          id="lguEndorsement"
          name="lguEndorsement"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="landTenure">Approved Land Tenurial Instrument (LTI) / Special Land Use Permit (SLUP)</label>
        <input
          type="file"
          id="landTenure"
          name="landTenure"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="siteDevPlan">Approved Site Development Plan with tree charting</label>
        <input
          type="file"
          id="siteDevPlan"
          name="siteDevPlan"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="cnc">Certificate of Non-Coverage or Environmental Compliance Certificate (CNC/ECC)</label>
        <input
          type="file"
          id="cnc"
          name="cnc"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="fpic">Free, Prior and Informed Consent (FPIC), if applicable</label>
        <input
          type="file"
          id="fpic"
          name="fpic"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="waiverConsent">Waiver/Consent of owner/s, if titled property</label>
        <input
          type="file"
          id="waiverConsent"
          name="waiverConsent"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="pambClearance">PAMB Clearance/Resolution, if within Protected Area</label>
        <input
          type="file"
          id="pambClearance"
          name="pambClearance"
          onChange={handleChange}
          required
        />
      </div>

      <div className="terms">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agreeStatement1"
            name="agreeStatement1"
            checked={formData.agreeStatement1}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agreeStatement1">
            I/We understand that the filing of this application does not convey the authority to cut or use the trees subject of the application until such time that a Permit or Clearance is issued by the DENR.
          </label>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="agreeStatement2"
            name="agreeStatement2"
            checked={formData.agreeStatement2}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agreeStatement2">
            I/We further understand that any false statement, misinterpretation, or misdeclaration stated herein shall be grounds for denial and/or revocation of the application/permit.
          </label>
        </div>
      </div>

      <button type="submit" disabled={!formData.agreeStatement1 || !formData.agreeStatement2}>
        Submit
      </button>
    </form>
  );
};

export default NGA;
