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
  fullDescription?: string[]
  keywords?: string[]
  advantages?: string[]
  solutions?: string[]
  comments?: string[]
  whyItMatters?: string[]
  scope?: string[]
  items?: Card[]
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

export interface Testimonial {
  id: string
  clientName: string
  sector: string
  logo: string
  projectImage?: string // Add this new field for project photos
  challenge: string
  solution: string
  productsUsed: string[]
  servicesProvided: string[]
  projectDuration: string
  testimonialQuote: string
  testimonialAuthor: string
  testimonialPosition: string
}

export interface AdminData {
  testimonials: Testimonial[]
}
