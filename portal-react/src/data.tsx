import type { Option, CarouselItem, Card, Testimonial } from "./interfaces"

export const words = ["MV SWITCHGEAR", "MV TRANSFORMERS", "LV SWITCHGEAR", "MV SERVICE", "LV SERVICE", "MV SPARE PARTS"]

export const options: Option[] = [
  {
    id: "spare-parts",
    label: "Spare Parts",
    href: "/spare-parts",
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
    href: "/maintenance",
    dropdown: [
      { id: "preventive-maintenance", label: "Preventive Maintenance", href: "/maintenance/preventive-maintenance" },
      { id: "testing", label: "Testing", href: "/maintenance/testing" },
    ],
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
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
    href: "/retrofit",
    dropdown: [
      { id: "breaker-retrofit", label: "Breaker Retrofit", href: "/retrofit/breaker-retrofit" },
      { id: "relay-retrofit", label: "Relay Retrofit", href: "/retrofit/relay-retrofit" },
    ],
  },
  {
    id: "our-purpose",
    label: "OUR PURPOSE",
    href: "/our-purpose",
  },
  {id: "references",
    label: "References",
    href: "/refrences",
    dropdown: [
      {id: "testimonials", 
       label: "Testimonials",
       href: "/refrences/testimonials"
      },
      {id: "blogs",
        label: "Blogs",
        href:"/refrences/blogs"
      }
    ]
  }
]


export const retrofitSection: Card[] = []

export const productsSection: Card[] = [
  {
    id: "primary-switchgear",
    label: "Primary Switchgear",
    href: "/products/primary-switchgear",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Cables",
    fullDescription:[
      "ur Air-Insulated Switchgear solutions are designed to meet the evolving demands of utilities and industrial sectors—offering high reliability, robust construction, and flexible configurations for a wide range of applications, including highly critical environments.",
      "Product Spotlight: UniGear ZS1",
      "The UniGear ZS1 is a globally recognized medium-voltage air-insulated switchgear, ideal for distributing electrical power in demanding and mission-critical applications, such as:",
      "Utility substations and power generation plants",
      "Oil & gas facilities (onshore and offshore platforms)",
      "Mining operations and heavy industries",
      "Nuclear power stations and chemical processing units",
      "Marine applications (container ships, cruise ships)",
      "Data centers and critical IT infrastructure",
    ],
    keywords:[
      "Rated up to 24 kV, 4000 A, and 63 kA short-circuit withstand capacity",
      "Modular and customizable: Easily configured to meet specific application requirements",
      "Internal arc classification up to AFLR 40 kA, 1s for enhanced personnel and equipment safety",
      "Fully withdrawable vacuum circuit breakers (VD4) and contactors",
      "Front access design: Simplifies installation and maintenance, ideal for confined spaces",
      "Compatible with digital protection, control, and automation systems (IEC 61850)",
    ],
    advantages: [
      "Proven reliability: Trusted in the most critical industries and harshest environments",
      "Global certifications and compliance: IEC, ANSI, GOST, Lloyd’s Register, and more",
      "Extended service life: Built for durability with minimal maintenance needs",
      "High safety standards: Arc-proof construction with robust interlocks and protections",
      "Quick delivery & engineering support: Reduce downtime with fast lead times and expert consultation",
    ],
    solutions: [
      "Whether you're retrofitting aging infrastructure, designing a new facility, or managing a complex multi-site operation, our team offers end-to-end engineered solutions. From layout design and customization to commissioning and after-sales support—we’re equipped to meet your medium-voltage switchgear requirements with minimal delivery timesand maximum system reliability.",
    ],
    comments:[
      "Contact us today to speak with our experts and get tailored support for your air-insulated switchgear needs.",
    ]
  },
  {
    id: "secondary-switchgear",
    label: "Secondary Switchgear",
    href: "/products/secondary-switchgear",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Cables",
    fullDescription:[
      "ur Air-Insulated Switchgear solutions are designed to meet the evolving demands of utilities and industrial sectors—offering high reliability, robust construction, and flexible configurations for a wide range of applications, including highly critical environments.",
      "Product Spotlight: UniGear ZS1",
      "The UniGear ZS1 is a globally recognized medium-voltage air-insulated switchgear, ideal for distributing electrical power in demanding and mission-critical applications, such as:",
      "Utility substations and power generation plants",
      "Oil & gas facilities (onshore and offshore platforms)",
      "Mining operations and heavy industries",
      "Nuclear power stations and chemical processing units",
      "Marine applications (container ships, cruise ships)",
      "Data centers and critical IT infrastructure",
    ],
    keywords:[
      "Rated up to 24 kV, 4000 A, and 63 kA short-circuit withstand capacity",
      "Modular and customizable: Easily configured to meet specific application requirements",
      "Internal arc classification up to AFLR 40 kA, 1s for enhanced personnel and equipment safety",
      "Fully withdrawable vacuum circuit breakers (VD4) and contactors",
      "Front access design: Simplifies installation and maintenance, ideal for confined spaces",
      "Compatible with digital protection, control, and automation systems (IEC 61850)",
    ],
    advantages: [
      "Proven reliability: Trusted in the most critical industries and harshest environments",
      "Global certifications and compliance: IEC, ANSI, GOST, Lloyd’s Register, and more",
      "Extended service life: Built for durability with minimal maintenance needs",
      "High safety standards: Arc-proof construction with robust interlocks and protections",
      "Quick delivery & engineering support: Reduce downtime with fast lead times and expert consultation",
    ],
    solutions: [
      "Whether you're retrofitting aging infrastructure, designing a new facility, or managing a complex multi-site operation, our team offers end-to-end engineered solutions. From layout design and customization to commissioning and after-sales support—we’re equipped to meet your medium-voltage switchgear requirements with minimal delivery timesand maximum system reliability.",
    ],
    comments:[
      "Contact us today to speak with our experts and get tailored support for your air-insulated switchgear needs.",
    ]
  },
]

