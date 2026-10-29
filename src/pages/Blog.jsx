
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  X,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import './Blog.css';

const initialPosts = [
  {
    id: 1,
    category: 'Admissions',
    title: 'How to Prepare for Your Next Education Step',
    date: '29 Oct 2026',
    text: 'Explore educational opportunities and learn how to plan your next academic step.',
    image: '/images/admissions.jpg',
    content:
      'Planning your educational journey starts with understanding your interests, goals and available options. Explore different programmes, check eligibility requirements and gather accurate admission information before making a decision.',
  },
  {
    id: 2,
    category: 'Student Guidance',
    title: 'Choosing a Course That Matches Your Goals',
    date: '29 Oct 2026',
    text: 'Understand your interests and explore available programmes before making a decision.',
    image: '/images/student-guidance.jpg',
    content:
      'Choosing the right course is an important step towards your future. Consider your interests, strengths, career aspirations and course requirements. Contact Omega Higher Education Centre for information about available programmes and admission procedures.',
  },
  {
    id: 3,
    category: 'Institute News',
    title: 'Latest Updates from Our Institute',
    date: '29 Oct 2026',
    text: 'Read educational guidance, programme information and institute announcements.',
    image: '/images/institute-news.jpg',
    content:
      'Stay connected with Omega Higher Education Centre for educational guidance, programme information and institute announcements. Contact our team to confirm the latest admission dates and course availability.',
  },
];

export default function Blog() {
  const [posts] = useState(() => {
    try {
      const saved = localStorage.getItem('ohec_blog_posts');
      return saved ? JSON.parse(saved) : initialPosts;
    } catch {
      return initialPosts;
    }
  });

  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (!selectedPost) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPost(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  return (
    <>
      <PageHero
        title="News & Insights"
        text="Discover educational guidance, student resources and institute updates."
      />

      <section className="section blog-section">
        <div className="container">
          <div className="blog-heading">
            <span className="eyebrow">OHEC KNOWLEDGE HUB</span>
            <h2>
              Latest Articles <span>&amp; Updates</span>
            </h2>
            <p>
              Explore useful insights to help you make informed
              decisions about your educational journey.
            </p>
          </div>

          <div className="blog-grid">
            {posts.map((post, index) => (
              <article
                className={`blog-card blog-card-${index % 3}`}
                key={post.id ?? post.title}
              >
                <div className={`blog-art blog-art-${index % 3}`}>
                  <img
                    className="blog-card-image"
                    src={post.image || '/images/omega-campus.jpg'}
                    alt={post.category}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = '/images/omega-campus.jpg';
                    }}
                  />

                  <div className="blog-art-overlay" />

                  <div className="blog-art-icon">
                    {index === 0 ? (
                      <GraduationCap size={34} />
                    ) : (
                      <BookOpen size={34} />
                    )}
                  </div>

                  <span className="blog-category">
                    {post.category}
                  </span>
                </div>

                <div className="blog-card-content">
                  <p className="blog-date">
                    <CalendarDays size={16} />
                    {post.date}
                  </p>

                  <h3>{post.title}</h3>

                  <p className="blog-description">{post.text}</p>

                  <button
                    className="blog-link"
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    aria-label={`Read ${post.title}`}
                  >
                    Read Article
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-notice">
            <BookOpen size={21} />
            <p>
              Follow OHEC for educational guidance, admissions
              information and institute announcements.
            </p>
          </div>
        </div>
      </section>

      {selectedPost && (
        <div
          className="blog-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPost(null);
            }
          }}
        >
          <article
            className="blog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
          >
            <button
              className="blog-modal-close"
              type="button"
              aria-label="Close article"
              onClick={() => setSelectedPost(null)}
            >
              <X size={23} />
            </button>

            <div className="blog-modal-banner">
              <img
                src={selectedPost.image || '/images/omega-campus.jpg'}
                alt=""
                onError={(event) => {
                  event.currentTarget.src = '/images/omega-campus.jpg';
                }}
              />
              <div className="blog-modal-banner-overlay" />
              <span>{selectedPost.category}</span>
            </div>

            <div className="blog-modal-content">
              <p className="blog-date">
                <CalendarDays size={16} />
                {selectedPost.date}
              </p>

              <h2 id="blog-modal-title">{selectedPost.title}</h2>

              <p className="blog-modal-description">
                {selectedPost.text}
              </p>

              <div className="blog-modal-divider" />

              <p className="blog-modal-body">
                {selectedPost.content || selectedPost.text}
              </p>

              <div className="blog-modal-footer">
                <span>OMEGA HIGHER EDUCATION CENTRE</span>

                <button
                  className="blog-modal-done"
                  type="button"
                  onClick={() => setSelectedPost(null)}
                >
                  Close Article
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
