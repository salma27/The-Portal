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
        // No more nested items, navigate to ProductDetails page
        navigate(`/product-details/${item.id}`, { state: { productData: item } })
      }
    } else {
      // For carousel cards, navigate to category page
      navigate(`/${item.id}`, { state: { cardData: item } })
    }
  }

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (type === "section" || type === "detail") {
      // Check if this item has nested items
      if ("items" in item && item.items && item.items.length > 0) {
        // Navigate to the next level
        navigate(`${item.href}`, { state: { cardData: item } })
      } else {
        // No more nested items, navigate to ProductDetails page
        navigate(`/product-details/${item.id}`, { state: { productData: item } })
      }
    } else {
      // Featured products navigate to ProductDetails
      navigate(`/product-details/${item.id}`, { state: { productData: item } })
    }
  }

  // Switched button text logic
  const getButtonText = () => {
    if (type === "featured-products") {
      return "View Details" // Featured products show details page
    }

    if (type === "section" || type === "detail") {
      if ("items" in item && item.items && item.items.length > 0) {
        return "Learn More" // Has more levels to navigate
      } else {
        return "View Details" // Final level - shows product details
      }
    }

    return "View Details" // Default fallback
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
          <button className="product-card__button" onClick={handleButtonClick}>
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
