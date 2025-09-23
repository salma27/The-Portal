"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import "../css/LegalPages.css"

const TermsOfService: React.FC = () => {
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
          <h1 className="legal-page__title">Terms of Service</h1>
          <p className="legal-page__subtitle">Our Service Agreement</p>
          <p className="legal-page__effective-date">Effective Date: January 1, 2024</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="legal-page__container">
        {/* Breadcrumb */}
        <div className="legal-page__breadcrumb">
          <a href="/home">Home</a> / <a href="/terms-of-service">Terms of Service</a>
        </div>

        <div className="legal-page__content">
          <section className="legal-page__section">
            <p className="legal-page__intro">
              Welcome to ProServe. These Terms of Service (&quot;Terms&quot;) govern your use of our website and
              services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ProServe&apos;s website and services, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">2. Services Description</h2>
            <p>
              ProServe provides industrial electrical solutions, including but not limited to spare parts, maintenance
              services, electrical products, and retrofit solutions for medium and high voltage systems.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">3. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul className="legal-page__list">
              <li>Provide accurate and complete information when requested</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Respect intellectual property rights</li>
              <li>Maintain the confidentiality of any account credentials</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">4. Service Availability</h2>
            <p>
              We strive to maintain continuous service availability, but we do not guarantee uninterrupted access. We
              reserve the right to modify, suspend, or discontinue services with or without notice.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">5. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on this website are owned by ProServe or our licensors.
              You may not reproduce, distribute, or create derivative works without explicit written permission.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">6. Limitation of Liability</h2>
            <p>
              ProServe shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of our services. Our total liability shall not exceed the amount paid for our
              services.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold ProServe harmless from any claims, damages, or expenses arising from your
              use of our services or violation of these Terms.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">8. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our{" "}
              <a href="/privacy-policy" className="legal-page__link">
                Privacy Policy
              </a>
              , which also governs your use of our services.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Egypt, without regard to its
              conflict of law provisions.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              on our website. Your continued use of our services constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="legal-page__section">
            <h2 className="legal-page__section-title">Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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

export default TermsOfService
