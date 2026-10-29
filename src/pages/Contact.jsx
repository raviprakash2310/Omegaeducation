
import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ExternalLink,
  Clock,
  MessageCircle,
} from 'lucide-react';
import './Contact.css';

const PHONE = '9891160799';
const EMAIL = 'kantroyuday@gmail.com';
const ADDRESS = 'Street 16A, Kaushik Enclave, Burari, Delhi';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      'Hello Omega Higher Education Centre,',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Course of Interest: ${form.course || 'Not specified'}`,
      `Message: ${form.message}`,
    ].join('\n');

    window.open(
      `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h1>
            Let’s Plan Your <span>Future Together</span>
          </h1>
          <p>
            Have questions about admissions or courses? Our team is
            here to help you explore your educational opportunities.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-layout">
            <aside className="contact-info-card">
              <span className="contact-small-label">CONTACT DETAILS</span>
              <h2>We’re Here to Help</h2>
              <p className="contact-info-intro">
                Reach out to us for course information, admission
                guidance or help choosing your next step.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <MapPin size={22} />
                  </span>
                  <div>
                    <h3>Our Address</h3>
                    <p>{ADDRESS}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Street%2016A%2C%20Kaushik%20Enclave%2C%20Burari%2C%20Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <Phone size={22} />
                  </span>
                  <div>
                    <h3>Call Us</h3>
                    <a href={`tel:${PHONE}`}>{PHONE}</a>
                    <span className="contact-info-note">
                      Speak with our team
                    </span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <Mail size={22} />
                  </span>
                  <div>
                    <h3>Email Address</h3>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    <span className="contact-info-note">
                      Send us your questions
                    </span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon">
                    <Clock size={22} />
                  </span>
                  <div>
                    <h3>Admission Enquiries</h3>
                    <p>Contact us to discuss course availability and admissions.</p>
                  </div>
                </div>
              </div>

              <div className="contact-whatsapp-box">
                <div className="contact-whatsapp-icon">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3>Prefer WhatsApp?</h3>
                  <p>Send us your enquiry directly.</p>
                </div>
                <a
                  href={`https://wa.me/91${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </aside>

            <section className="contact-form-card">
              <span className="contact-small-label">SEND AN ENQUIRY</span>
              <h2>How Can We Help You?</h2>
              <p className="contact-form-intro">
                Fill in your details below. Your enquiry will open in
                WhatsApp so you can send it to our team.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      pattern="[0-9+\s()-]{8,18}"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-course">Course of Interest</label>
                    <select
                      id="contact-course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                    >
                      <option value="">Select a course</option>
                      <option value="Undergraduate Programmes">
                        Undergraduate Programmes
                      </option>
                      <option value="Postgraduate Programmes">
                        Postgraduate Programmes
                      </option>
                      <option value="Professional Courses">
                        Professional Courses
                      </option>
                      <option value="Other Course">Other</option>
                    </select>
                  </div>

                  <div className="contact-field contact-field-full">
                    <label htmlFor="contact-message">Your Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what information you need..."
                      rows={5}
                      required
                    />
                  </div>
                </div>

                <button className="contact-submit" type="submit">
                  Send Enquiry on WhatsApp
                  <Send size={18} />
                </button>

                <p className="contact-privacy-note">
                  Your messaging app will open with your enquiry ready to send.
                </p>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-container">
          <div className="contact-map-heading">
            <span className="contact-small-label">FIND OUR LOCATION</span>
            <h2>Visit Omega Higher Education Centre</h2>
            <p>{ADDRESS}</p>
          </div>

          <div className="contact-map-card">
            <div className="contact-map-details">
              <span className="contact-map-pin">
                <MapPin size={27} />
              </span>
              <h3>Omega Higher Education Centre</h3>
              <p>{ADDRESS}</p>
              <a
                className="contact-map-button"
                href="https://www.google.com/maps/search/?api=1&query=Street%2016A%2C%20Kaushik%20Enclave%2C%20Burari%2C%20Delhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={17} />
                Open in Google Maps
              </a>
            </div>

            <iframe
              className="contact-map-frame"
              title="Map showing Omega Higher Education Centre in Burari, Delhi"
              src="https://maps.google.com/maps?q=Kaushik%20Enclave%2C%20Burari%2C%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
