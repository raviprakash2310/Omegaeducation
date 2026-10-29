
import {
  BookOpen,
  Users,
  Target,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  Compass,
  Lightbulb,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import './About.css';

const values = [
  {
    Icon: Target,
    number: '01',
    title: 'Our Mission',
    text: 'To help students explore educational opportunities, understand available programmes and make informed decisions about their academic future.',
    className: 'about-value-mission',
  },
  {
    Icon: BookOpen,
    number: '02',
    title: 'Our Vision',
    text: 'To guide learners towards suitable educational pathways and encourage continuous learning, personal growth and career development.',
    className: 'about-value-vision',
  },
  {
    Icon: HeartHandshake,
    number: '03',
    title: 'Student Support',
    text: 'We help students understand course options, admission requirements and the next steps in their educational journey.',
    className: 'about-value-support',
  },
  {
    Icon: Users,
    number: '04',
    title: 'Our Community',
    text: 'We aim to create a welcoming environment where learners can seek guidance, explore opportunities and plan their goals.',
    className: 'about-value-community',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Omega"
        text="Discover our approach to education, student guidance and learning opportunities."
      />

      {/* OUR STORY */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-layout">
            <div className="about-story-copy">
              <span className="about-eyebrow">
                <span className="about-eyebrow-line" />
                OUR STORY
              </span>

              <h2>
                Education with <span>purpose.</span>
              </h2>

              <p className="about-story-lead">
                Welcome to Omega Higher Education Centre (OHEC).
              </p>

              <p className="about-story-text">
                We provide educational guidance to students exploring
                undergraduate, postgraduate, diploma, professional and
                vocational learning opportunities. Our aim is to help
                learners understand their options and take informed
                steps towards their educational goals.
              </p>

              <p className="about-story-text">
                From exploring programmes to understanding admission
                requirements, students can contact our team for
                information about available courses and the admission
                process.
              </p>

              <div className="about-story-actions">
                <Link to="/courses" className="about-primary-button">
                  Explore Our Courses
                  <ArrowRight size={18} />
                </Link>

                <Link to="/contact" className="about-secondary-button">
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <div className="about-story-visual">
              <div className="about-story-image-frame">
                <img
                  src="/images/omega-campus.jpg"
                  alt="Omega Higher Education Centre"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />

                <div className="about-image-overlay">
                  <GraduationCap size={42} />
                  <span>OMEGA</span>
                  <strong>HIGHER EDUCATION CENTRE</strong>
                  <small>Learn • Explore • Grow</small>
                </div>
              </div>

              <div className="about-floating-note">
                <div className="about-floating-note-icon">
                  <Lightbulb size={23} />
                </div>
                <div>
                  <strong>Your Future Matters</strong>
                  <span>Explore your learning options</span>
                </div>
              </div>

              <div className="about-story-decoration" />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VALUES */}
      <section className="about-values-section">
        <div className="container">
          <div className="about-values-heading">
            <span className="about-eyebrow">
              <span className="about-eyebrow-line" />
              WHAT GUIDES US
              <span className="about-eyebrow-line" />
            </span>

            <h2>
              Our Values, Our <span>Direction</span>
            </h2>

            <p>
              The principles behind our approach to educational guidance
              and student support.
            </p>
          </div>

          <div className="about-value-grid">
            {values.map(({ Icon, number, title, text, className }) => (
              <article
                className={`about-value-card ${className}`}
                key={title}
              >
                <div className="about-value-card-top">
                  <div className="about-value-icon">
                    <Icon size={28} strokeWidth={1.9} />
                  </div>

                  <span className="about-value-number">{number}</span>
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <div className="about-value-bottom">
                  <span>OMEGA HIGHER EDUCATION CENTRE</span>
                  <Compass size={18} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE COURSES CTA */}
      <section className="about-bottom-cta">
        <div className="container about-bottom-cta-inner">
          <div className="about-bottom-cta-icon">
            <GraduationCap size={34} />
          </div>

          <div className="about-bottom-cta-copy">
            <span>YOUR NEXT STEP STARTS HERE</span>
            <h2>Ready to explore your options?</h2>
            <p>
              Browse our course categories or contact us for information
              about available programmes and admissions.
            </p>
          </div>

          <Link to="/contact" className="about-bottom-cta-button">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
