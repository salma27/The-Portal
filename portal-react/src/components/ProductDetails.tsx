import type React from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { findProductById } from "../utils/DataUtils"
import "../css/ProductDetails.css"
import type { Card } from "../interfaces"

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const location = useLocation()
  const navigate = useNavigate()

  // Get product data from location state or find by ID
  const productData: Card | null = location.state?.productData || (productId ? findProductById(productId) : null)

  const handleBackClick = () => {
    navigate(-1) // Go back to previous page
  }

  if (!productData) {
    return (
      <div className="product-details">
        <div className="product-details__error">
          <h1 className="product-details__title">Product Not Found</h1>
          <p className="product-details__description">The requested product could not be found.</p>
          <button className="product-details__back-button" onClick={handleBackClick}>
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="product-details">
      <div className="product-details__container">
        {/* Header */}
        <header className="product-details__header">
          <button className="product-details__back-button" onClick={handleBackClick} aria-label="Go back">
            ← Back
          </button>
          <h1 className="product-details__title">{productData.label}</h1>
        </header>

        {/* Main Content */}
        <div className="product-details__content">
          {/* Image Section */}
          <div className="product-details__image-section">
            <div className="product-details__image-container">
              <img
                src={productData.image || "/placeholder.svg"}
                alt={productData.label}
                className="product-details__image"
              />
            </div>
          </div>

          {/* Information Section */}
          <div className="product-details__info-section">
            {/* Description */}
            <div className="product-details__section">
              <h2 className="product-details__section-title">Description</h2>
              <p className="product-details__full-description">
                {productData.fullDescription || productData.description || "No detailed description available."}
              </p>
            </div>

            {/* Keywords */}
            {productData.keywords && productData.keywords.length > 0 && (
              <div className="product-details__section">
                <h2 className="product-details__section-title">Keywords</h2>
                <div className="product-details__keywords">
                  {productData.keywords.map((keyword, index) => (
                    <span key={index} className="product-details__keyword">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Advantages */}
            {productData.advantages && productData.advantages.length > 0 && (
              <div className="product-details__section">
                <h2 className="product-details__section-title">Key Advantages</h2>
                <ul className="product-details__advantages">
                  {productData.advantages.map((advantage, index) => (
                    <li key={index} className="product-details__advantage">
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Section */}
            <div className="product-details__section">
              <h2 className="product-details__section-title">Need More Information?</h2>
              <p className="product-details__contact-text">
                Contact our experts for detailed specifications, pricing, and availability.
              </p>
              <button className="product-details__contact-button">Contact Expert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
