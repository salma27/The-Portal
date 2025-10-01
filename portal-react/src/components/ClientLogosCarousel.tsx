"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { testimonials } from "../data"
import "../css/ClientLogosCarousel.css"
import type { Testimonial } from "../interfaces"

const ClientLogosCarousel: React.FC = () => {
  const navigate = useNavigate()
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>(testimonials)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    // Load testimonials from localStorage if available (for admin updates)
    const savedData = localStorage.getItem("proserve-admin-data")
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        if (parsed.testimonials) {
          setTestimonialsData(parsed.testimonials)
        }
      } catch (error) {
        console.error("Error loading testimonials:", error)
      }
    }
  }, [])

  const handleLogoClick = (testimonialId: string) => {
    navigate(`/testimonial-details/${testimonialId}`)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Duplicate the testimonials array for seamless infinite scroll
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData]

  return (
    <div className="client-logos-carousel">
      <div className="client-logos-carousel__container">
        <div className="client-logos-carousel__header">
          <h2 className="client-logos-carousel__title">Trusted by Industry Leaders</h2>
          <p className="client-logos-carousel__subtitle">
            Join the growing list of satisfied clients who trust ProServe for their electrical infrastructure needs
          </p>
        </div>

        <div
          className="client-logos-carousel__track-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="client-logos-carousel__fade-left"></div>
          <div className="client-logos-carousel__fade-right"></div>

          <div className={`client-logos-carousel__track ${isPaused ? "paused" : ""}`}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="client-logos-carousel__item"
                onClick={() => handleLogoClick(testimonial.id)}
              >
                <div className="client-logos-carousel__logo-container">
                  <img
                    src={testimonial.logo || "/placeholder.svg?height=60&width=120&text=Client+Logo"}
                    alt={`${testimonial.clientName} logo`}
                    className="client-logos-carousel__logo"
                  />
                  <div className="client-logos-carousel__overlay">
                    <div className="client-logos-carousel__overlay-content">
                      <h4 className="client-logos-carousel__client-name">{testimonial.clientName}</h4>
                      <p className="client-logos-carousel__sector">{testimonial.sector}</p>
                      <span className="client-logos-carousel__cta">View Case Study</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="client-logos-carousel__footer">
          <p className="client-logos-carousel__footer-text">
            Hover over any logo to pause • Click to view detailed case study
          </p>
        </div>
      </div>
    </div>
  )
}

export default ClientLogosCarousel
