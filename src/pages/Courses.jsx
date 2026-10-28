
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Search,
  MessageCircle,
} from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import './Courses.css';

const courseGroups = [
  {
    category: 'Degree Courses',
    description: 'Explore undergraduate and postgraduate programmes.',
    courses: [
      'BA', 'MA', 'B.Com', 'M.Com', 'B.Sc', 'M.Sc',
      'BBA', 'BCA', 'MBA', 'MCA', 'B.Lib', 'M.Lib',
      'B.Tech', 'M.Tech', 'LLB', 'BA.LLB', 'B.Ed', 'M.Ed',
      'D.Pharma', 'B.Pharma', 'ANM', 'GNM',
      'B.Sc Nursing', 'PhD',
    ],
  },
  {
    category: 'ITI Courses',
    description: 'Explore ITI programmes across available trades.',
    courses: ['ITI Courses - All Trades'],
  },
  {
    category: 'Polytechnic',
    description: 'Explore diploma programmes across available trades.',
    courses: ['Polytechnic - All Trades'],
  },
  {
    category: 'Hotel Management',
    description: 'Explore learning opportunities in hotel management.',
    courses: ['Hotel Management'],
  },
  {
    category: 'Yoga Courses',
    description: 'Explore yoga programmes and available qualifications.',
    courses: ['Yoga Courses - All Degree/Diploma'],
  },
  {
    category: 'Vocational Programmes',
    description: 'Explore teacher training and other vocational options.',
    courses: ['N.T.T.', 'All Vocational Degree/Diploma'],
  },
];

const allCourses = courseGroups.flatMap((group) =>
  group.courses.map((name) => ({
    name,
    category: group.category,
  }))
);

export default function Courses() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Courses');

  const categories = ['All Courses', ...courseGroups.map((group) => group.category)];

  const filteredGroups = useMemo(() => {
    const query = search.trim().toLowerCase();

    return courseGroups
      .filter(
        (group) =>
          activeCategory === 'All Courses' ||
          group.category === activeCategory
      )
      .map((group) => ({
        ...group,
        courses: group.courses.filter((name) => {
          const matchesSearch =
            name.toLowerCase().includes(query) ||
            group.category.toLowerCase().includes(query);

          return matchesSearch;
        }),
      }))
      .filter((group) => group.courses.length > 0);
  }, [search, activeCategory]);

  return (
    <>
      <PageHero
        title="Our Courses"
        text="Explore educational programmes and discover learning opportunities for your future."
      />

      <section className="courses-intro">
        <div className="container courses-intro-inner">
          <div className="courses-intro-icon">
            <GraduationCap size={32} />
          </div>

          <div>
            <span className="courses-eyebrow">YOUR FUTURE STARTS HERE</span>
            <h2>Find the Right Course for Your Goals</h2>
            <p>
              Explore degree programmes, professional courses, diplomas,
              and vocational learning options. Contact our team to confirm
              eligibility, duration, fees, and admission availability.
            </p>
          </div>
        </div>
      </section>

      <section className="courses-section section">
        <div className="container">
          <div className="courses-heading">
            <span className="courses-eyebrow">EXPLORE OUR PROGRAMMES</span>
            <h2>Courses We Offer</h2>
            <p>
              Browse the course list below or search for the programme
              you are interested in.
            </p>
          </div>

          <div className="courses-controls">
            <div className="courses-search">
              <Search size={19} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses, e.g. BCA, MBA, B.Tech..."
                aria-label="Search courses"
              />
            </div>

            <div className="courses-filters" aria-label="Course categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`courses-filter ${
                    activeCategory === category ? 'active' : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="courses-results">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <section className="courses-group" key={group.category}>
                  <div className="courses-group-heading">
                    <div>
                      <h3>{group.category}</h3>
                      <p>{group.description}</p>
                    </div>
                    <span className="courses-count">
                      {group.courses.length}{' '}
                      {group.courses.length === 1 ? 'programme' : 'programmes'}
                    </span>
                  </div>

                  <div className="courses-grid">
                    {group.courses.map((course) => (
                      <article className="courses-card" key={course}>
                        <div className="courses-card-icon">
                          <BookOpen size={23} />
                        </div>

                        <div className="courses-card-content">
                          <span className="courses-card-category">
                            {group.category}
                          </span>
                          <h4>{course}</h4>

                          <Link
                            className="courses-link"
                            to="/contact"
                            state={{ course }}
                          >
                            Enquire Now <ArrowRight size={16} />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <div className="courses-empty">
                <Search size={30} />
                <h3>No courses found</h3>
                <p>Try another course name or select a different category.</p>
                <button
                  type="button"
                  className="courses-reset"
                  onClick={() => {
                    setSearch('');
                    setActiveCategory('All Courses');
                  }}
                >
                  Show All Courses
                </button>
              </div>
            )}
          </div>

          <p className="courses-disclaimer">
            Course availability, eligibility, duration, fees, and admission
            details should be confirmed with OHEC before applying.
          </p>
        </div>
      </section>

      <section className="courses-cta">
        <div className="container courses-cta-inner">
          <div className="courses-cta-icon">
            <MessageCircle size={28} />
          </div>

          <div className="courses-cta-copy">
            <span className="courses-eyebrow">NEED HELP?</span>
            <h2>Not Sure Which Course to Choose?</h2>
            <p>
              Contact our team to discuss your interests and get information
              about the available courses and admission process.
            </p>
          </div>

          <Link className="courses-cta-button" to="/contact">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
