import type { Option } from "./interfaces"

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
