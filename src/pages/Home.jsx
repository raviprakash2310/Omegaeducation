
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  GraduationCap,
  Eye,
  Target,
} from 'lucide-react';

import PageHero from '../components/PageHero';
import './Home.css';
import { courses } from '../data/courses.js';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <PageHero />

      {/* ABOUT OMEGA */}
      <section className="omega-about">
        <div className="omega-about-container">
          <div className="omega-about-copy">
            <p className="omega-about-eyebrow">
              <GraduationCap size={19} />
              ABOUT OMEGA
            </p>

            <h2>
              Welcome to Omega Higher Education Centre{' '}
              <span>(OHEC)</span>
            </h2>

            <p className="omega-about-description">
              Omega Higher Education Centre provides educational guidance
              and learning opportunities for students pursuing undergraduate,
              postgraduate, diploma and professional courses. Explore our
              available programmes and get support in planning your
              educational journey.
            </p>

            <div className="omega-about-actions">
              <Link to="/about" className="omega-about-button">
                Know More About Us <ArrowRight size={18} />
              </Link>

              <a
                className="omega-video-link"
                href="https://www.instagram.com/omegahighereducationcentre/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="omega-video-icon">▶</span>
                <strong>Watch Videos</strong>
              </a>
            </div>
          </div>

          <div className="omega-about-visual">
            <div className="omega-about-main-image">
              <img
                src="/images/omega-campus.jpg"
                alt="Omega Higher Education Centre"
              />

              <div className="omega-experience-badge">
                <strong>OHEC</strong>
                <span>Higher Education</span>
                <span>Centre</span>
              </div>
            </div>

            <div className="omega-feature-cards">
              <article className="omega-feature-card">
                <div className="omega-feature-icon">
                  <BookOpen size={27} />
                </div>

                <div>
                  <h3>Learning Opportunities</h3>
                  <span className="omega-feature-line" />
                  <p>
                    Explore courses to support your educational goals.
                  </p>
                </div>
              </article>

              <article className="omega-feature-card">
                <div className="omega-feature-icon">
                  <GraduationCap size={27} />
                </div>

                <div>
                  <h3>Student Guidance</h3>
                  <span className="omega-feature-line" />
                  <p>
                    Get guidance while planning your learning journey.
                  </p>
                </div>
              </article>
            </div>

            <div className="omega-floating-graduation">
              <img
                src="/images/graduation-cap.png"
                alt="Graduation cap and diploma"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="omega-vision-mission">
        <div className="container">
          <div className="omega-vm-heading">
            <span className="omega-vm-eyebrow">
              <span className="omega-vm-heading-line" />
              WHAT GUIDES US
              <span className="omega-vm-heading-line" />
            </span>

            <h2>
              Our <span>Vision</span> &amp; <span>Mission</span>
            </h2>

            <p>
              Our focus is to help students explore educational opportunities
              and make informed decisions about their future.
            </p>
          </div>

          <div className="omega-vm-grid">
            {/* Vision Card */}
            <article className="omega-vm-card omega-vm-vision">
              <div className="omega-vm-decoration omega-vm-dots" />
              <div className="omega-vm-decoration omega-vm-bottom-shape" />

              <div className="omega-vm-card-inner">
                <div className="omega-vm-card-top">
                  <div className="omega-vm-icon">
                    <Eye size={30} strokeWidth={2} />
                  </div>

                  <div>
                    <span className="omega-vm-label">OUR VISION</span>
                    <span className="omega-vm-short-line" />
                  </div>
                </div>

                <h3>Inspiring a Brighter Future</h3>

                <p>
                  To help learners discover educational pathways, develop
                  their potential and work towards their academic and
                  professional aspirations.
                </p>

                <Link to="/about" className="omega-vm-button">
                  Learn More <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            {/* Mission Card */}
            <article className="omega-vm-card omega-vm-mission">
              <div className="omega-vm-decoration omega-vm-dots" />
              <div className="omega-vm-decoration omega-vm-bottom-shape" />

              <div className="omega-vm-card-inner">
                <div className="omega-vm-card-top">
                  <div className="omega-vm-icon">
                    <Target size={30} strokeWidth={2} />
                  </div>

                  <div>
                    <span className="omega-vm-label">OUR MISSION</span>
                    <span className="omega-vm-short-line" />
                  </div>
                </div>

                <h3>Guiding Every Learning Journey</h3>

                <p>
                  To provide students with course information, educational
                  guidance and support so they can make informed decisions
                  about their next steps.
                </p>

                <Link to="/about" className="omega-vm-button">
                  Learn More <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="section omega-home-courses">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="eyebrow">LEARNING PATHWAYS</p>

              <h2 className="home-section-title">
                Explore Our <span>Programmes</span>
              </h2>

              <p className="home-muted">
                Explore available courses and find a programme that
                matches your educational goals.
              </p>
            </div>

            <Link className="home-text-link" to="/courses">
              View All Courses <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-course-grid">
            {courses.slice(0, 6).map((course, i) => (
              <article
                className={`home-course-card home-course-tone-${i % 6}`}
                key={course.code}
              >
                <div className={`home-course-symbol symbol-${i % 3}`}>
                  <BookOpen size={25} />
                </div>

                <span className="home-course-code">{course.code}</span>

                <h3>{course.name}</h3>

                <p>{course.description}</p>

                <div className="home-course-bottom">
                  <span>{course.duration}</span>

                  <Link
                    to="/contact"
                    state={{ course: course.name }}
                    aria-label={`Enquire about ${course.name}`}
                  >
                    <ArrowRight size={19} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="omega-home-course-action">
            <Link to="/courses" className="omega-home-all-courses">
              Explore All Courses <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* INSTITUTE HIGHLIGHTS */}
      <section className="home-stats">
        <div className="container home-stats-grid">
          <div>
            <Users />
            <strong>Student First</strong>
            <span>Supportive learning</span>
          </div>

          <div>
            <BookOpen />
            <strong>Learning Focus</strong>
            <span>Skills and knowledge</span>
          </div>

          <div>
            <Award />
            <strong>Future Ready</strong>
            <span>Explore your goals</span>
          </div>

          <div>
            <GraduationCap />
            <strong>Career Pathways</strong>
            <span>Plan your next step</span>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="home-cta">
        <div className="container home-cta-inner">
          <div>
            <p className="eyebrow text-amber-300">
              TAKE THE NEXT STEP
            </p>

            <h2>Have questions about admissions?</h2>

            <p>
              Contact our team to learn more about available programmes.
            </p>
          </div>

          <Link className="button home-gold-button" to="/contact">
            Make an Enquiry <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
