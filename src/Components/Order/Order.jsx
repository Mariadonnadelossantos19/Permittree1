import React, { useState } from "react";
import './Order.css'; // Import the CSS file

const Order = () => {
  // Initialize state to hold multiple table rows
  const [rows, setRows] = useState([
    { legalBasis: "", description: "", amount: "" }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    applicationNature: "",
    paymentDate: "",
    paymentTime: "",
    releaseDate: "",
    releaseTime: ""
  });

  // Handle change for the input fields within table rows
  const handleRowChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  // Add a new row, up to 5 rows
  const addRow = () => {
    if (rows.length < 5) {
      setRows([...rows, { legalBasis: "", description: "", amount: "" }]);
    }
  };

  // Remove a row
  const removeRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  // Handle change for the main form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", { ...formData, rows });
    // Add functionality here to submit the form data to your backend or API
  };

  return (
    <div className="order-container">
      {/* Title Section */}
      <div className="header">
        <h2>Assessment of Fees and Charges</h2>
        <h4>(SPLTP/PLTP/Clearance to Cut/Certification/WRP/TCP)</h4>
      </div>

      {/* Bill Number Section */}
      <div className="bill-info">
        <div>
          <label htmlFor="billNo">Bill No.</label>
          <input type="text" id="billNo" name="billNo" value=" " readOnly />
        </div>
        <p className="bill-date">09/02/2024</p>
      </div>

      {/* Name/Payee, Address, Nature of Application */}
      <form onSubmit={handleSubmit}>
        <div className="form-group-left">
          <label htmlFor="name">Name/Payee:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="applicationNature">Nature of Application/Permit/Documents:</label>
          <input
            type="text"
            name="applicationNature"
            value={formData.applicationNature}
            onChange={handleChange}
            required
          />
        </div>

        {/* Legal Basis and Fees Section in a Table */}
        <table className="fees-table">
          <thead>
            <tr>
              <th>Legal Basis (DAO/SEC)</th>
              <th>Description and Computation of Fees</th>
              <th>Amount</th>
              <th>Action</th> {/* Column for Remove Action */}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="legalBasis"
                    value={row.legalBasis}
                    onChange={(e) => handleRowChange(index, e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="description"
                    value={row.description}
                    onChange={(e) => handleRowChange(index, e)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="amount"
                    value={row.amount}
                    onChange={(e) => handleRowChange(index, e)}
                    required
                  />
                </td>
                <td>
                  {rows.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRow(index)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {/* Total Row */}
            <tr>
              <td colSpan="2" className="total-label">Total</td>
              <td className="total-amount">
                ₱ {rows.reduce((acc, row) => acc + parseFloat(row.amount || 0), 0).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Add Row Button */}
        {rows.length < 5 && (
          <button type="button" onClick={addRow} className="add-row-button">
            Add Row
          </button>
        )}

        {/* Personnel Section */}
        <div className="signatures">
          <div className="prepared-by">
            <p>SIMEON R. DIAZ<br /><strong>SVEMS/Chief, RPS</strong></p>
          </div>
          <div className="chief">
            <p>Engr. CYNTHIA U. LOZANO<br /><strong>Chief, Technical Services Division</strong></p>
          </div>
        </div>

        {/* Payment and Release Information */}
        <div className="form-group-left">
          <label htmlFor="paymentDate">Date of Payment:</label>
          <input
            type="date"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
          />

          <label htmlFor="paymentTime">Time of Payment:</label>
          <input
            type="time"
            name="paymentTime"
            value={formData.paymentTime}
            onChange={handleChange}
          />

          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
          />

          <label htmlFor="releaseTime">Release Time:</label>
          <input
            type="time"
            name="releaseTime"
            value={formData.releaseTime}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Order;
