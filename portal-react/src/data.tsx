import type { Option, CarouselItem, Card } from "./interfaces"

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

// Infinite nesting example - Level 5+ items
export const siemens3AP1Parts: Card[] = [
  {
    id: "main-contacts",
    label: "Main Contacts",
    href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/main-contacts",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Main+Contacts",
    description: "High-quality main contacts for Siemens 3AP1 circuit breakers.",
    items: [
      {
        id: "silver-contacts",
        label: "Silver Contacts",
        href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/main-contacts/silver-contacts",
        image: "/assets/home/spare-part.png?height=200&width=300&text=Silver+Contacts",
        description: "Premium silver contacts for optimal conductivity.",
        items: [
          {
            id: "contact-set-a",
            label: "Contact Set A (12kV)",
            href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/main-contacts/silver-contacts/contact-set-a",
            image: "/assets/home/spare-part.png?height=200&width=300&text=Contact+Set+A",
            description: "Contact set for 12kV applications.",
          },
          {
            id: "contact-set-b",
            label: "Contact Set B (24kV)",
            href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/main-contacts/silver-contacts/contact-set-b",
            image: "/assets/home/spare-part.png?height=200&width=300&text=Contact+Set+B",
            description: "Contact set for 24kV applications.",
          },
        ],
      },
      {
        id: "copper-contacts",
        label: "Copper Contacts",
        href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/main-contacts/copper-contacts",
        image: "/assets/home/spare-part.png?height=200&width=300&text=Copper+Contacts",
        description: "Durable copper contacts for heavy-duty applications.",
      },
    ],
  },
  {
    id: "arc-chutes",
    label: "Arc Chutes",
    href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/arc-chutes",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Arc+Chutes",
    description: "Arc chutes for effective arc quenching in Siemens 3AP1 breakers.",
  },
  {
    id: "operating-mechanism",
    label: "Operating Mechanism",
    href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/operating-mechanism",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Operating+Mechanism",
    description: "Complete operating mechanism assembly.",
    items: [
      {
        id: "springs",
        label: "Springs",
        href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/operating-mechanism/springs",
        image: "/assets/home/spare-part.png?height=200&width=300&text=Springs",
        description: "High-tension springs for mechanism operation.",
      },
      {
        id: "linkages",
        label: "Linkages",
        href: "/spare-parts/mv-circuit-breakers/siemens-3ap1/operating-mechanism/linkages",
        image: "/assets/home/spare-part.png?height=200&width=300&text=Linkages",
        description: "Mechanical linkages for breaker operation.",
      },
    ],
  },
]

// Level 4 items
export const mvCircuitBreakersItems: Card[] = [
  {
    id: "abb-mv-circuit-breakers",
    label: "ABB Medium Voltage Circuit Breakers – Reliable, Durable, and Always Ready",
    href: "/spare-parts/mv-circuit-breakers/abb-mv-circuit-breakers",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Siemens+3AP1",
    description: 
    "test",
  },
  {
    id: "abb-vd4",
    label: "ABB VD4 Circuit Breaker",
    href: "/spare-parts/mv-circuit-breakers/abb-vd4",
    image: "/assets/home/spare-part.png?height=200&width=300&text=ABB+VD4",
    description: "Reliable vacuum circuit breaker designed for demanding industrial applications.",
    items: [
      {
        id: "vacuum-bottles",
        label: "Vacuum Bottles",
        href: "/spare-parts/mv-circuit-breakers/abb-vd4/vacuum-bottles",
        image: "/assets/home/spare-part.png?height=200&width=300&text=Vacuum+Bottles",
        description: "High-quality vacuum bottles for ABB VD4 breakers.",
      },
      {
        id: "control-unit",
        label: "Control Unit",
        href: "/spare-parts/mv-circuit-breakers/abb-vd4/control-unit",
        image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Unit",
        description: "Electronic control unit for breaker operation.",
        items: [
          {
            id: "control-board",
            label: "Control Board",
            href: "/spare-parts/mv-circuit-breakers/abb-vd4/control-unit/control-board",
            image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Board",
            description: "Main control board assembly.",
          },
          {
            id: "sensors",
            label: "Sensors",
            href: "/spare-parts/mv-circuit-breakers/abb-vd4/control-unit/sensors",
            image: "/assets/home/spare-part.png?height=200&width=300&text=Sensors",
            description: "Position and status sensors.",
          },
        ],
      },
    ],
  },
  {
    id: "schneider-hva",
    label: "Schneider HVA Circuit Breaker",
    href: "/spare-parts/mv-circuit-breakers/schneider-hva",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Schneider+HVA",
    description: "Compact air-insulated circuit breaker with excellent switching performance.",
    items: [
      {
        id: "insulation-system",
        label: "Insulation System",
        href: "/spare-parts/mv-circuit-breakers/schneider-hva/insulation-system",
        image: "/assets/home/spare-part.png?height=200&width=300&text=Insulation+System",
        description: "Complete insulation system for HVA breakers.",
      },
    ],
  },
  {
    id: "ge-powervac",
    label: "GE PowerVac Circuit Breaker",
    href: "/spare-parts/mv-circuit-breakers/ge-powervac",
    image: "/assets/home/spare-part.png?height=200&width=300&text=GE+PowerVac",
    description: "Vacuum circuit breaker with superior reliability and minimal maintenance requirements.",
  },
]

