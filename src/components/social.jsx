import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faXTwitter, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import '../index.css'; // Ensure you import your CSS file

function SocialMedia() {
  return (
    <div className="social-media-container">
      <div className="social-media order-lg-last">
        <div className="mb-0 d-flex justify-content-center flex-wrap"> {/* Centering icons */}
          <navbar href="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </navbar>
          <navbar href="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} />
          </navbar>
          <navbar href="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </navbar>
          <navbar href="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </navbar>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
