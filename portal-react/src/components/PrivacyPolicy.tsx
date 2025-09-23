"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import "../css/LegalPages.css"

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <div className="legal-page__hero">
        <div className="legal-page__hero-content">
          <button className="legal-page__back-button" onClick={handleBackClick} aria-label="Go back">
            ← Back to Website
          </button>
          <h1 className="legal-page__title">Privacy Policy</h1>
          <p className="legal-page__subtitle">Your Privacy Matters to Us</p>
          <p className="legal-page__effective-date">Effective Date: January 1, 2024</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="legal-page__container">
        {/* Breadcrumb */}
        <div className="legal-page__breadcrumb">
          <a href="/home">Home</a> / <a href="/privacy-policy">Privacy Policy</a>
        </div>

        <div className="legal-page__content">
          <section className="legal-page__section">
            <p className="legal-page__intro">
              Welcome to ProServe. We respect your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or
              interact with our services.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Information We Collect</h2>
            <ul className="legal-page__list">
              <li>
                <strong>Personal Data:</strong> Name, email, phone number, company name, and any details you submit
                through forms or service requests.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, and usage data collected through cookies and
                analytics tools.
              </li>
              <li>
                <strong>Service Data:</strong> Information related to inquiries, quotes, or communication with us.
              </li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="legal-page__list">
              <li>Respond to your inquiries and provide services.</li>
              <li>Improve website performance and user experience.</li>
              <li>Send updates, promotions, or offers (only if you consent).</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience and analyze traffic. You can disable cookies in your
              browser settings, but some features may not work properly.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Sharing of Information</h2>
            <p>We do not sell your information. We may share data only with:</p>
            <ul className="legal-page__list">
              <li>Trusted providers such as hosting, IT, analytics, or support services.</li>
              <li>Legal authorities when required by law.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Data Security</h2>
            <p>
              We implement security measures to protect your personal information, but no online method is 100% secure.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Your Rights</h2>
            <p>You may request to:</p>
            <ul className="legal-page__list">
              <li>Access, update, or delete your data.</li>
              <li>Opt out of marketing communications.</li>
              <li>Restrict certain processing activities.</li>
            </ul>
            <p>
              Contact us to exercise your rights:{" "}
              <a href="mailto:info@proserve.com" className="legal-page__link">
                info@proserve.com
              </a>
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Third-Party Links</h2>
            <p>Our website may include links to external sites. We are not responsible for their privacy practices.</p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Updates to this Policy</h2>
            <p>
              We may update this Privacy Policy occasionally. Any changes will be posted here with a new &quot;Effective
              Date.&quot;
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Contact Us</h2>
            <p>If you have questions, contact us at:</p>
            <div className="legal-page__contact">
              <p>
                <strong>ProServe Industrial Solutions</strong>
              </p>
              <p>Trivium Square, First Floor, Office 119</p>
              <p>North 90 Street, New Cairo, Cairo</p>
              <p>
                Email:{" "}
                <a href="mailto:info@proserve.com" className="legal-page__link">
                  info@proserve.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+201146667674" className="legal-page__link">
                  01146667674
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