export const protectionRelaysItems: Card[] = [
  {
    id: "siemens-7sa6",
    label: "Siemens 7SA6 Protection Relay",
    href: "/spare-parts/protection-relays/siemens-7sa6",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Siemens+7SA6",
    description: "Advanced numerical differential protection relay for transformers and generators.",
    items: [
      {
        id: "cpu-module",
        label: "CPU Module",
        href: "/spare-parts/protection-relays/siemens-7sa6/cpu-module",
        image: "/assets/home/spare-part.png?height=200&width=300&text=CPU+Module",
        description: "Main processing unit for the 7SA6 relay.",
      },
      {
        id: "io-modules",
        label: "I/O Modules",
        href: "/spare-parts/protection-relays/siemens-7sa6/io-modules",
        image: "/assets/home/spare-part.png?height=200&width=300&text=IO+Modules",
        description: "Input/output modules for signal processing.",
        items: [
          {
            id: "analog-input",
            label: "Analog Input Module",
            href: "/spare-parts/protection-relays/siemens-7sa6/io-modules/analog-input",
            image: "/assets/home/spare-part.png?height=200&width=300&text=Analog+Input",
            description: "Analog signal input processing module.",
          },
          {
            id: "digital-output",
            label: "Digital Output Module",
            href: "/spare-parts/protection-relays/siemens-7sa6/io-modules/digital-output",
            image: "/assets/home/spare-part.png?height=200&width=300&text=Digital+Output",
            description: "Digital output control module.",
          },
        ],
      },
    ],
  },
  {
    id: "abb-red670",
    label: "ABB RED670 Protection Relay",
    href: "/spare-parts/protection-relays/abb-red670",
    image: "/assets/home/spare-part.png?height=200&width=300&text=ABB+RED670",
    description: "Comprehensive generator protection relay with integrated control functions.",
  },
  {
    id: "schneider-p14x",
    label: "Schneider P14x Protection Relay",
    href: "/spare-parts/protection-relays/schneider-p14x",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Schneider+P14x",
    description: "Multi-function protection relay for medium voltage applications.",
  },
  {
    id: "ge-multilin-850",
    label: "GE Multilin 850 Protection Relay",
    href: "/spare-parts/protection-relays/ge-multilin-850",
    image: "/assets/home/spare-part.png?height=200&width=300&text=GE+Multilin+850",
    description: "Feeder protection and control system with advanced communication capabilities.",
  },
]

export const airLoadBreakSwitchesItems: Card[] = [
  {
    id: "siemens-3ae5",
    label: "Siemens 3AE5 Load Break Switch",
    href: "/spare-parts/air-load-break-switches/siemens-3ae5",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Siemens+3AE5",
    description: "Air-insulated load break switch for reliable switching operations.",
  },
  {
    id: "abb-oetl-nos",
    label: "ABB OETL-NOS Load Break Switch",
    href: "/spare-parts/air-load-break-switches/abb-oetl-nos",
    image: "/assets/home/spare-part.png?height=200&width=300&text=ABB+OETL",
    description: "Outdoor air-insulated load break switch with excellent performance.",
  },
  {
    id: "schneider-sm6",
    label: "Schneider SM6 Load Break Switch",
    href: "/spare-parts/air-load-break-switches/schneider-sm6",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Schneider+SM6",
    description: "Compact switchgear solution with integrated load break switch.",
  },
]

export const sf6LoadBreakSwitchesItems: Card[] = [
  {
    id: "siemens-3ae1",
    label: "Siemens 3AE1 SF6 Switch",
    href: "/spare-parts/sf6-insulated-load-break-switch/siemens-3ae1",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Siemens+3AE1+SF6",
    description: "SF6-insulated load break switch for enhanced performance and reliability.",
  },
  {
    id: "abb-safe-ring",
    label: "ABB SafeRing SF6 Switch",
    href: "/spare-parts/sf6-insulated-load-break-switch/abb-safe-ring",
    image: "/assets/home/spare-part.png?height=200&width=300&text=ABB+SafeRing",
    description: "Environmentally friendly SF6 switch with sealed pole technology.",
  },
]

export const instrumentTransformersItems: Card[] = [
  {
    id: "siemens-4eu3",
    label: "Siemens 4EU3 Current Transformer",
    href: "/spare-parts/instrument-transformers/siemens-4eu3",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Siemens+4EU3+CT",
    description: "High-accuracy current transformer for measurement and protection.",
  },
  {
    id: "abb-tg-series",
    label: "ABB TG Series Voltage Transformer",
    href: "/spare-parts/instrument-transformers/abb-tg-series",
    image: "/assets/home/spare-part.png?height=200&width=300&text=ABB+TG+VT",
    description: "Precision voltage transformer with excellent linearity and stability.",
  },
]

