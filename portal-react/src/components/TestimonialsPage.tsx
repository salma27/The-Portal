"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"
import { testimonials } from "../data"
import "../css/TestimonialsPage.css"

const TestimonialsPage: React.FC = () => {
  const navigate = useNavigate()

  const handleTestimonialClick = (testimonialId: string) => {
    navigate(`/testimonial-details/${testimonialId}`)
  }

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <div className="testimonials-hero">
        <div className="testimonials-hero__content">
          <div className="testimonials-hero__breadcrumb">
            <span>References</span>
            <span className="testimonials-hero__arrow">›</span>
            <span>Testimonials</span>
          </div>
          <h1 className="testimonials-hero__title">Client Success Stories</h1>
          <p className="testimonials-hero__description">
            Discover how ProServe has delivered exceptional electrical solutions across various industries
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card" onClick={() => handleTestimonialClick(testimonial.id)}>
            <div className="testimonial-card__header">
              <div className="testimonial-card__logo-wrapper">
                <img
                  src={testimonial.logo || "/placeholder.svg?height=60&width=120"}
                  alt={`${testimonial.clientName} logo`}
                  className="testimonial-card__logo"
                />
              </div>
              <div className="testimonial-card__client">
                <h3 className="testimonial-card__name">{testimonial.clientName}</h3>
                <p className="testimonial-card__sector">{testimonial.sector}</p>
              </div>
            </div>

            <div className="testimonial-card__content">
              <div className="testimonial-card__section">
                <h4 className="testimonial-card__label">Challenge</h4>
                <p className="testimonial-card__text">
                  {testimonial.challenge.length > 120
                    ? `${testimonial.challenge.substring(0, 120)}...`
                    : testimonial.challenge}
                </p>
              </div>

              <div className="testimonial-card__section">
                <h4 className="testimonial-card__label">Solution</h4>
                <p className="testimonial-card__text">
                  {testimonial.solution.length > 120
                    ? `${testimonial.solution.substring(0, 120)}...`
                    : testimonial.solution}
                </p>
              </div>
            </div>

            <div className="testimonial-card__footer">
              <div className="testimonial-card__meta">
                <span className="testimonial-card__duration">
                  <strong>Duration:</strong> {testimonial.projectDuration}
                </span>
              </div>
              <button className="testimonial-card__button">Read Full Story →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsPage
