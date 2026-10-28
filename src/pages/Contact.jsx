
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Navigation } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const address = 'Street 16A, Kaushik Enclave, Burari, Delhi';

  const mapUrl =
    'https://maps.google.com/maps?q=Street%2016A%2C%20Kaushik%20Enclave%2C%20Burari%2C%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Street+16A%2C+Kaushik+Enclave%2C+Burari%2C+Delhi';

  return (
    <>
      <PageHero
        title="Contact Us"
        text="Have a question about courses or admissions? Get in touch."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>We are here to help.</h2>
            <p>
              Have questions about admissions or courses? Contact
              Omega Higher Education Centre or visit our location.
            </p>

            <div className="contact-item">
              <MapPin />
              <div>
                <strong>Address</strong>
                <span>{address}</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone />
              <div>
                <strong>Phone</strong>
                <a href="tel:9891160799">9891160799</a>
              </div>
            </div>

            <div className="contact-item">
              <Mail />
              <div>
                <strong>Email</strong>
                <span>hello@example.com</span>
              </div>
            </div>

            <a
              className="contact-directions"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <h3>Send an Enquiry</h3>

            <label>
              Full name
              <input required name="name" placeholder="Your full name" />
            </label>

            <label>
              Email address
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                placeholder="Your phone number"
              />
            </label>

            <label>
              Course of interest
              <input name="course" placeholder="Course name (optional)" />
            </label>

            <label>
              Message
              <textarea
                required
                name="message"
                rows="4"
                placeholder="How can we help?"
              />
            </label>

            <button className="button" type="submit">
              Submit Enquiry <Send size={16} />
            </button>

            {submitted && (
              <p className="form-message">
                Demo only: this form has not sent your message.
                Connect a backend to receive enquiries.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-location-section">
        <div className="container">
          <div className="contact-location-heading">
            <p className="eyebrow">FIND US</p>
            <h2>Visit Omega Higher Education Centre</h2>
            <p>
              Find our location in Kaushik Enclave, Burari, Delhi.
            </p>
          </div>

          <div className="contact-map-card">
            <div className="contact-map-info">
              <div className="contact-map-icon">
                <MapPin size={27} />
              </div>

              <h3>Omega Higher Education Centre</h3>

              <p>{address}</p>

              <a
                className="contact-directions"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={17} />
                Open in Google Maps
              </a>
            </div>

            <div className="contact-map">
              <iframe
                title="Omega Higher Education Centre map, Burari, Delhi"
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
