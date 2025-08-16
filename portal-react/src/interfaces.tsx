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

export interface CarouselItem {
  id: string
  label: string
  image: string
  href: string
  description?: string
}

export interface CarouselProps {
  items: CarouselItem[]
  title?: string
  description?: string
  type?: "our-purpose" | "featured-products"
}

export interface CardProps {
  item: CarouselItem
  type?: "our-purpose" | "featured-products"
}
