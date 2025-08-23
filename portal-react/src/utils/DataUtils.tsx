import { sparePartsSection, featuredProducts, ourPurposeCaroueslItems } from "../data"
import type { Card } from "../interfaces"

/**
 * Recursively searches for a product by ID in nested data structures
 */
export const findProductById = (productId: string): Card | null => {
  console.log("Searching for product ID:", productId)

  // Search in spare parts sections
  console.log("Searching in spare parts sections...")
  const sparePartsResult = searchInCardArray(sparePartsSection, productId)
  if (sparePartsResult) {
    console.log("Found in spare parts:", sparePartsResult)
    return sparePartsResult
  }

  // Search in featured products (convert CarouselItem to Card format)
  console.log("Searching in featured products...")
  const featuredResult = featuredProducts.find((item) => item.id === productId)
  if (featuredResult) {
    console.log("Found in featured products:", featuredResult)
    return {
      id: featuredResult.id,
      label: featuredResult.label,
      image: featuredResult.image,
      href: featuredResult.href,
      description: featuredResult.description,
      fullDescription: featuredResult.description, // Use description as fallback
      keywords: ["Featured Product", "Industrial", "Electrical"],
      advantages: [
        "High-quality construction and materials",
        "Reliable performance in demanding environments",
        "Comprehensive warranty and support",
        "Industry-leading specifications",
      ],
    }
  }

  // Search in other categories
  console.log("Searching in other categories...")
  for (const category of ourPurposeCaroueslItems) {
    if (category.sections) {
      const categoryResult = searchInCardArray(category.sections, productId)
      if (categoryResult) {
        console.log("Found in category:", category.label, categoryResult)
        return categoryResult
      }
    }
  }

  console.log("Product not found:", productId)
  return null
}

/**
 * Recursively searches in an array of Cards
 */
const searchInCardArray = (cards: Card[], productId: string): Card | null => {
  for (const card of cards) {
    console.log("Checking card:", card.id)

    if (card.id === productId) {
      console.log("Found matching card:", card)
      return card
    }

    if (card.items && card.items.length > 0) {
      console.log("Searching in nested items for:", card.id)
      const nestedResult = searchInCardArray(card.items, productId)
      if (nestedResult) return nestedResult
    }
  }

  return null
}

/**
 * Get all available product IDs for debugging
 */
export const getAllProductIds = (): string[] => {
  const ids: string[] = []

  const collectIds = (cards: Card[]) => {
    cards.forEach((card) => {
      ids.push(card.id)
      if (card.items) {
        collectIds(card.items)
      }
    })
  }

  // Collect from spare parts
  collectIds(sparePartsSection)

  // Collect from featured products
  featuredProducts.forEach((item) => ids.push(item.id))

  // Collect from other categories
  ourPurposeCaroueslItems.forEach((category) => {
    if (category.sections) {
      collectIds(category.sections)
    }
  })

  return ids
}
