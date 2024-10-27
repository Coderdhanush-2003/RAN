// Footer.js
import React, { useState } from 'react';
import './Footer.scss'; // Import your SCSS file
import SocialMediaIcons from './social';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    aboutUs: false,
    products: false,
    customers: false,
    infrastructure: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="footer1">
      <div className="container">
        {/* Center Text and Button */}
        <div className="text-center">
          <p className="lead">
            Ready to do your best work? <br /> Let's get you started.
          </p>
          <Link to="/contact" className="btn">Contact</Link>
        </div>

        {/* Five Columns */}
        <div className="row mt-3 item-center">
          <div className="col-12 col-md-2 mb-3">
            {/* Toggle only on mobile */}
            <h5
              onClick={() => toggleSection('aboutUs')}
              style={{ cursor: 'pointer', display: 'none' }} 
            >
              About Us <span>{openSections.aboutUs ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.aboutUs ? 'block' : 'none' }}>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/mission-vision">Mission & Vision</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>About Us</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/mission-vision">Mission & Vision</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('products')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Products <span>{openSections.products ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.products ? 'block' : 'none' }}>
              <li><Link to="/product1">Product 1</Link></li>
              <li><Link to="/product2">Product 2</Link></li>
              <li><Link to="/product3">Product 3</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Products</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/product1">Product 1</Link></li>
              <li><Link to="/product2">Product 2</Link></li>
              <li><Link to="/product3">Product 3</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('customers')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Customers <span>{openSections.customers ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.customers ? 'block' : 'none' }}>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/customer-support">Customer Support</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Customers</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/customer-support">Customer Support</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('infrastructure')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Infrastructure <span>{openSections.infrastructure ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.infrastructure ? 'block' : 'none' }}>
              <li><Link to="/data-centers">Data Centers</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/partners">Partners</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Infrastructure</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/data-centers">Data Centers</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/partners">Partners</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('contact')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Contact <span>{openSections.contact ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.contact ? 'block' : 'none' }}>
              <li><Link to="/email-us">Email Us</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/find-us">Find Us</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Contact</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/email-us">Email Us</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/find-us">Find Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mt-4">
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
