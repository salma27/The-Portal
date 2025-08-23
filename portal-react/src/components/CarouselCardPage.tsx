"use client"

import type React from "react"
import { useParams } from "react-router-dom"
import Card from "./Card"
import { ourPurposeCaroueslItems } from "../data"
import "../css/Card.css"

interface CarouselCardPageProps {
  categoryId: string
}

const CarouselCardPage: React.FC<CarouselCardPageProps> = ({ categoryId }) => {
  const { cardId } = useParams()
  const category = ourPurposeCaroueslItems.find((item) => item.id === categoryId || item.id === cardId)

  if (!category || !category.sections) {
    return (
      <div className="card-grid">
        <h2 className="card-grid__title">Category not found or coming soon</h2>
        <p className="card-grid__description">This category will be available soon with detailed sections.</p>
      </div>
    )
  }

  return (
    <div className="card-grid">
      <h2 className="card-grid__title">{category.label}</h2>
      <p className="card-grid__description">
        Explore our comprehensive {category.label.toLowerCase()} solutions designed for industrial excellence.
      </p>
      <div className="card-grid__container">
        <div className="card-grid__items">
          {category.sections.map((item) => (
            <div key={item.id} className="card-grid__item">
              <Card item={item} type="section" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselCardPage
