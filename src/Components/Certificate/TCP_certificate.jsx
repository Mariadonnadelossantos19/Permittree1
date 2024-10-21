import React from 'react';
import './Styles/TCP_certificate.css';
import logo from './denrlogo.png';

const TCP_certificate = () => {
  return (
    <div className="certificate-container">
      <div className="certificate-page">
        <div className="certificate">
          <div className="header">
            <img src={logo} alt="PENRO Logo" className="logo" />
            <div className="title">
              <p>Republic of the Philippines</p>
              <p>Department of Environment and Natural Resources</p>
              <p>PENRO Marinduque</p>
            </div>
          </div>
          
          <h2 className="permit-title">TREE CUTTING PERMIT</h2>
          <p className="permit-number">NO. DENR PENRO MARINDUQUE-2023-001</p>
          
          <p className="intro-text">
            Pursuant to P.D. 705, as amended, DAO 2018-16, DAO 2020-06 and existing forestry laws, rules,
            and regulations, a <strong>Special Tree Cutting Permit</strong> is hereby granted to:
          </p>
          
          <p className="grantee">
            PROVINCIAL GOVERNMENT OF MARINDUQUE<br />
            REPRESENTED BY GOVERNOR PRESBITERO J. VELASCO
          </p>
          
          <p className="purpose">
            For the Purpose of<br />
            <span className="highlight">IMPLEMENTATION OF PROJECT BY THE DEPARTMENT OF INFORMATION AND</span><br />
            <span className="highlight">COMMUNICATIONS TECHNOLOGY (DICT)</span>
          </p>
          
          <p className="location">
            located at<br />
            Barangay Bangbangalon, Boac, Marinduque
          </p>
          
          <h3 className="conditions-header">Subject to the following conditions:</h3>
          <ol className="conditions">
            <li>The trees requested for removal shall be incorporated in the design of the project to be rehabilitated/reconstructed, to the extent possible, to minimize loss of trees;</li>
            <li>Maximum of four (4) trees, as verified by PENRO Technical Personnel shall be authorized to be cut. These are shown in the table below.</li>
          </ol>

          <table className="tree-table">
            <caption>Table 1. Trees authorized to be cut:</caption>
            <thead>
              <tr>
                <th>Name of Species</th>
                <th>No. of Trees Inventoried</th>
                <th>Gross Volume (cu.m)</th>
                <th>Net Volume (cu.m)</th>
                <th>Tree Category (Planted/ Naturally grown)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mango (Mangifera indica)</td>
                <td>4</td>
                <td>0.86</td>
                <td>0.602</td>
                <td>Planted</td>
              </tr>
              <tr>
                <td><strong>Grand Total</strong></td>
                <td><strong>4</strong></td>
                <td><strong>0.86</strong></td>
                <td><strong>0.602</strong></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <ol start="3" className="conditions">
            <li>The trees cut and parts thereof shall be properly turned over to PENRO Marinduque by the permittee and must be accompanied by a letter indicating the number of logs, species, and its corresponding volume to be officially acknowledged and recorded by the Monitoring and Enforcement Section for proper disposition based on existing guidelines;</li>
            <li>Issues that will arise from the tree cutting should be addressed directly by the permittee;</li>
            <li>Prior to tree cutting operations, a placard or signboard measuring 4' x 8' shall be installed within the cutting area informing the public that the tree cutting operation is authorized by the DENR and indicating the name of the permittee, the purpose of tree cutting and the number of trees to be cut;</li>
            <li>Pursuant to Memorandum dated 20 October 2011 of the Executive Secretary re: "Proposed Additional Exemptions under "Similar Activities" of Section 2, Item 2.2 of Executive Order No. 23 (S. 2011)", the permittee is required to replace each tree to be cut with at least one hundred (100) seedlings, all preferably indigenous species with at least one (1) meter in height to be planted by the permittee in close coordination with PENRO Marinduque in support of National Greening Program (NGP) and Climate Change initiatives of the Government;</li>
            <li>The tree cutting operations shall, at all times, be under the direct supervision of the PENRO Marinduque, or her authorized representative(s);</li>
          </ol>
        </div>
      </div>

      {/* New continuation page */}
      <div className="certificate-page continuation">
        <div className="certificate">
          <div className="header">
            <img src={logo} alt="PENRO Logo" className="logo" />
            <div className="title">
              <p>Republic of the Philippines</p>
              <p>Department of Environment and Natural Resources</p>
              <p>PENRO Marinduque</p>
            </div>
          </div>
          
          <h2 className="permit-title">TREE CUTTING PERMIT</h2>
          <p className="permit-number">NO. DENR PENRO MARINDUQUE-2023-001</p>
          
          <p className="intro-text">
            Pursuant to P.D. 705, as amended, DAO 2018-16, DAO 2020-06 and existing forestry laws, rules,
            and regulations, a <strong>Special Tree Cutting Permit</strong> is hereby granted to:
          </p>
          
          <p className="grantee">
            PROVINCIAL GOVERNMENT OF MARINDUQUE<br />
            REPRESENTED BY GOVERNOR PRESBITERO J. VELASCO
          </p>
          
          <p className="purpose">
            For the Purpose of<br />
            <span className="highlight">IMPLEMENTATION OF PROJECT BY THE DEPARTMENT OF INFORMATION AND</span><br />
            <span className="highlight">COMMUNICATIONS TECHNOLOGY (DICT)</span>
          </p>
          
          <p className="location">
            located at<br />
            Barangay Bangbangalon, Boac, Marinduque
          </p>
          

          <p className="cont-label">Cont...</p>
          <ol start="8" className="conditions-continued">
            <li>The permittee shall be required to undertake measures during and after tree cutting operations to mitigate the possible impacts of the said activity to the locality and the environment;</li>
            <li>The permittee shall be required to undertake measures during and after tree cutting operations to mitigate the possible impacts of the said activity to the locality and the environment; and</li>
            <li>Violation of any of the terms and conditions of the permit issued shall be sufficient ground for the termination/cancellation of this permit, subject to due process without prejudice to the imposition of appropriate penalties pursuant to existing regulations, and one strike policy to concerned DENR official(s) and/or personnel.</li>
          </ol>

          <p className="validity">
            This permit is effective <strong>Fifty (50) days</strong> upon receipt hereof or as soon as the authorized number of trees had already been cut, whichever comes first.
          </p>

          <p className="issuance">
            Issued this 6th Jan., 2023, at DENR PENRO Marinduque, Capitol Compound, Brgy. Bangbangalon, Boac, Marinduque.
          </p>

          <div className="signature">
            <p>By the Authority of the Secretary:</p>
            <img src="signature_placeholder.png" alt="Signature" className="signature-image" />
            <p className="signatory">IMELDA M. DIAZ</p>
            <p className="position">PENR Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCP_certificate;
