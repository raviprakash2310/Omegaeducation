
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Navigation,
  ChevronDown,
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [openSection, setOpenSection] = useState('');

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? '' : section));
  };

  const address = 'Street 16A, Kaushik Enclave, Burari, Delhi';
  const mapUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Street+16A%2C+Kaushik+Enclave%2C+Burari%2C+Delhi';

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            <GraduationCap size={30} />
            <span>
              <strong>OMEGA</strong>
              <small>HIGHER EDUCATION CENTRE</small>
            </span>
          </Link>

          <p>
            Omega Higher Education Centre is committed to helping
            students explore educational opportunities and build their future.
          </p>

          <a
            className="footer-instagram"
            href="https://www.instagram.com/omegahighereducationcentre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
            Follow us on Instagram
          </a>
        </div>

        <div className="footer-accordion">
          <button
            className="footer-accordion-trigger"
            type="button"
            aria-expanded={openSection === 'links'}
            onClick={() => toggleSection('links')}
          >
            <span>Quick Links</span>
            <ChevronDown
              className={openSection === 'links' ? 'rotated' : ''}
              size={19}
            />
          </button>

          <div
            className={`footer-accordion-content ${
              openSection === 'links' ? 'is-open' : ''
            }`}
          >
            <Link to="/about">About Us</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="footer-accordion">
          <button
            className="footer-accordion-trigger"
            type="button"
            aria-expanded={openSection === 'contact'}
            onClick={() => toggleSection('contact')}
          >
            <span>Contact Us</span>
            <ChevronDown
              className={openSection === 'contact' ? 'rotated' : ''}
              size={19}
            />
          </button>

          <div
            className={`footer-accordion-content footer-contact-content ${
              openSection === 'contact' ? 'is-open' : ''
            }`}
          >
            <div className="footer-contact-item">
              <MapPin size={19} />
              <div>
                <strong>Our Address</strong>
                <span>{address}</span>
                <a
                  className="footer-map-link"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation size={14} />
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <strong>Mobile Number</strong>
                <a href="tel:9891160799">9891160799</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <strong>Email Address</strong>
                <a href="mailto:kantroyuday@gmail.com">
                  kantroyuday@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container footer-copyright-inner">
          <span>
            © {new Date().getFullYear()} Omega Higher Education Centre.
            All rights reserved.
          </span>

          <span className="footer-designed-by">
            Designed &amp; Developed by{' '}
            <a
              href="https://vatshayantechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vatshayan Technologies
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
