import type {Option, CarouselItem, Card} from "./interfaces"

export const words = ["MV SWITCHGEAR", "MV TRANSFORMERS", "LV SWITCHGEAR", "MV SERVICE", "LV SERVICE", "MV SPARE PARTS"]

export const options: Option[] = [
  {
    id: "spare-parts",
    label: "Spare Parts",
    dropdown: [
      { id: "mv-circuit-breakers", label: "Medium Voltage Circuit Breakers", href: "/spare-parts/mv-circuit-breakers" },
      { id: "protection-relays", label: "Protection Relays", href: "/spare-parts/protection-relays" },
      { id: "air-load-break-switches", label: "Air Load Break Switches", href: "/spare-parts/air-load-break-switches" },
      {
        id: "sf6-insulated-load-break-switch",
        label: "SF6 Insulated Load Break Switch",
        href: "/spare-parts/sf6-insulated-load-break-switch",
      },
      { id: "instrument-transformers", label: "Instrument Transformers", href: "/spare-parts/instrument-transformers" },
      { id: "insulators", label: "Insulators", href: "/spare-parts/insulators" },
      { id: "contacts", label: "Contacts", href: "/spare-parts/contacts" },
      { id: "panel-accessories", label: "Panel Accessories", href: "/spare-parts/panel-accessories" },
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    dropdown: [
      { id: "preventive-maintenance", label: "Preventive Maintenance", href: "/maintenance/preventive-maintenance" },
      { id: "testing", label: "Testing", href: "/maintenance/testing" },
    ],
  },
  {
    id: "products",
    label: "Products",
    dropdown: [
      { id: "primary-switchgear", label: "Primary Switchgear", href: "/products/primary-switchgear" },
      { id: "secondary-switchgear", label: "Secondary Switchgear", href: "/products/secondary-switchgear" },
      { id: "mv-transformers", label: "MV Transformers", href: "/products/mv-transformers" },
      { id: "lv-switchgear", label: "LV Switchgear", href: "/products/lv-switchgear" },
    ],
  },
  {
    id: "retrofit",
    label: "Retrofit",
    dropdown: [
      { id: "breaker-retrofit", label: "Breaker Retrofit", href: "/retrofit/breaker-retrofit" },
      { id: "relay-retrofit", label: "Relay Retrofit", href: "/retrofit/relay-retrofit" },
    ],
  },
  {
    id: "our-purpose",
    label: "OUR PURPOSE",
    href: "#our-purpose",
  },
]


export const sparePartsSection: Card[] = [
  { id: "mv-circuit-breakers", 
    label: "Medium Voltage Circuit Breakers", 
    href: "/spare-parts/mv-circuit-breakers",
    image: "string",
    description: "string"
  },
  
  { id: "protection-relays", 
    label: "Protection Relays", 
    href: "/spare-parts/protection-relays",
    image: "string",
    description: "string"
   },
  { id: "air-load-break-switches", 
    label: "Air Load Break Switches", 
    href: "/spare-parts/air-load-break-switches",
    image: "string",
    description: "string" 
  },
  {
    id: "sf6-insulated-load-break-switch",
    label: "SF6 Insulated Load Break Switch",
    href: "/spare-parts/sf6-insulated-load-break-switch",
    image: "string",
    description: "string"
  },
  { 
    id: "instrument-transformers", 
    label: "Instrument Transformers", 
    href: "/spare-parts/instrument-transformers",
    image: "string",
    description: "string" 
  },
  { 
    id: "insulators", 
    label: "Insulators", 
    href: "/spare-parts/insulators",
    image: "string",
    description: "string"
  },
  { 
    id: "contacts", 
    label: "Contacts", 
    href: "/spare-parts/contacts",
    image: "string",
    description: "string" 
  },
  { 
    id: "panel-accessories", 
    label: "Panel Accessories", 
    href: "/spare-parts/panel-accessories",
    image: "string",
    description: "string" 
  },
    
]

export const ourPurposeCaroueslItems: CarouselItem[] = [
    {
      id: "spare-parts",
      label: "Spare Parts",
      image: "/assets/home/spare-part.png?height=250&width=350&text=Spare-parts",
      href: "/spare-parts", // You can update this later
      sections: sparePartsSection
    },
    {
      id: "maintenance",
      label: "Maintenance",
      image: "/assets/home/maintenance.png?height=250&width=350&text=Maintenance",
      href: "#maintenance", // You can update this later
    },
    {
      id: "products",
      label: "Products",
      image: "/assets/home/products.png?height=250&width=350&text=Products",
      href: "#products", // You can update this later
    },
    {
      id: "retrofit",
      label: "Retrofit",
      image: "/assets/home/retrofit.png?height=250&width=350&text=Retrofit",
      href: "#retrofit", // You can update this later
    },
  ]

export const featuredProducts: CarouselItem[] = [
  {
    id: "mv-switchgear-1",
    label: "Advanced MV Switchgear",
    image: "/assets/home/spare-part.png?height=200&width=300&text=MV+Switchgear",
    href: "#mv-switchgear",
    description:
      "High-performance medium voltage switchgear designed for industrial applications with advanced protection and control features.",
  },
  {
    id: "transformer-1",
    label: "Power Transformer",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Transformer",
    href: "#transformer",
    description:
      "Reliable power transformers engineered for optimal efficiency and long-term performance in demanding environments.",
  },
  {
    id: "protection-relay-1",
    label: "Digital Protection Relay",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Protection+Relay",
    href: "#protection-relay",
    description:
      "State-of-the-art digital protection relays offering comprehensive monitoring and fault detection capabilities.",
  },
  {
    id: "circuit-breaker-1",
    label: "Circuit Breaker",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Circuit+Breaker",
    href: "#circuit-breaker",
    description:
      "Heavy-duty circuit breakers providing reliable protection and switching operations for critical electrical systems.",
  },
  {
    id: "load-switch-1",
    label: "Load Break Switch",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Load+Switch",
    href: "#load-switch",
    description:
      "Robust load break switches designed for safe and efficient switching operations in medium voltage networks.",
  },
  {
    id: "instrument-transformer-1",
    label: "Instrument Transformer",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Instrument+Transformer",
    href: "#instrument-transformer",
    description:
      "Precision instrument transformers for accurate measurement and protection in electrical power systems.",
  },
]
