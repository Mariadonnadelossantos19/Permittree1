import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="PermitTree" className="logoImage" />
        </div>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mainContainer">
        <h1 className="pageTitle">Permit Applications</h1>

        <div className="permitGrid">
          {/* Paymongo */}
          <div className="permitCard">
            <h3 className="permitTitle">Paymongo</h3>
            <p className="permitDescription">Pay Now</p>
            <Link to="/bill-collector-dashboard" className="applyButton">APPLY</Link>
          </div>

          {/* Bill Collector Dashboard */}
          <div className="permitCard">
            <h3 className="permitTitle">Bill Collector Dashboard</h3>
            <p className="permitDescription">Pay Now</p>
            <Link to="/bill-collector-dashboard" className="applyButton">APPLY</Link>
          </div>

          {/* Certificate of Verification */}
          <div className="permitCard">
            <h3 className="permitTitle">Certificate of Verification</h3>
            <p className="permitDescription">Application for Certificate of Verification</p>
            <Link to="/cov" className="applyButton">APPLY</Link>
          </div>

          {/* Private Tree Plantation Registration */}
          <div className="permitCard">
            <h3 className="permitTitle">Private Tree Plantation Registration</h3>
            <p className="permitDescription">Application for Private Tree Plantation Registration</p>
            <Link to="/ptpr" className="applyButton">APPLY</Link>
          </div>

          {/* Public Land Timber Permit */}
          <div className="permitCard">
            <h3 className="permitTitle">Public Land Timber Permit</h3>
            <p className="permitDescription">Application for Public Land Timber Permit</p>
            <button className="applyButton">APPLY</button>
          </div>

          {/* Tree Cutting for Public Safety */}
          <div className="permitCard">
            <h3 className="permitTitle">Tree Cutting for Public Safety</h3>
            <p className="permitDescription">Application for Tree Cutting</p>
            <Link to="/cov" className="applyButton">APPLY</Link>
          </div>

          {/* Order of Payment */}
          <div className="permitCard">
            <h3 className="permitTitle">Order of Payment</h3>
            <p className="permitDescription">Order of Payment for every template</p>
            <Link to="/order" className="applyButton">APPLY</Link>
          </div>

          {/* National Government Agency Tree Cutting Permit */}
          <div className="permitCard">
            <h3 className="permitTitle">National Government Agency Tree Cutting Permit</h3>
            <p className="permitDescription">Application for Public Tree Cutting Permit</p>
            <Link to="/nga" className="applyButton">APPLY</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 PermitTree - DENR-PENRO. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
