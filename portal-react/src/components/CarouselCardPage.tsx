"use client"

import type React from "react"
import { useLocation } from "react-router-dom"
import { ourPurposeCaroueslItems, sparePartsSection } from "../data"
import Card from "./Card"
import "../css/Card.css"
import type { Card as CardType } from "../interfaces"

/**
 * Unified page component that handles all levels of category navigation
 * Supports infinite nesting based on URL path segments
 */
const CarouselCardPage: React.FC = () => {
  const location = useLocation()

  // Extract path segments from current location
  const pathSegments = location.pathname.split("/").filter((segment) => segment.length > 0)

  /**
   * Recursively finds the current data based on path segments
   */
  const findCurrentData = (
    segments: string[],
  ): {
    items: CardType[]
    title: string
    description?: string
  } | null => {
    if (segments.length === 0) return null

    const [firstSegment, ...remainingSegments] = segments

    // Handle top-level categories
    switch (firstSegment) {
      case "spare-parts":
        return handleSparePartsNavigation(remainingSegments)

      case "maintenance":
      case "products":
      case "retrofit":
        return handleOtherCategoryNavigation(firstSegment, remainingSegments)

      default:
        return null
    }
  }

  /**
   * Handles spare parts category navigation
   */
  const handleSparePartsNavigation = (remainingSegments: string[]) => {
    if (remainingSegments.length === 0) {
      return {
        items: sparePartsSection,
        title: "Spare Parts",
        description:
          "Explore our comprehensive spare parts solutions designed for industrial excellence and reliability.",
      }
    }

    return findNestedData(sparePartsSection, remainingSegments)
  }

  /**
   * Handles other category navigation (maintenance, products, retrofit)
   */
  const handleOtherCategoryNavigation = (categoryId: string, remainingSegments: string[]) => {
    const category = ourPurposeCaroueslItems.find((item) => item.id === categoryId)

    if (!category?.sections) return null

    if (remainingSegments.length === 0) {
      return {
        items: category.sections,
        title: category.label,
        description: category.description || `Explore our comprehensive ${category.label.toLowerCase()} solutions.`,
      }
    }

    return findNestedData(category.sections, remainingSegments)
  }

  /**
   * Recursively finds nested data based on remaining path segments
   */
  const findNestedData = (
    items: CardType[],
    segments: string[],
  ): { items: CardType[]; title: string; description?: string } | null => {
    if (segments.length === 0) return null

    const [currentSegment, ...remainingSegments] = segments
    const currentItem = items.find((item) => item.id === currentSegment)

    if (!currentItem) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`Navigation item not found: ${currentSegment}`, {
          availableItems: items.map((item) => item.id),
          fullPath: location.pathname,
        })
      }
      return null
    }

    // If this is the target level
    if (remainingSegments.length === 0) {
      if (currentItem.items?.length) {
        return {
          items: currentItem.items,
          title: currentItem.label,
          description: currentItem.description,
        }
      }
      return null
    }

    // Continue navigating deeper
    if (currentItem.items) {
      return findNestedData(currentItem.items, remainingSegments)
    }

    return null
  }

  // Get current page data
  const currentData = findCurrentData(pathSegments)

  // Handle not found state
  if (!currentData) {
    return (
      <div className="card-grid">
        <div className="card-grid__error">
          <h2 className="card-grid__title">Page Not Found</h2>
          <p className="card-grid__description">The requested page could not be found or is not yet available.</p>
          {process.env.NODE_ENV === "development" && (
            <details className="card-grid__debug">
              <summary>Debug Information</summary>
              <p>Path: {location.pathname}</p>
              <p>Segments: {pathSegments.join(" → ")}</p>
            </details>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="card-grid">
      <header className="card-grid__header">
        <h1 className="card-grid__title">{currentData.title}</h1>
        {currentData.description && <p className="card-grid__description">{currentData.description}</p>}
      </header>

      <div className="card-grid__container">
        <div className="card-grid__items" role="grid">
          {currentData.items.map((item) => (
            <div key={item.id} className="card-grid__item" role="gridcell">
              <Card item={item} type="detail" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselCardPage
