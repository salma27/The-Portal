"use client"

import type React from "react"
import "../css/Footer.css"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Company Information Section */}
        <div className="footer__section footer__company">
          <div className="footer__logo">
            <img src="/assets/proserve-logo.png" alt="Proserve Logo" className="footer__logo-img" />
          </div>
          <p className="footer__description">
            Leading provider of industrial electrical solutions, specializing in spare parts, maintenance, products, and
            retrofit services for medium and high voltage systems.
          </p>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📧</span>
              <span>info@proserve.com</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <span>01146667674</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>Trivium Square, First Floor, Office 119, North 90 Street, New Cairo, Cairo</span>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer__section footer__links">
          <h3 className="footer__section-title">Quick Links</h3>
          <ul className="footer__links-list">
            <li>
              <a href="/spare-parts" className="footer__link">
                Spare Parts
              </a>
            </li>
            <li>
              <a href="/maintenance" className="footer__link">
                Maintenance
              </a>
            </li>
            <li>
              <a href="/products" className="footer__link">
                Products
              </a>
            </li>
            <li>
              <a href="/retrofit" className="footer__link">
                Retrofit
              </a>
            </li>
            <li>
              <a href="#our-purpose" className="footer__link">
                Our Purpose
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer__section footer__services">
          <h3 className="footer__section-title">Our Services</h3>
          <ul className="footer__links-list">
            <li>
              <a href="/spare-parts/mv-circuit-breakers" className="footer__link">
                MV Circuit Breakers
              </a>
            </li>
            <li>
              <a href="/spare-parts/protection-relays" className="footer__link">
                Protection Relays
              </a>
            </li>
            <li>
              <a href="/spare-parts/instrument-transformers" className="footer__link">
                Instrument Transformers
              </a>
            </li>
            <li>
              <a href="/maintenance/preventive-maintenance" className="footer__link">
                Preventive Maintenance
              </a>
            </li>
            <li>
              <a href="/maintenance/testing" className="footer__link">
                Testing Services
              </a>
            </li>
            <li>
              <a href="/products/mv-transformers" className="footer__link">
                MV Transformers
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Legal Section */}
        <div className="footer__section footer__social-legal">
          <h3 className="footer__section-title">Connect With Us</h3>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/company/proserve-industrial"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on LinkedIn"
            >
              <span className="footer__social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:info@proserve.com" className="footer__social-link" aria-label="Send us an email">
              <span className="footer__social-icon">📧</span>
              <span>Email</span>
            </a>
          </div>

          <div className="footer__legal">
            <h4 className="footer__legal-title">Legal</h4>
            <ul className="footer__legal-list">
              <li>
                <a href="/privacy-policy" className="footer__legal-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="footer__legal-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="footer__legal-link">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="footer__legal-link">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__copyright">
            <p>&copy; {currentYear} ProServe Industrial Solutions. All rights reserved.</p>
          </div>
          <div className="footer__bottom-links">
            <a href="/privacy-policy" className="footer__bottom-link">
              Privacy
            </a>
            <span className="footer__separator">|</span>
            <a href="/terms-of-service" className="footer__bottom-link">
              Terms
            </a>
            <span className="footer__separator">|</span>
            <a href="/sitemap" className="footer__bottom-link">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
