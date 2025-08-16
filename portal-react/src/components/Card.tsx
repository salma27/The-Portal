import type React from "react"
import type { CardProps } from "../interfaces"
import "../css/Card.css"

const Card: React.FC<CardProps> = ({ item, type = "our-purpose" }) => {
  const handleClick = () => {
    window.open(item.href, "_blank", "noopener,noreferrer")
  }

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(item.href, "_blank", "noopener,noreferrer")
  }

  if (type === "featured-products") {
    return (
      <div className="product-card">
        <div className="product-card__image-container">
          <img src={item.image || "/placeholder.svg"} alt={item.label} className="product-card__image" />
        </div>
        <div className="product-card__content">
          <h3 className="product-card__title">{item.label}</h3>
          <p className="product-card__description">{item.description}</p>
          <button className="product-card__button" onClick={handleLearnMore}>
            Learn More
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
