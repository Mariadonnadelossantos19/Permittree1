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
          {/* Chainsaw Registration */}
          <div className="permitCard">
            <h3 className="permitTitle">Chainsaw Registration</h3>
            <p className="permitDescription">Application for Chainsaw registration</p>
            <button className="applyButton">APPLY</button>
          </div>

          {/* Certificate of Verification */}
          <div className="permitCard">
            <h3 className="permitTitle">Certificate of Verification</h3>
            <p className="permitDescription">Application for Certificate of Verification</p>
            <button className="applyButton">APPLY</button>
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

          {/* Special/Private Land Timber Permit */}
          <div className="permitCard">
            <h3 className="permitTitle">Special/Private Land Timber Permit</h3>
            <p className="permitDescription">Application for Special Private Land Timber Permit</p>
            <button className="applyButton">APPLY</button>
          </div>

          {/* National Government Agency Tree Cutting Permit */}
          <div className="permitCard">
            <h3 className="permitTitle">National Government Agency Tree Cutting Permit</h3>
            <p className="permitDescription">Application for Public Tree cutting permit</p>
            <button className="applyButton">APPLY</button>
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