export const maintenanceTestingSection: Card[] = [
  {
    id: "diagnostic-testing",
    label: "Diagnostic Testing for Medium Voltage Networks",
    href: "/maintenance/testing/diagnostic-testing",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Cables",
    fullDescription:[
      "Electrical networks play a vital role in delivering continuous power to facilities and infrastructure. Like all operating equipment, electrical systems experience operational stress, environmental exposure, and natural aging  all of which can degrade performance over time. This makes preventive maintenance essential to sustaining long-term network reliability.",
      "You can explore our detailed maintenance services in the .",
      "In addition to maintenance, diagnostic testing is a key element in predicting the health of your equipment. These tests help identify early signs of deterioration or deviation from standard performance, allowing for proactive intervention before faults occur."
    ],
  },
  {
    id: "electrical-testing",
    label: "Electrical Testing Services",
    href: "/maintenance/testing/electrical-testing",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Cables",
    fullDescription:[
      "Our advanced testing services are designed to evaluate the mechanical, electrical, and thermal condition of your medium voltage switchgear and components:",
      "1.	Contact Resistance Test",
      "Measures the resistance across breaker contacts to detect erosion, contamination, or loose connections that could cause overheating or arc faults.",
      "2.	Circuit Breaker Timing Test",
      "Evaluates the opening and closing speed and timing of circuit breakers to ensure proper mechanical operation and trip functionality.",
      "3.	Primary Injection Test",
      "Simulates real current loads through the protection system to validate the entire protection chain, including CTs and relays.",
      "4.	Secondary Injection Test",
      "Directly injects signals into protection relays to verify logic, settings, and relay response without energizing the full system.",
    ],
    advantages:[
      "Early fault detection before critical failures occur",
      "Improved network safety and reliability",
      "Compliance with electrical standards and audit requirements",
      "Supports planned maintenance by identifying which components need servicing",
      "Reduces unplanned downtime and costly emergency repairs",
    ],
    comments:[
      "At Proserve, we combine preventive maintenance and diagnostic testing to provide a complete reliability solution for your medium voltage systems. For more details or to schedule testing, talk to our technical experts today.",
      "You can check all testing methods here",
    ]
  },
]

