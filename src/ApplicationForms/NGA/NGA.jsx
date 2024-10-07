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

  return (
    <div className="form-container">
      <h1 className="form-title">ISSUANCE OF TREE CUTTING AND/OR EARTH BALLING PERMIT FOR TREES AFFECTED BY PROJECTS OF NATIONAL GOVERNMENT AGENCIES</h1>
      <h4>(DPWH, DOTr, DepED, DA, DOH, CHED, DOE and NIA)</h4>

      <form onSubmit={handleSubmit} className="permit-form">
        <div className="section">
          <h2>Requesting Party</h2>
          <div className="form-group">
            <label htmlFor="name">Name: *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Lastname, Firstname M.I."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="e.g. 09876543210"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section">
          <h2>Project Location</h2>
          <div className="form-group">
            <label htmlFor="province">Province:</label>
            <input
              type="text"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="municipality1">Municipality 1:</label>
            <input
              type="text"
              id="municipality1"
              name="municipality1"
              value={formData.municipality1}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="barangay1">Barangay 1:</label>
            <input
              type="text"
              id="barangay1"
              name="barangay1"
              value={formData.barangay1}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section">
          <h2>Agency</h2>
          <div className="form-group">
            <label htmlFor="officeName">Office Name:</label>
            <input
              type="text"
              id="officeName"
              name="officeName"
              value={formData.officeName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="officeAddress">Office Address:</label>
            <input
              type="text"
              id="officeAddress"
              name="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section">
          <h2>Upload Requirements</h2>
          <div className="form-group">
            <label>Within Protected Area? *</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isProtectedArea"
                  value={true}
                  checked={formData.isProtectedArea === true}
                  onChange={handleChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isProtectedArea"
                  value={false}
                  checked={formData.isProtectedArea === false}
                  onChange={handleChange}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="barangayCert">LGU Endorsement/ Certification of No Objection (Barangay) *</label>
            <input type="file" id="barangayCert" name="barangayCert" onChange={handleFileChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="municipalityCert">LGU Endorsement/ Certification of No Objection (Municipality/City) (optional)</label>
            <input type="file" id="municipalityCert" name="municipalityCert" onChange={handleFileChange} />
          </div>

          <div className="form-group">
            <label htmlFor="otherAttachment">Other Attachment (optional)</label>
            <input type="file" id="otherAttachment" name="otherAttachment" onChange={handleFileChange} />
          </div>

          <div className="form-group">
            <label htmlFor="sitePlan">Approved Site Development Plan/ Infrastructure Plan with Tree Charting *</label>
            <input type="file" id="sitePlan" name="sitePlan" onChange={handleFileChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="waiver">Waiver/Consent of Owner/s, if Titled Property</label>
            <input type="file" id="waiver" name="waiver" onChange={handleFileChange} />
          </div>

          <div className="form-group">
            <label htmlFor="ecc">Environmental Compliance Certificate (ECC)/ Certificate of Non-Coverage (CNC) *</label>
            <input type="file" id="ecc" name="ecc" onChange={handleFileChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="fpic">Free, Prior and Informed Consent (FPIC), if applicable</label>
            <input type="file" id="fpic" name="fpic" onChange={handleFileChange} />
          </div>

          <div className="form-group">
            <label htmlFor="pambClearance">PAMB Clearance/Resolution, if within Protected Areas</label>
            <input type="file" id="pambClearance" name="pambClearance" onChange={handleFileChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default NGA;
