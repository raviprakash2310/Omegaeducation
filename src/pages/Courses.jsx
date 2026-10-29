
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
    description: 'Explore hospitality and hotel management programmes.',
    courses: ['Hotel Management'],
  },
  {
    category: 'Yoga Courses',
    description: 'Explore yoga programmes and qualifications.',
    courses: ['Yoga Courses - All Degree/Diploma'],
  },
  {
    category: 'Vocational Programmes',
    description: 'Explore teacher training and vocational options.',
    courses: ['N.T.T.', 'All Vocational Degree/Diploma'],
  },
];

const courseDescriptions = {
  BA: 'Explore arts, humanities and a wide range of subjects.',
  MA: 'Explore advanced study options in arts and humanities.',
  'B.Com': 'Discover commerce, accounting and business studies.',
  'M.Com': 'Explore advanced commerce and financial studies.',
  'B.Sc': 'Discover science subjects and further study options.',
  'M.Sc': 'Explore advanced science study opportunities.',
  BBA: 'Explore business administration and management.',
  BCA: 'Discover computer applications and IT studies.',
  MBA: 'Explore management and business education.',
  MCA: 'Discover advanced computer application studies.',
  'B.Lib': 'Explore library science and information services.',
  'M.Lib': 'Explore advanced library and information studies.',
  'B.Tech': 'Discover engineering and technology study options.',
  'M.Tech': 'Explore advanced engineering and technology studies.',
  LLB: 'Explore legal education and law studies.',
  'BA.LLB': 'Explore an integrated arts and law programme.',
  'B.Ed': 'Explore education and teacher training studies.',
  'M.Ed': 'Explore advanced education studies.',
  'D.Pharma': 'Explore pharmaceutical education options.',
  'B.Pharma': 'Discover pharmacy education and study options.',
  ANM: 'Explore nursing and community healthcare studies.',
  GNM: 'Explore nursing education and training options.',
  'B.Sc Nursing': 'Discover nursing and healthcare education.',
  PhD: 'Explore doctoral research and academic opportunities.',
  'ITI Courses - All Trades': 'Explore vocational and technical training options.',
  'Polytechnic - All Trades': 'Discover diploma and technical learning options.',
  'Hotel Management': 'Explore hospitality and hotel management studies.',
  'Yoga Courses - All Degree/Diploma': 'Explore yoga education programmes.',
  'N.T.T.': 'Explore nursery teacher training options.',
  'All Vocational Degree/Diploma': 'Discover vocational learning and diploma options.',
};

export default function Courses() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Courses');

  const categories = [
    'All Courses',
    ...courseGroups.map((group) => group.category),
  ];

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
        courses: group.courses.filter(
          (course) =>
            course.toLowerCase().includes(query) ||
            group.category.toLowerCase().includes(query)
        ),
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
                    {group.courses.map((course, index) => (
                      <article
                        className={`courses-card courses-card-tone-${index % 6}`}
                        key={course}
                      >
                        <div className="courses-card-top">
                          <div className="courses-card-icon">
                            <BookOpen size={25} />
                          </div>
                          <span className="courses-card-dots" aria-hidden="true">
                            ⠿
                          </span>
                        </div>

                        <div className="courses-card-content">
                          <span className="courses-card-category">
                            {group.category}
                          </span>

                          <h4>{course}</h4>

                          <p className="courses-card-description">
                            {courseDescriptions[course] ||
                              'Contact our team to learn about this programme and available options.'}
                          </p>

                          <Link
                            className="courses-link"
                            to="/contact"
                            state={{ course }}
                          >
                            Enquire Now <ArrowRight size={19} />
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
              about available courses and the admission process.
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
