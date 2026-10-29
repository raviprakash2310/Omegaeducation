
import { Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';

import SiteLayout from './layouts/SiteLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';

function FloatingContact() {
  const phone = '9891160799';

  return (
    <div className="floating-contact" aria-label="Contact options">
      {/* Call button */}
      <a
        href={`tel:${phone}`}
        className="floating-contact-call"
        aria-label="Call Omega Higher Education Centre"
        title="Call Us"
      >
        <Phone size={25} strokeWidth={2.5} />
      </a>

      {/* WhatsApp button with original WhatsApp logo */}
      <a
        href={`https://wa.me/91${phone}`}
        className="floating-contact-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Us"
      >
        <svg
          viewBox="0 0 24 24"
          width="27"
          height="27"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.95L.05 24l6.27-1.64a11.92 11.92 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.49-8.42ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.84 9.84 0 0 1 2.89 7c0 5.45-4.44 9.89-9.91 9.89Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FloatingContact />
    </>
  );
}
