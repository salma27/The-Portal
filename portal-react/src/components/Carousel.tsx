import type React from "react"
import { useState } from "react"
import Card from "./Card"
import "../css/Carousel.css"
import type { CarouselProps } from "../interfaces"

const Carousel: React.FC<CarouselProps> = ({ items, title, description, type = "our-purpose" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxVisible = 4

  const nextSlide = () => {
    if (currentIndex < items.length - maxVisible) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  if (type === "featured-products") {
    return (
      <div className="carousel carousel--product">
        {title && <h2 className="carousel__title">{title}</h2>}
        {description && <p className="carousel-description">{description}</p>}
        <div className="carousel__container">
          <div className="carousel__wrapper">
            {currentIndex > 0 && (
              <button className="carousel__nav carousel__nav--prev" onClick={prevSlide}>
                &#8249;
              </button>
            )}
            <div className="carousel__track">
              <div
                className="carousel__slides"
                style={{ transform: `translateX(-${currentIndex * (100 / maxVisible)}%)` }}
              >
                {items.map((item) => (
                  <div key={item.id} className="carousel__slide">
                    <Card item={item} type="featured-products" />
                  </div>
                ))}
              </div>
            </div>
            {currentIndex < items.length - maxVisible && (
              <button className="carousel__nav carousel__nav--next" onClick={nextSlide}>
                &#8250;
              </button>
            )}
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