export const maintenanceSection: Card[] = [
  {
    id: "preventive-maintenance",
    label: "Preventive maintenance",
    href: "/maintenance/preventive-maintenance",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Cables",
    description: "Preventive Maintenance for Medium Voltage Electrical Networks",
    fullDescription:[
    "Electrical networks are the backbone of modern operations, ensuring continuous power flow across industries. Like any equipment under constant operation, they are subject to electrical stress, environmental wear, and natural depreciation. Without proper care, minor external factors such as dust, heat, and humidity can escalate into major internal faults — leading to flashovers, insulation failure, or even catastrophic equipment damage. At Proserve, we believe that preventive maintenance is not a cost — it’s an investment. For a fraction of the cost of emergency repairs or replacements, scheduled maintenance can extend the life of critical switchgear components and prevent unplanned shutdowns.",
    ],
    whyItMatters: [
      "1)	Protects high-value equipment like breakers, current/voltage transformers, and epoxy insulators",
      "2)	Reduces risk of flashovers and insulation failures due to environmental stress",
      "3)	Lowers downtime and production loss caused by unexpected breakdowns",
      "4)	Extends the life span of your electrical infrastructure",
      "5)	Ensures network safety and compliance with electrical standards"
    ],
    advantages: [
      "Over 30 years of experienced engineers and technicians in medium voltage switchgear maintenance",
      "Highly skilled engineers and technicians with deep troubleshooting expertise",
      "Specialized in ABB and multi-brand systems",
      "State-of-the-art diagnostic tools and service procedures",
      "Rapid response team available for emergency support and inspections"
    ],
    scope:[
      "(For detailed breakdown, please see the attached file)",
      "1.	Visual and mechanical inspection of panels and components",
      "2.	Cleaning of insulators, breakers, and busbars",
      "3.	Infrared thermography to detect hotspots",
      "4.	Contact resistance measurement",
      "5.	Breaker mechanical operation testing",
      "6.	Insulation resistance and dielectric tests",
      "7.	Functional testing of protection relays and interlocks",
      "8.	Verification of panel heaters, hygrostats, and ventilation",
      "9.	Documentation and maintenance reporting"
    ],
    comments:[
      "For tailored maintenance solutions, annual service contracts, or emergency support, talk to one of our experts today — we're ready to help keep your network running reliably and efficiently.",
    ]
  },
  {
    id: "testing",
    label: "Testing",
    href: "/maintenance/testing",
    image: "/assets/home/spare-part.png?height=200&width=300&text=Control+Cables",
    items: maintenanceTestingSection
  },

]

// Level 2 data - Sections for each category
export const sparePartsSection: Card[] = [
  {
    id: "mv-circuit-breakers",
    label: "Medium Voltage Circuit Breakers",
    href: "/spare-parts/mv-circuit-breakers",
    image: "/assets/home/spare-part.png?height=250&width=350&text=MV+Circuit+Breakers",
    description: "High-performance circuit breakers for medium voltage applications with advanced protection features.",
  },
  {
    id: "protection-relays",
    label: "Protection Relays",
    href: "/spare-parts/protection-relays",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Protection+Relays",
    description: "Advanced digital protection relays for comprehensive system monitoring and fault detection.",
  },
  {
    id: "air-load-break-switches",
    label: "Air Load Break Switches",
    href: "/spare-parts/air-load-break-switches",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Air+Load+Switches",
    description: "Reliable air-insulated load break switches for safe switching operations.",
  },
  {
    id: "sf6-insulated-load-break-switch",
    label: "SF6 Insulated Load Break Switch",
    href: "/spare-parts/sf6-insulated-load-break-switch",
    image: "/assets/home/spare-part.png?height=250&width=350&text=SF6+Load+Switches",
    description: "SF6-insulated switches offering superior performance and environmental benefits.",
  },
  {
    id: "instrument-transformers",
    label: "Instrument Transformers",
    href: "/spare-parts/instrument-transformers",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Instrument+Transformers",
    description: "Precision instrument transformers for accurate measurement and protection applications.",
  },
  {
    id: "insulators",
    label: "Insulators",
    href: "/spare-parts/insulators",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Insulators",
    description: "High-quality insulators for reliable electrical isolation in various environments.",
  },
  {
    id: "contacts",
    label: "Contacts",
    href: "/spare-parts/contacts",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Contacts",
    description: "Premium electrical contacts for switches and circuit breakers with excellent durability.",
  },
  {
    id: "panel-accessories",
    label: "Panel Accessories",
    href: "/spare-parts/panel-accessories",
    image: "/assets/home/spare-part.png?height=250&width=350&text=Panel+Accessories",
    description: "Essential accessories and components for electrical panel installations.",
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
    sections: maintenanceSection,
  },
  {
    id: "products",
    label: "Products",
    image: "/assets/home/products.png?height=250&width=350&text=Products",
    href: "/products",
    sections: productsSection,
  },
  {
    id: "retrofit",
    label: "Retrofit",
    image: "/assets/home/retrofit.png?height=250&width=350&text=Retrofit",
    href: "/retrofit",
    sections: retrofitSection,
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

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "cemex-egypt",
    clientName: "Cemex Egypt",
    sector: "Ready-Mix Concrete Production",
    logo: "/cemex-logo.jpg",
    challenge:
      "Cemex Egypt encountered reliability issues with their medium voltage circuit breakers of Russian origin, which had become faulty. Due to budget limitations, replacing the entire switchgear was not an option. A more cost-effective and efficient solution was needed to maintain operations and minimize production downtime.",
    solution:
      "Pro Serve provided a complete retrofit solution using ABB HD4 circuit breakers. This approach allowed the client to replace the faulty breakers without changing the existing switchgear, significantly reducing both cost and time. The retrofit strategy successfully minimized shutdown time by nearly 90%, enabling continued operations with minimal disruption.",
    productsUsed: ["ABB HD4 Circuit Breakers"],
    servicesProvided: [
      "Breaker Retrofit",
      "Breaker Timing Test",
      "Contact Resistance Test",
      "Factory Acceptance Test (FAT)",
      "On-Site Installation with Planned Shutdown",
    ],
    projectDuration: "2 weeks from site measurements to installation",
    testimonialQuote:
      "The retrofit process was seamless. Pro Serve's team worked around our operational hours and collected measurements needed for the retrofit process without affecting factory activities. They completed the final retrofit product in their workshop, followed by an invitation to attend the FAT test for the breakers, and finally installed the breakers in the switchgear with a pre-planned shutdown of only 10 minutes per breaker. Their flexibility and technical skill were exactly what we needed.",
    testimonialAuthor: "Maintenance Manager",
    testimonialPosition: "Cemex Egypt",
  },
  {
    id: "dar-el-fouad-hospital",
    clientName: "Dar El Fouad Hospital",
    sector: "Healthcare",
    logo: "/dar-el-fouad-hospital-logo.jpg",
    challenge:
      "The hospital's low voltage (LV) side lacked redundancy due to an initial design error. A short circuit in the LV busbar had a critical impact, triggering upstream medium voltage protection and disrupting the transformer. This posed a major risk to continuous power supply — a vital need in a healthcare facility.",
    solution:
      "Pro Serve conducted a thorough technical study and implemented a solution by re-routing cables between two independent power sources, effectively introducing redundancy without major infrastructural changes. In addition, comprehensive preventive maintenance and electrical testing were performed to enhance the reliability and safety of the system.",
    productsUsed: [
      "Medium Voltage Cables",
      "Breaker Timing & Contact Resistance Tester",
      "Transformer Turns Ratio & Winding Resistance Tester",
    ],
    servicesProvided: ["Preventive Maintenance", "Electrical Testing", "Network Redundancy Engineering"],
    projectDuration: "2 Days",
    testimonialQuote:
      "Pro Serve delivered exactly what they promised — a major electrical upgrade without interfering with patient care. Lacking redundancy in the LV side of the network due to an initial design mistake made it difficult to maintain normal electricity flow, often requiring the use of generators. Pro Serve's technical study found a way around this by shifting cables between two independent sources, effectively resolving the issue. Their preventive maintenance and testing made a real difference in keeping our system compliant and reliable.",
    testimonialAuthor: "Facilities Manager",
    testimonialPosition: "Dar El Fouad Hospital",
  },
  {
    id: "giza-systems",
    clientName: "Giza Systems",
    sector: "Corporate Headquarters",
    logo: "/giza-systems-logo.jpg",
    challenge:
      "The facility lacked a low voltage coupler to automatically switch between the generator input and the normal utility network, requiring manual intervention during power outages. This created unnecessary delays and operational risk. Additionally, the two incoming panels were located in separate rooms, making integration more complex.",
    solution:
      "Pro Serve engineered and installed an ABB low voltage panel extension with a built-in coupler system, allowing automatic transfer between power sources. The team provided a detailed cable routing and panel placement plan in advance, ensuring clarity and minimal disruption. Despite logistical challenges, all work was completed during night shifts to avoid interfering with daytime operations.",
    productsUsed: ["Low Voltage Panel", "Low Voltage Cables"],
    servicesProvided: ["ABB Low Voltage Panel Extension"],
    projectDuration: "2 Days",
    testimonialQuote:
      "Pro Serve gave 110% effort in resolving a major network issue where our generator had to be operated manually whenever the normal network went offline. The challenge of having each incoming panel in a different room was no issue for Pro Serve's technical team. They submitted pre-drawn plans showing how the cables would be linked and where the fabricated panel for the coupler would be installed to implement a 2-out-of-3 logic. Their flexibility to work night shifts to avoid daytime disruptions was a big plus for a seamless process.",
    testimonialAuthor: "Facilities Manager",
    testimonialPosition: "Giza Systems",
  },
  {
    id: "hilton-heliopolis",
    clientName: "Hilton Heliopolis",
    sector: "Hospitality",
    logo: "/hilton-heliopolis-logo.jpg",
    challenge:
      "The hotel's medium voltage switchgear was equipped with outdated 20-year-old protection relays, many of which had no available technical documentation. Upgrading to a modern, reliable solution was essential to ensure continued safety and performance without full panel replacement.",
    solution:
      "Pro Serve successfully upgraded the legacy protection system by implementing ABB's state-of-the-art Relion REF615 relays. Through advanced testing and functional analysis, the team reverse-engineered the old relay logic and consolidated multiple functions into modern single-unit devices. The new relays were configured, installed, and tested on-site to ensure full compliance with current protection requirements—all completed within a tight three-day window.",
    productsUsed: ["ABB Relion REF615 Protection Relays"],
    servicesProvided: ["ABB Medium Voltage Relay Upgrade", "Functional Testing & Commissioning"],
    projectDuration: "3 Days",
    testimonialQuote:
      "Pro Serve's highly technical team provided a major cost- and time-efficient upgrade for our 20-year-old relays. Despite the lack of documentation for the old units, they tested, analyzed, and replicated the necessary functions, integrating several relays into one modern solution. All functions were tested to ensure the protection requirements were met. A very professional job.",
    testimonialAuthor: "Facilities Manager",
    testimonialPosition: "Hilton Heliopolis",
  },
]