export const insulatorsItems: Card[] = [
  {
    id: "ceramic-post",
    label: "Ceramic Post Insulators",
    href: "/spare-parts/insulators/ceramic-post",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Ceramic+Post",
    description: "High-strength ceramic post insulators for outdoor applications.",
  },
  {
    id: "polymer-composite",
    label: "Polymer Composite Insulators",
    href: "/spare-parts/insulators/polymer-composite",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Polymer+Composite",
    description: "Lightweight polymer insulators with superior contamination performance.",
  },
]

export const contactsItems: Card[] = [
  {
    id: "silver-tungsten",
    label: "Silver Tungsten Contacts",
    href: "/spare-parts/contacts/silver-tungsten",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Silver+Tungsten",
    description: "High-performance contacts for circuit breakers and switches.",
  },
  {
    id: "copper-chrome",
    label: "Copper Chrome Contacts",
    href: "/spare-parts/contacts/copper-chrome",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Copper+Chrome",
    description: "Durable contacts with excellent arc resistance and conductivity.",
  },
]

export const panelAccessoriesItems: Card[] = [
  {
    id: "control-cables",
    label: "Control Cables",
    href: "/spare-parts/panel-accessories/control-cables",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Cables",
    description: "High-quality control cables for switchgear applications.",
  },
  {
    id: "terminal-blocks",
    label: "Terminal Blocks",
    href: "/spare-parts/panel-accessories/terminal-blocks",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Terminal+Blocks",
    description: "Reliable terminal blocks for secure electrical connections.",
  },
]

// Level 3 data - Sections for each category
export const sparePartsSection: Card[] = [
  {
    id: "mv-circuit-breakers",
    label: "Medium Voltage Circuit Breakers",
    href: "/spare-parts/mv-circuit-breakers",
    image: "/assets/home/spare-part.png?height=250&width=350&text=MV+Circuit+Breakers",
    description: "High-performance circuit breakers for medium voltage applications with advanced protection features.",
    items: mvCircuitBreakersItems,
  },
  {
    id: "protection-relays",
    label: "Protection Relays",
    href: "/spare-parts/protection-relays",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Protection+Relays",
    description: "Advanced digital protection relays for comprehensive system monitoring and fault detection.",
    items: protectionRelaysItems,
  },
  {
    id: "air-load-break-switches",
    label: "Air Load Break Switches",
    href: "/spare-parts/air-load-break-switches",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Air+Load+Switches",
    description: "Reliable air-insulated load break switches for safe switching operations.",
    items: airLoadBreakSwitchesItems,
  },
  {
    id: "sf6-insulated-load-break-switch",
    label: "SF6 Insulated Load Break Switch",
    href: "/spare-parts/sf6-insulated-load-break-switch",
    image: "/assets/home/spare-part.png?height=250&width=350&text=SF6+Load+Switches",
    description: "SF6-insulated switches offering superior performance and environmental benefits.",
    items: sf6LoadBreakSwitchesItems,
  },
  {
    id: "instrument-transformers",
    label: "Instrument Transformers",
    href: "/spare-parts/instrument-transformers",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Instrument+Transformers",
    description: "Precision instrument transformers for accurate measurement and protection applications.",
    items: instrumentTransformersItems,
  },
  {
    id: "insulators",
    label: "Insulators",
    href: "/spare-parts/insulators",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Insulators",
    description: "High-quality insulators for reliable electrical isolation in various environments.",
    items: insulatorsItems,
  },
  {
    id: "contacts",
    label: "Contacts",
    href: "/spare-parts/contacts",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Contacts",
    description: "Premium electrical contacts for switches and circuit breakers with excellent durability.",
    items: contactsItems,
  },
  {
    id: "panel-accessories",
    label: "Panel Accessories",
    href: "/spare-parts/panel-accessories",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Panel+Accessories",
    description: "Essential accessories and components for electrical panel installations.",
    items: panelAccessoriesItems,
  },
]

export const ourPurposeCaroueslItems: CarouselItem[] = [
  {
    id: "spare-parts",
    label: "Spare Parts",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Spare+Parts",
    href: "/spare-parts",
    sections: sparePartsSection,
  },
  {
    id: "maintenance",
    label: "Maintenance",
    image: "/assets/home/maintenance.png?height=250&width=350&text=Maintenance",
    href: "/maintenance",
    sections: sparePartsSection,
  },
  {
    id: "products",
    label: "Products",
    image: "/assets/home/products.png?height=250&width=350&text=Products",
    href: "/products",
    sections: sparePartsSection,
  },
  {
    id: "retrofit",
    label: "Retrofit",
    image: "/assets/home/retrofit.png?height=250&width=350&text=Retrofit",
    href: "/retrofit",
    sections: sparePartsSection,
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
