import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const permits = [
    { title: "Paymongo", description: "Pay Now", link: "/bill-collector-dashboard" },
    { title: "Bill Collector Dashboard", description: "Pay Now", link: "/bill-collector-dashboard" },
    { title: "Certificate of Verification", description: "Application for Certificate of Verification", link: "/cov" },
    { title: "Private Tree Plantation Registration", description: "Application for Private Tree Plantation Registration", link: "/ptpr" },
    { title: "Public Land Timber Permit", description: "Application for Public Land Timber Permit", link: "/pltp" },
    { title: "Tree Cutting for Public Safety", description: "Application for Tree Cutting", link: "/tcp_public" },
    { title: "Order of Payment", description: "Order of Payment for every template", link: "/order" },
    { title: "National Government Agency Tree Cutting Permit", description: "Application for Public Tree Cutting Permit", link: "/nga" },
    // Add the new chainsaw certificate here
    { title: "Chainsaw Certificate", description: "Application for Chainsaw Certificate of Registration", link: "/chainsaw-certificate" },
    { title: "Certificate of Verification", description: "Application for Certificate of Verification", link: "/certificate-of-verification" },
    { title: "Private Tree Plantation Registration", description: "Application for Private Tree Plantation Registration", link: "/private-tree-plantation-registration" },
  ];

  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <img src="logo.png" alt="PermitTree" className="logo" />
          {/* Navigation menu removed */}
        </div>
      </header>

      <main className="main-content">
        <h1 className="page-title">Permit Applications</h1>
        <div className="permit-grid">
          {permits.map((permit, index) => (
            <Link to={permit.link} key={index} className="permit-card">
              <h3 className="permit-title">{permit.title}</h3>
              <p className="permit-description">{permit.description}</p>
              <span className="apply-button">Apply Now</span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2023 PermitTree - DENR-PENRO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
