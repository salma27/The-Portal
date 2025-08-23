export interface DropdownItem {
  label: string
  id: string
  href: string
}

export interface Option {
  label: string
  id: string
  href?: string
  dropdown?: DropdownItem[]
}

export interface ElementRoute {
  path: string
  id: number
  element: any
}

export interface Card {
  id: string
  label: string
  image: string
  href: string
  description?: string
  fullDescription?: string // Full paragraph description for ProductDetails
  keywords?: string[] // Keywords for the product
  advantages?: string[] // List of advantages
  items?: Card[] // Infinite nesting - can contain more cards with their own items
}

export interface CarouselItem {
  id: string
  label: string
  image: string
  href: string
  description?: string
  sections?: Card[]
}

export interface CarouselProps {
  items: CarouselItem[]
  title?: string
  description?: string
  type?: "our-purpose" | "featured-products"
}

export interface CardProps {
  item: CarouselItem | Card
  type?: "our-purpose" | "featured-products" | "section" | "detail"
}
