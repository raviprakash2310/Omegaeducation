
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  ChevronDown,
} from 'lucide-react'
import './Header.css'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about', dropdown: true },
  { label: 'Courses', path: '/courses', dropdown: true },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      {/* Top contact bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <a
            className="social-link"
            href="https://www.instagram.com/omegahighereducationcentre/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Omega Instagram"
          >
            <Instagram size={20} />
          </a>

          <div className="topbar-contact">
            <a href="mailto:kantroyuday@gmail.com">
              <Mail size={21} />
              <span>kantroyuday@gmail.com</span>
            </a>

            <a href="tel:+919891160799">
              <Phone size={21} />
              <span>9891160799</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="nav-wrap">
        <div className="container nav-inner">
          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
            aria-label="Omega Higher Education Centre home"
          >
            <img
              src="/images/omega-logo.png"
              alt="Omega Higher Education Centre (OHEC)"
              className="brand-logo"
            />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav className={open ? 'nav-links open' : 'nav-links'}>
            {links.map(({ label, path, dropdown }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {label}
                {dropdown && <ChevronDown size={15} />}
              </NavLink>
            ))}

            <Link
              className="admission-button"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Admission Open 2026
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
