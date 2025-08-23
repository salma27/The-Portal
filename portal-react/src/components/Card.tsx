import type React from "react"
import type { CardProps } from "../interfaces"
import "../css/Card.css"
import { useNavigate } from "react-router-dom"

const Card: React.FC<CardProps> = ({ item, type = "our-purpose" }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (type === "section" || type === "detail") {
      // Check if this item has nested items
      if ("items" in item && item.items && item.items.length > 0) {
        // Navigate to the next level
        navigate(`${item.href}`, { state: { cardData: item } })
      } else {
        // No more nested items, open external link
        window.open(item.href, "_blank", "noopener,noreferrer")
      }
    } else {
      // For carousel cards, navigate to category page
      navigate(`/${item.id}`, { state: { cardData: item } })
    }
  }

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (type === "section" || type === "detail") {
      // Check if this item has nested items
      if ("items" in item && item.items && item.items.length > 0) {
        // Navigate to the next level
        navigate(`${item.href}`, { state: { cardData: item } })
      } else {
        // No more nested items, open external link
        window.open(item.href, "_blank", "noopener,noreferrer")
      }
    } else {
      // Open in new tab
      window.open(item.href, "_blank", "noopener,noreferrer")
    }
  }

  // Consistent button text - always "View Details" for navigation, "Learn More" for external links
  const getButtonText = () => {
    if (type === "featured-products") {
      return "Learn More" // Featured products always open external links
    }

    if (type === "section" || type === "detail") {
      if ("items" in item && item.items && item.items.length > 0) {
        return "View Details" // Has more levels to navigate
      } else {
        return "Learn More" // Final level - opens external link
      }
    }

    return "Learn More" // Default fallback
  }

  if (type === "featured-products" || type === "section" || type === "detail") {
    return (
      <div className="product-card" onClick={handleClick}>
        <div className="product-card__image-container">
          <img src={item.image || "/placeholder.svg"} alt={item.label} className="product-card__image" />
        </div>
        <div className="product-card__content">
          <h3 className="product-card__title">{item.label}</h3>
          <p className="product-card__description">{item.description}</p>
          <button className="product-card__button" onClick={handleLearnMore}>
            {getButtonText()}
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
