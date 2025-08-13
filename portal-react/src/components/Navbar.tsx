import type React from "react"
import { useState, useEffect } from "react"
import "../css/Navbar.css"
import type { Option } from "../interfaces"

interface NavbarProps {
  options?: Option[]
}

const Navbar: React.FC<NavbarProps> = ({ options = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileDropdowns([])
  }

  const toggleMobileDropdown = (optionId: string) => {
    setOpenMobileDropdowns((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId],
    )
  }

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
        setOpenMobileDropdowns([])
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav className="navbar">
      {/* Desktop Links */}
      <div className="navbar__links">
        {options?.length &&
          options?.map((option: Option) => (
            <div key={option.id} className="navbar__item">
              {option.dropdown ? (
                <>
                  <span className="navbar__link">
                    {option.label}
                    <span className="navbar__dropdown-arrow">▼</span>
                  </span>
                  <div className="navbar__dropdown">
                    {option.dropdown.map((item) => (
                      <a key={item.id} href={item.href} className="navbar__dropdown-item">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={option.href} className="navbar__link">
                  {option.label}
                </a>
              )}
            </div>
          ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="navbar__mobile-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {options?.length &&
          options?.map((option: Option) => (
            <div key={`mobile-${option.id}`} className="navbar__mobile-item">
              {option.dropdown ? (
                <>
                  <div className="navbar__mobile-link" onClick={() => toggleMobileDropdown(option.id)}>
                    {option.label}
                    <span className={`navbar__mobile-arrow ${openMobileDropdowns.includes(option.id) ? "active" : ""}`}>
                      ▼
                    </span>
                  </div>
                  <div className={`navbar__mobile-dropdown ${openMobileDropdowns.includes(option.id) ? "active" : ""}`}>
                    {option.dropdown.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className="navbar__mobile-dropdown-item"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={option.href} className="navbar__mobile-link" onClick={closeMobileMenu}>
                  {option.label}
                </a>
              )}
            </div>
          ))}
      </div>
    </nav>
  )
}

export default Navbar
