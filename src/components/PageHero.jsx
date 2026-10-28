
import { ArrowRight, Download, CheckCircle2 } from 'lucide-react'
import './PageHero.css'

const benefits = [
  'AICTE Approved',
  'Recognized University Programs',
  'Industry-Oriented Learning',
  'Career & Placement Assistance',
]

export default function PageHero() {
  return (
    <section className="omega-hero">
      <div className="omega-hero-overlay" />

      <div className="omega-hero-container">
        <div className="omega-hero-content">
          <div className="omega-admission-label">
            ADMISSION OPEN 2026–2027
          </div>

          <h1 className="omega-hero-title">
            <span>Shape Your </span>
            <span className="omega-title-highlight">Future</span>
            <br />
            <span>with Industry-</span>
            <br />
            <span>Focused Education</span>
          </h1>

          <ul className="omega-hero-benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={17} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="omega-hero-actions">
            <a className="omega-apply-btn" href="/contact">
              Apply Now <ArrowRight size={19} />
            </a>

            <a
              className="omega-brochure-btn"
              href="/brochure.pdf"
              download
            >
              Download Brochure <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
