"use client"

import type React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { testimonials } from "../data"
import "../css/TestimonialDetails.css"
import Footer from "./Footer"

const TestimonialDetails: React.FC = () => {
  const { testimonialId } = useParams<{ testimonialId: string }>()
  const navigate = useNavigate()

  const testimonial = testimonials.find((t) => t.id === testimonialId)

  if (!testimonial) {
    return (
      <div className="testimonial-details">
        <div className="testimonial-details__error">
          <h1>Testimonial Not Found</h1>
          <p>The requested testimonial could not be found.</p>
          <button onClick={() => navigate("/references/testimonials")} className="testimonial-details__back-btn">
            Back to Testimonials
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="testimonial-details">
      {/* Hero Section */}
      <div className="testimonial-details__hero">
        <div className="testimonial-details__hero-content">
          <button onClick={() => navigate("/references/testimonials")} className="testimonial-details__back">
            ← Back to Testimonials
          </button>
          <div className="testimonial-details__hero-header">
            <div className="testimonial-details__logo-container">
              <img
                src={testimonial.logo || "/placeholder.svg?height=80&width=160"}
                alt={`${testimonial.clientName} logo`}
                className="testimonial-details__logo"
              />
            </div>
            <div className="testimonial-details__hero-info">
              <h1 className="testimonial-details__client-name">{testimonial.clientName}</h1>
              <p className="testimonial-details__sector">{testimonial.sector}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="testimonial-details__content">
        <div className="testimonial-details__container">
          {/* Project Overview */}
          <div className="testimonial-details__overview">
            <h2 className="testimonial-details__section-title">Project Overview</h2>
            <div className="testimonial-details__overview-grid">
              <div className="testimonial-details__overview-item">
                <span className="testimonial-details__overview-label">Client</span>
                <span className="testimonial-details__overview-value">{testimonial.clientName}</span>
              </div>
              <div className="testimonial-details__overview-item">
                <span className="testimonial-details__overview-label">Industry</span>
                <span className="testimonial-details__overview-value">{testimonial.sector}</span>
              </div>
              <div className="testimonial-details__overview-item">
                <span className="testimonial-details__overview-label">Duration</span>
                <span className="testimonial-details__overview-value">{testimonial.projectDuration}</span>
              </div>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="testimonial-details__main-grid">
            <div className="testimonial-details__card">
              <div className="testimonial-details__card-icon">🎯</div>
              <h3 className="testimonial-details__card-title">The Challenge</h3>
              <p className="testimonial-details__card-text">{testimonial.challenge}</p>
            </div>

            <div className="testimonial-details__card">
              <div className="testimonial-details__card-icon">✨</div>
              <h3 className="testimonial-details__card-title">Our Solution</h3>
              <p className="testimonial-details__card-text">{testimonial.solution}</p>
            </div>
          </div>

          {/* Products & Services */}
          <div className="testimonial-details__lists-grid">
            <div className="testimonial-details__list-card">
              <h3 className="testimonial-details__list-title">
                <span className="testimonial-details__list-icon">📦</span>
                Products Used
              </h3>
              <ul className="testimonial-details__list">
                {testimonial.productsUsed.map((product, index) => (
                  <li key={index} className="testimonial-details__list-item">
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            <div className="testimonial-details__list-card">
              <h3 className="testimonial-details__list-title">
                <span className="testimonial-details__list-icon">🔧</span>
                Services Provided
              </h3>
              <ul className="testimonial-details__list">
                {testimonial.servicesProvided.map((service, index) => (
                  <li key={index} className="testimonial-details__list-item">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="testimonial-details__quote-section">
            <div className="testimonial-details__quote-icon">"</div>
            <blockquote className="testimonial-details__quote">{testimonial.testimonialQuote}</blockquote>
            <div className="testimonial-details__quote-author">
              <p className="testimonial-details__author-name">{testimonial.testimonialAuthor}</p>
              <p className="testimonial-details__author-position">{testimonial.testimonialPosition}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="testimonial-details__cta">
            <h3 className="testimonial-details__cta-title">Ready to Transform Your Operations?</h3>
            <p className="testimonial-details__cta-text">
              Contact our experts to discuss how ProServe can deliver exceptional results for your business.
            </p>
            <button className="testimonial-details__cta-button">Get Expert Consultation</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TestimonialDetails
