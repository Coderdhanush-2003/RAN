import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png'; // Ensure the path is correct based on your folder structure
import '../index.css'; // Make sure to import your CSS file
import '../styles.scss'; // Import your SCSS file
import SocialMedia from './social'; 
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <img src={logo} alt="Logo" style={{ width: '300px', height: '100px', paddingLeft: '1px' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto"> {/* Added mx-auto to center the items */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact activeClassName="active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/AboutUs" className="nav-link" activeClassName="active">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Products" className="nav-link" activeClassName="active">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Customers" className="nav-link" activeClassName="active">Customers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Infrastructure" className="nav-link" activeClassName="active">Infrastructure</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ContactUs" className="nav-link" activeClassName="active">Contact</NavLink>
              </li>
            </ul>
            <div className="App">
              {/* Other components */}
              <SocialMedia />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
