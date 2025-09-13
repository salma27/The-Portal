"use client"

import type React from "react"
import { useState } from "react"
import Card from "./Card"
import "../css/Carousel.css"
import type { CarouselProps } from "../interfaces"

const Carousel: React.FC<CarouselProps> = ({ items, title, description, type = "our-purpose" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const maxVisible = 4

  // Manual navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    // Briefly pause auto-scroll when manually navigating
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    // Briefly pause auto-scroll when manually navigating
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }

  // Create duplicated items for seamless infinite scroll
  const getDuplicatedItems = () => {
    if (items.length === 0) return []

    // Duplicate items multiple times to ensure smooth infinite scroll
    const duplicateCount = Math.max(3, Math.ceil(12 / items.length))
    const duplicatedItems = []

    for (let i = 0; i < duplicateCount; i++) {
      duplicatedItems.push(...items)
    }

    return duplicatedItems
  }

  if (type === "featured-products") {
    const duplicatedItems = getDuplicatedItems()

    return (
      <div className="carousel carousel--product">
        {title && <h2 className="carousel__title">{title}</h2>}
        {description && <p className="carousel-description">{description}</p>}
        <div className="carousel__container">
          <div className="carousel__wrapper">
            {/* Left Arrow */}
            <button className="carousel__nav carousel__nav--prev" onClick={prevSlide} aria-label="Previous slide">
              &#8249;
            </button>

            <div className="carousel__track">
              <div
                className={`carousel__slides carousel__slides--infinite ${isPaused ? "carousel__slides--paused" : ""}`}
              >
                {duplicatedItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="carousel__slide">
                    <Card item={item} type="featured-products" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button className="carousel__nav carousel__nav--next" onClick={nextSlide} aria-label="Next slide">
              &#8250;
            </button>
          </div>

          {/* Status indicator */}
          <div className="carousel__indicators">
            <div className="carousel__auto-play-status">
              {!isPaused ? (
                <span className="carousel__auto-play-indicator">
                  <span className="carousel__auto-play-dot"></span>
                  Auto-scrolling
                </span>
              ) : (
                <span className="carousel__manual-indicator">Paused</span>
              )}
            </div>
            <div className="carousel__controls">
              <span className="carousel__control-hint">Use arrows to navigate manually</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel">
      {title && <h2 className="carousel__title">{title}</h2>}
      {description && <p className="carousel-description">{description}</p>}
      <div className="carousel__container">
        <div className="carousel__grid">
          {items.map((item) => (
            <Card key={item.id} item={item} type="our-purpose" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
