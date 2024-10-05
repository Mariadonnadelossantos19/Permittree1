import React, { useState } from "react";
import './BillCollectorDashboard.css'; // Import the updated CSS file

const BillCollectorDashboard = () => {
  // State to manage applicants
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "John Doe",
      permitType: "Tree Cutting Permit",
      amountDue: 500,
      paid: false,
      orderGenerated: false,
      paymentDate: null,
    },
    {
      id: 2,
      name: "Jane Smith",
      permitType: "Forestry Permit",
      amountDue: 1000,
      paid: true,
      orderGenerated: false,
      paymentDate: "2024-10-01",
    },
    {
      id: 3,
      name: "Mike Johnson",
      permitType: "Chainsaw Registration",
      amountDue: 300,
      paid: false,
      orderGenerated: false,
      paymentDate: null,
    },
    // Add more mock applicants if needed
  ]);

  // Inspection team members
  const inspectionTeam = [
    { id: 1, name: "Alice Johnson", role: "Lead Inspector" },
    { id: 2, name: "Mark Thompson", role: "Field Inspector" },
    { id: 3, name: "Sara Brown", role: "Compliance Officer" },
  ];

  // Function to mark payment as paid
  const markAsPaid = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id
          ? { ...applicant, paid: true, paymentDate: new Date().toISOString().slice(0, 10) }
          : applicant
      )
    );
  };

  // Function to generate order of payment
  const generateOrder = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, orderGenerated: true } : applicant
      )
    );
  };

  // Filter pending and confirmed payments
  const pendingPayments = applicants.filter((applicant) => !applicant.paid);
  const confirmedPayments = applicants.filter((applicant) => applicant.paid && !applicant.orderGenerated);

  return (
    <div className="dashboard">
      <h1>Bill Collector Dashboard</h1>

      {/* Inspection Team Section */}
      <section className="team-section">
        <h2>Inspection Team</h2>
        <div className="team-cards">
          {inspectionTeam.map((member) => (
            <div key={member.id} className="team-card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pending Payments Section */}
      <section>
        <h2>Pending Payments</h2>
        {pendingPayments.length === 0 ? (
          <p>No pending payments.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Permit Type</th>
                <th>Amount Due</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingPayments.map((applicant) => (
                <tr key={applicant.id}>
                  <td>{applicant.name}</td>
                  <td>{applicant.permitType}</td>
                  <td>${applicant.amountDue}</td>
                  <td>
                    <button onClick={() => markAsPaid(applicant.id)}>Mark as Paid</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Confirmed Payments Section */}
      <section>
        <h2>Confirmed Payments (Awaiting Order of Payment)</h2>
        {confirmedPayments.length === 0 ? (
          <p>No payments to process.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Permit Type</th>
                <th>Amount Paid</th>
                <th>Payment Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {confirmedPayments.map((applicant) => (
                <tr key={applicant.id}>
                  <td>{applicant.name}</td>
                  <td>{applicant.permitType}</td>
                  <td>${applicant.amountDue}</td>
                  <td>{applicant.paymentDate}</td>
                  <td>
                    <button onClick={() => generateOrder(applicant.id)}>
                      Generate Order of Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Orders of Payment Generated Section */}
      <section>
        <h2>Orders of Payment Generated</h2>
        {applicants.filter((applicant) => applicant.orderGenerated).length === 0 ? (
          <p>No orders have been generated.</p>
        ) : (
          <ul>
            {applicants
              .filter((applicant) => applicant.orderGenerated)
              .map((applicant) => (
                <li key={applicant.id}>
                  Order generated for {applicant.name} ({applicant.permitType})
                </li>
              ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default BillCollectorDashboard;