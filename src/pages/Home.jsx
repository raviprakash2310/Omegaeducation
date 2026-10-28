
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  GraduationCap,
} from 'lucide-react'

import PageHero from '../components/PageHero'
import './Home.css'
import { courses } from '../data/courses.js'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <PageHero />

      {/* About Our Institute */}
      <section className="omega-about">
        <div className="omega-about-container">
          <div className="omega-about-copy">
            <p className="omega-about-eyebrow">
              <GraduationCap size={18} />
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
                Know More About Us <ArrowRight size={19} />
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
                alt="Omega Higher Education Centre campus"
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
                  <BookOpen size={30} />
                </div>

                <div>
                  <h3>Innovative Courses</h3>
                  <span className="omega-feature-line" />
                  <p>
                    Explore courses to support your educational goals.
                  </p>
                </div>
              </article>

              <article className="omega-feature-card">
                <div className="omega-feature-icon">
                  <GraduationCap size={30} />
                </div>

                <div>
                  <h3>Student Support</h3>
                  <span className="omega-feature-line" />
                  <p>
                    Get guidance while planning your learning journey.
                  </p>
                </div>
              </article>
            </div>

            {/* Floating graduation cap and diploma */}
            <div className="omega-floating-graduation">
              <img
                src="/images/graduation-cap.png"
                alt="Graduation cap and diploma"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section bg-[#f8f6fb]">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="eyebrow">LEARNING PATHWAYS</p>

              <h2 className="home-section-title">
                Explore Our <span>Programmes</span>
              </h2>

              <p className="home-muted">
                Explore the available courses and find a programme
                that matches your educational goals.
              </p>
            </div>

            <Link className="home-text-link" to="/courses">
              View All Courses <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-course-grid">
            {courses.map((course, i) => (
              <article className="home-course-card" key={course.code}>
                <div className={`home-course-symbol symbol-${i}`}>
                  <BookOpen size={26} />
                </div>

                <span className="home-course-code">{course.code}</span>

                <h3>{course.name}</h3>

                <p>{course.description}</p>

                <div className="home-course-bottom">
                  <span>{course.duration}</span>

                  <Link
                    to="/courses"
                    aria-label={`Details for ${course.name}`}
                  >
                    <ArrowRight size={19} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Institute Highlights */}
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

      {/* Contact CTA */}
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
  )
}
