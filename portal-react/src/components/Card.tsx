"use client"

import type React from "react"
import type { CardProps } from "../interfaces"
import "../css/Card.css"
import { useNavigate } from "react-router-dom"

const Card: React.FC<CardProps> = ({ item, type = "our-purpose" }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (type === "section") {
      // For section cards, navigate to the href directly
      window.location.href = item.href
    } else {
      // For carousel cards, navigate to category page
      navigate(`/${item.id}`, { state: { cardData: item } })
    }
  }

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(item.href, "_blank", "noopener,noreferrer")
  }

  if (type === "featured-products" || type === "section") {
    return (
      <div className="product-card" onClick={type === "section" ? handleClick : undefined}>
        <div className="product-card__image-container">
          <img src={item.image || "/placeholder.svg"} alt={item.label} className="product-card__image" />
        </div>
        <div className="product-card__content">
          <h3 className="product-card__title">{item.label}</h3>
          <p className="product-card__description">{item.description}</p>
          <button className="product-card__button" onClick={type === "section" ? handleClick : handleLearnMore}>
            {type === "section" ? "View Details" : "Learn More"}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="service-card" onClick={handleClick}>
      <div className="service-card__image-container">
        <img src={item.image || "/placeholder.svg"} alt={item.label} className="service-card__image" />
        <div className="service-card__overlay"></div>
        <h3 className="service-card__label">{item.label}</h3>
      </div>
    </div>
  )
}

export default Card
