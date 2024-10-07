import React, { useState } from "react";
import './BillCollectorDashboard.css'; // Import the updated CSS file

const BillCollectorDashboard = () => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "John Doe",
      permitType: "Tree Cutting Permit",
      amountDue: 500,
      paid: false,
      orderGenerated: false,
      orderSigned: false, // New state to track if the order is signed
      orderSentToClient: false, // New state to track if order is sent to client
      proofOfPaymentUploaded: false, // New state to track if proof of payment is uploaded
      orNumber: null, // OR Number uploaded by the client
      certificateGenerated: false, // New state to track if certificate is generated
      certificateSigned: false, // New state to track if the certificate is signed
      paymentDate: null,
      archived: false,
    },
    // Additional applicants...
  ]);

  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [filterStatus, setFilterStatus] = useState("All"); // Filter for payment status

  // Function to mark payment as paid
  const markAsPaid = (id) => {
    const confirmation = window.confirm("Are you sure you want to mark this payment as paid?");
    if (confirmation) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id
            ? { ...applicant, paid: true, paymentDate: new Date().toISOString().slice(0, 10) }
            : applicant
        )
      );
    }
  };

  // Function to generate order of payment
  const generateOrder = (id) => {
    const confirmation = window.confirm("Are you sure you want to generate an order of payment?");
    if (confirmation) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id ? { ...applicant, orderGenerated: true } : applicant
        )
      );
    }
  };

  // Function to forward the order of payment for signature
  const signOrderOfPayment = (id) => {
    const confirmation = window.confirm("Forward the order of payment for signatures?");
    if (confirmation) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id ? { ...applicant, orderSigned: true } : applicant
        )
      );
    }
  };

  // Function to send signed order of payment to client
  const sendOrderToClient = (id) => {
    const confirmation = window.confirm("Send the signed order of payment to the client?");
    if (confirmation) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id ? { ...applicant, orderSentToClient: true } : applicant
        )
      );
    }
  };

  // Function to upload proof of payment and OR Number
  const uploadProofOfPayment = (id) => {
    const orNumber = prompt("Enter the OR Number:");
    const confirmation = window.confirm("Upload the proof of payment?");
    if (confirmation && orNumber) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id
            ? { ...applicant, proofOfPaymentUploaded: true, orNumber }
            : applicant
        )
      );
    }
  };

  // Function to generate Chainsaw Registration Certificate
  const generateCertificate = (id) => {
    const confirmation = window.confirm("Generate the Chainsaw Registration Certificate?");
    if (confirmation) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id ? { ...applicant, certificateGenerated: true } : applicant
        )
      );
    }
  };

  // Function to sign the certificate and release to client
  const signAndReleaseCertificate = (id) => {
    const confirmation = window.confirm("Sign and release the certificate?");
    if (confirmation) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id ? { ...applicant, certificateSigned: true } : applicant
        )
      );
    }
  };

  // Function to archive an applicant
  const archiveApplicant = (id) => {
    const confirmation = window.confirm("Are you sure you want to archive this applicant?");
    if (confirmation) {
      setApplicants((prevApplicants) =>
        prevApplicants.map((applicant) =>
          applicant.id === id ? { ...applicant, archived: true } : applicant
        )
      );
    }
  };

  // Calculate reports
  const totalPending = applicants.filter((applicant) => !applicant.paid && !applicant.archived).length;
  const totalConfirmed = applicants.filter((applicant) => applicant.paid && !applicant.orderGenerated && !applicant.archived).length;
  const totalOrdersGenerated = applicants.filter((applicant) => applicant.orderGenerated && !applicant.archived).length;
  const totalCollectedPayments = applicants
    .filter((applicant) => applicant.paid && !applicant.archived)
    .reduce((total, applicant) => total + applicant.amountDue, 0);
  const totalPendingAmount = applicants
    .filter((applicant) => !applicant.paid && !applicant.archived)
    .reduce((total, applicant) => total + applicant.amountDue, 0);

  // Filter applicants based on search query and status
  const filteredApplicants = applicants
    .filter((applicant) => !applicant.archived)
    .filter((applicant) => applicant.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((applicant) => {
      if (filterStatus === "All") return true;
      if (filterStatus === "Pending") return !applicant.paid;
      if (filterStatus === "Confirmed") return applicant.paid && !applicant.orderGenerated;
      if (filterStatus === "OrderGenerated") return applicant.orderGenerated;
      return true;
    });

  return (
    <div className="dashboard">
      <h1>Bill Collector Dashboard</h1>

      {/* Reports Section */}
      <div className="reports-section">
        <div className="report-card">
          <h3>Total Pending Payments</h3>
          <p>{totalPending}</p>
          <p>Amount: ${totalPendingAmount}</p>
        </div>
        <div className="report-card">
          <h3>Total Confirmed Payments</h3>
          <p>{totalConfirmed}</p>
        </div>
        <div className="report-card">
          <h3>Orders Generated</h3>
          <p>{totalOrdersGenerated}</p>
        </div>
        <div className="report-card">
          <h3>Total Collected Payments</h3>
          <p>${totalCollectedPayments}</p>
        </div>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search applicants..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Filter tabs */}
      <div className="filter-tabs">
        <button className={filterStatus === "All" ? "active-tab" : ""} onClick={() => setFilterStatus("All")}>All</button>
        <button className={filterStatus === "Pending" ? "active-tab" : ""} onClick={() => setFilterStatus("Pending")}>Pending Payments</button>
        <button className={filterStatus === "Confirmed" ? "active-tab" : ""} onClick={() => setFilterStatus("Confirmed")}>Confirmed Payments</button>
        <button className={filterStatus === "OrderGenerated" ? "active-tab" : ""} onClick={() => setFilterStatus("OrderGenerated")}>Orders Generated</button>
      </div>

      {/* Applicants Table */}
      <section>
        <h2>{filterStatus} Applicants</h2>
        {filteredApplicants.length === 0 ? (
          <p>No applicants found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Permit Type</th>
                <th>Amount Due</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.map((applicant) => (
                <tr key={applicant.id}>
                  <td>{applicant.name}</td>
                  <td>{applicant.permitType}</td>
                  <td>${applicant.amountDue}</td>
                  <td>
                    {applicant.paid ? (
                      applicant.orderGenerated ? (
                        applicant.orderSigned ? (
                          <span className="status-signed">Order Signed</span>
                        ) : (
                          <span className="status-generated">Order Generated</span>
                        )
                      ) : (
                        <span className="status-confirmed">Payment Confirmed</span>
                      )
                    ) : (
                      <span className="status-pending">Pending</span>
                    )}
                  </td>
                  <td>
                    {!applicant.paid && <button onClick={() => markAsPaid(applicant.id)}>Mark as Paid</button>}
                    {applicant.paid && !applicant.orderGenerated && <button onClick={() => generateOrder(applicant.id)}>Generate Order</button>}
                    {applicant.orderGenerated && !applicant.orderSigned && <button onClick={() => signOrderOfPayment(applicant.id)}>Sign Order</button>}
                    {applicant.orderSigned && !applicant.orderSentToClient && <button onClick={() => sendOrderToClient(applicant.id)}>Send to Client</button>}
                    {applicant.orderSentToClient && !applicant.proofOfPaymentUploaded && <button onClick={() => uploadProofOfPayment(applicant.id)}>Upload Proof of Payment</button>}
                    {applicant.proofOfPaymentUploaded && !applicant.certificateGenerated && <button onClick={() => generateCertificate(applicant.id)}>Generate Certificate</button>}
                    {applicant.certificateGenerated && !applicant.certificateSigned && <button onClick={() => signAndReleaseCertificate(applicant.id)}>Sign and Release Certificate</button>}
                    <button onClick={() => archiveApplicant(applicant.id)} className="delete-btn">Archive</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default BillCollectorDashboard;
