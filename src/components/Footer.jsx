
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Navigation,
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const address = 'Street 16A, Kaushik Enclave, Burari, Delhi';

  const mapUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Street+16A%2C+Kaushik+Enclave%2C+Burari%2C+Delhi';

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Institute information */}
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
            students explore educational opportunities and build
            their future.
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

        {/* Quick links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Contact details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <MapPin size={19} />
            <div>
              <strong>Our Address</strong>
              <span>{address}</span>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
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

      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Omega Higher Education Centre.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
