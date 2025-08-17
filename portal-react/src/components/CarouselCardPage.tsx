import type React from "react"
import { useParams, useLocation } from "react-router-dom"
import "../css/Home.css"
import Carousel from "./Carousel"
import { words, ourPurposeCaroueslItems, featuredProducts } from "../data"
import type { Card as CardType } from "../interfaces"
import Card from "./Card"

const CarouselCardPage: React.FC = () => {
  const { cardId } = useParams()
  const location = useLocation()
  const cardData = location.state?.cardData

  if (!cardData) {
    return <h2>No card data found</h2>
  }

  return (
    <div>
      <h1>{cardData?.label}</h1>
      {cardData?.sections?.map((section: CardType) => (
        <Card key={section?.id} item={section} type="featured-products" />
      ))}
    </div>
  )
}

export default CarouselCardPage
