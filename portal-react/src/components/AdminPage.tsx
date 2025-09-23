"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
import "../css/AdminPage.css"
import type { Option, CarouselItem, Card } from "../interfaces"
import { options as initialOptions, ourPurposeCaroueslItems, featuredProducts, sparePartsSection } from "../data"

interface AdminData {
  options: Option[]
  ourPurposeItems: CarouselItem[]
  featuredProducts: CarouselItem[]
  sparePartsSection: Card[]
}

interface ConfirmDialogProps {
  isOpen: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null

  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <h3 className="confirm-dialog__title">{title}</h3>
        <p className="confirm-dialog__message">{message}</p>
        <div className="confirm-dialog__actions">
          <button onClick={onCancel} className="admin-button admin-button--secondary">
            Cancel
          </button>
          <button onClick={onConfirm} className="admin-button admin-button--danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

const AdminPage: React.FC = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("navbar")

  // Default confirm dialog state with proper functions
  const defaultConfirmDialog = {
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {
      console.log("Default confirm action - this should not be called")
    },
  }

  const [confirmDialog, setConfirmDialog] = useState(defaultConfirmDialog)

  const [adminData, setAdminData] = useState<AdminData>({
    options: initialOptions,
    ourPurposeItems: ourPurposeCaroueslItems,
    featuredProducts: featuredProducts,
    sparePartsSection: sparePartsSection,
  })

  // Form states
  const [navbarForm, setNavbarForm] = useState({
    id: "",
    label: "",
    href: "",
    hasDropdown: false,
    dropdownItems: [{ id: "", label: "", href: "" }],
  })

  const [cardForm, setCardForm] = useState({
    id: "",
    label: "",
    image: "",
    href: "",
    description: "",
    fullDescription: "",
    keywords: "",
    advantages: "",
    type: "our-purpose" as "our-purpose" | "featured-products" | "spare-parts",
  })

  const [editingItem, setEditingItem] = useState<any>(null)

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("adminData")
    if (savedData) {
      setAdminData(JSON.parse(savedData))
    }
  }, [])

  // Save data to localStorage
  const saveData = (newData: AdminData) => {
    setAdminData(newData)
    localStorage.setItem("adminData", JSON.stringify(newData))
  }

  // Confirmation dialog helpers
  const showConfirmDialog = (title: string, message: string, onConfirm: () => void) => {
    setConfirmDialog({
      isOpen: true,
      title,
      message,
      onConfirm,
    })
  }

  const hideConfirmDialog = () => {
    setConfirmDialog(defaultConfirmDialog)
  }

  const handleConfirm = () => {
    confirmDialog.onConfirm()
    hideConfirmDialog()
  }

  // Authentication
  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password!")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword("")
    navigate("/home")
  }

  // Navbar management
  const addNavbarOption = () => {
    const newOption: Option = {
      id: navbarForm.id,
      label: navbarForm.label,
      href: navbarForm.href,
      dropdown: navbarForm.hasDropdown ? navbarForm.dropdownItems.filter((item) => item.id && item.label) : undefined,
    }

    const newData = {
      ...adminData,
      options: [...adminData.options, newOption],
    }
    saveData(newData)
    resetNavbarForm()
  }

  const editNavbarOption = (option: Option) => {
    setNavbarForm({
      id: option.id,
      label: option.label,
      href: option.href || "",
      hasDropdown: !!option.dropdown,
      dropdownItems: option.dropdown || [{ id: "", label: "", href: "" }],
    })
    setEditingItem(option)
  }

  const updateNavbarOption = () => {
    const updatedOptions = adminData.options.map((option) =>
      option.id === editingItem.id
        ? {
            id: navbarForm.id,
            label: navbarForm.label,
            href: navbarForm.href,
            dropdown: navbarForm.hasDropdown
              ? navbarForm.dropdownItems.filter((item) => item.id && item.label)
              : undefined,
          }
        : option,
    )

    const newData = { ...adminData, options: updatedOptions }
    saveData(newData)
    resetNavbarForm()
    setEditingItem(null)
  }

  const deleteNavbarOption = (id: string, label: string) => {
    showConfirmDialog(
      "Delete Navbar Option",
      `Are you sure you want to delete "${label}"? This action cannot be undone.`,
      () => {
        const newData = {
          ...adminData,
          options: adminData.options.filter((option) => option.id !== id),
        }
        saveData(newData)
      },
    )
  }

  const resetNavbarForm = () => {
    setNavbarForm({
      id: "",
      label: "",
      href: "",
      hasDropdown: false,
      dropdownItems: [{ id: "", label: "", href: "" }],
    })
  }

  // Card management
  const addCard = () => {
    const newCard: Card | CarouselItem = {
      id: cardForm.id,
      label: cardForm.label,
      image: cardForm.image,
      href: cardForm.href,
      description: cardForm.description,
      ...(cardForm.fullDescription && { fullDescription: cardForm.fullDescription }),
      ...(cardForm.keywords && { keywords: cardForm.keywords.split(",").map((k) => k.trim()) }),
      ...(cardForm.advantages && { advantages: cardForm.advantages.split("\n").filter((a) => a.trim()) }),
    }

    const newData = { ...adminData }

    switch (cardForm.type) {
      case "our-purpose":
        newData.ourPurposeItems = [...adminData.ourPurposeItems, newCard as CarouselItem]
        break
      case "featured-products":
        newData.featuredProducts = [...adminData.featuredProducts, newCard as CarouselItem]
        break
      case "spare-parts":
        newData.sparePartsSection = [...adminData.sparePartsSection, newCard as Card]
        break
    }

    saveData(newData)
    resetCardForm()
  }

  const editCard = (card: any, type: string) => {
    setCardForm({
      id: card.id,
      label: card.label,
      image: card.image,
      href: card.href,
      description: card.description || "",
      fullDescription: card.fullDescription || "",
      keywords: card.keywords ? card.keywords.join(", ") : "",
      advantages: card.advantages ? card.advantages.join("\n") : "",
      type: type as "our-purpose" | "featured-products" | "spare-parts",
    })
    setEditingItem({ ...card, type })
  }

  const updateCard = () => {
    const updatedCard: Card | CarouselItem = {
      id: cardForm.id,
      label: cardForm.label,
      image: cardForm.image,
      href: cardForm.href,
      description: cardForm.description,
      ...(cardForm.fullDescription && { fullDescription: cardForm.fullDescription }),
      ...(cardForm.keywords && { keywords: cardForm.keywords.split(",").map((k) => k.trim()) }),
      ...(cardForm.advantages && { advantages: cardForm.advantages.split("\n").filter((a) => a.trim()) }),
    }

    const newData = { ...adminData }

    switch (editingItem.type) {
      case "our-purpose":
        newData.ourPurposeItems = adminData.ourPurposeItems.map((item) =>
          item.id === editingItem.id ? (updatedCard as CarouselItem) : item,
        )
        break
      case "featured-products":
        newData.featuredProducts = adminData.featuredProducts.map((item) =>
          item.id === editingItem.id ? (updatedCard as CarouselItem) : item,
        )
        break
      case "spare-parts":
        newData.sparePartsSection = adminData.sparePartsSection.map((item) =>
          item.id === editingItem.id ? (updatedCard as Card) : item,
        )
        break
    }

    saveData(newData)
    resetCardForm()
    setEditingItem(null)
  }

  const deleteCard = (id: string, type: string, label: string) => {
    showConfirmDialog(
      "Delete Card",
      `Are you sure you want to delete "${label}"? This action cannot be undone.`,
      () => {
        const newData = { ...adminData }

        switch (type) {
          case "our-purpose":
            newData.ourPurposeItems = adminData.ourPurposeItems.filter((item) => item.id !== id)
            break
          case "featured-products":
            newData.featuredProducts = adminData.featuredProducts.filter((item) => item.id !== id)
            break
          case "spare-parts":
            newData.sparePartsSection = adminData.sparePartsSection.filter((item) => item.id !== id)
            break
        }

        saveData(newData)
      },
    )
  }

  const resetCardForm = () => {
    setCardForm({
      id: "",
      label: "",
      image: "",
      href: "",
      description: "",
      fullDescription: "",
      keywords: "",
      advantages: "",
      type: "our-purpose",
    })
  }

  // Export/Import data
  const exportData = () => {
    const dataStr = JSON.stringify(adminData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "website-data.json"
    link.click()
  }

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target?.result as string)
          saveData(importedData)
          alert("Data imported successfully!")
        } catch (error) {
          alert("Error importing data. Please check the file format.")
        }
      }
      reader.readAsText(file)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        {/* Video Background */}
        <video className="admin-login__video" autoPlay muted loop>
          <source src="/assets/home/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="admin-login__overlay"></div>

        <div className="admin-login__container">
          <h1 className="admin-login__title">Admin Panel</h1>
          <p className="admin-login__subtitle">ProServe Website Management</p>
          <div className="admin-login__form">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-login__input"
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <button onClick={handleLogin} className="admin-login__button">
              Access Admin Panel
            </button>
          </div>
          <p className="admin-login__hint">💡 Demo Password: admin123</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        message={confirmDialog.message}
        onConfirm={handleConfirm}
        onCancel={hideConfirmDialog}
      />

      {/* Hero Section - Exactly like Home Page */}
      <div className="admin-hero">
        <video className="admin-hero__video" autoPlay muted loop>
          <source src="/assets/home/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="admin-hero__overlay"></div>
        <div className="admin-hero__content">
          <h1 className="admin-hero__title">Website Administration</h1>
          <p className="admin-hero__subtitle">ProServe Management System</p>
          <div className="admin-hero__actions">
            <button onClick={exportData} className="admin-button admin-button--secondary">
              Export Data
            </button>
            <label className="admin-button admin-button--secondary">
              Import Data
              <input type="file" accept=".json" onChange={importData} style={{ display: "none" }} />
            </label>
            <button onClick={handleLogout} className="admin-button admin-button--danger">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Section - Like Our Purpose */}
      <div className="admin-main-section">
        <div className="admin-main-container">
          <h2 className="admin-main-title">Content Management</h2>
          <p className="admin-main-description">
            Manage your website content, navigation, and settings with our comprehensive administration tools.
          </p>

          {/* Tabs */}
          <div className="admin-tabs">
            <button
              className={`admin-tab ${activeTab === "navbar" ? "active" : ""}`}
              onClick={() => setActiveTab("navbar")}
            >
              Navigation
            </button>
            <button
              className={`admin-tab ${activeTab === "cards" ? "active" : ""}`}
              onClick={() => setActiveTab("cards")}
            >
              Content Cards
            </button>
            <button
              className={`admin-tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
          </div>

          {/* Content */}
          <div className="admin-content">
            {activeTab === "navbar" && (
              <div className="admin-section">
                <h3 className="admin-section__title">Navigation Management</h3>

                <div className="admin-form">
                  <h4>{editingItem ? "Edit Navigation Item" : "Add New Navigation Item"}</h4>
                  <div className="admin-form__row">
                    <input
                      type="text"
                      placeholder="ID (e.g., spare-parts)"
                      value={navbarForm.id}
                      onChange={(e) => setNavbarForm({ ...navbarForm, id: e.target.value })}
                      className="admin-input"
                    />
                    <input
                      type="text"
                      placeholder="Label (e.g., Spare Parts)"
                      value={navbarForm.label}
                      onChange={(e) => setNavbarForm({ ...navbarForm, label: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="admin-form__row">
                    <input
                      type="text"
                      placeholder="Href (e.g., /spare-parts)"
                      value={navbarForm.href}
                      onChange={(e) => setNavbarForm({ ...navbarForm, href: e.target.value })}
                      className="admin-input"
                    />
                    <label className="admin-checkbox">
                      <input
                        type="checkbox"
                        checked={navbarForm.hasDropdown}
                        onChange={(e) => setNavbarForm({ ...navbarForm, hasDropdown: e.target.checked })}
                      />
                      Has Dropdown Menu
                    </label>
                  </div>

                  {navbarForm.hasDropdown && (
                    <div className="admin-dropdown-items">
                      <h4>Dropdown Items</h4>
                      {navbarForm.dropdownItems.map((item, index) => (
                        <div key={index} className="admin-form__row">
                          <input
                            type="text"
                            placeholder="Item ID"
                            value={item.id}
                            onChange={(e) => {
                              const newItems = [...navbarForm.dropdownItems]
                              newItems[index].id = e.target.value
                              setNavbarForm({ ...navbarForm, dropdownItems: newItems })
                            }}
                            className="admin-input"
                          />
                          <input
                            type="text"
                            placeholder="Item Label"
                            value={item.label}
                            onChange={(e) => {
                              const newItems = [...navbarForm.dropdownItems]
                              newItems[index].label = e.target.value
                              setNavbarForm({ ...navbarForm, dropdownItems: newItems })
                            }}
                            className="admin-input"
                          />
                          <input
                            type="text"
                            placeholder="Item Href"
                            value={item.href}
                            onChange={(e) => {
                              const newItems = [...navbarForm.dropdownItems]
                              newItems[index].href = e.target.value
                              setNavbarForm({ ...navbarForm, dropdownItems: newItems })
                            }}
                            className="admin-input"
                          />
                          <button
                            onClick={() => {
                              const newItems = navbarForm.dropdownItems.filter((_, i) => i !== index)
                              setNavbarForm({ ...navbarForm, dropdownItems: newItems })
                            }}
                            className="admin-button admin-button--danger admin-button--small"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() =>
                          setNavbarForm({
                            ...navbarForm,
                            dropdownItems: [...navbarForm.dropdownItems, { id: "", label: "", href: "" }],
                          })
                        }
                        className="admin-button admin-button--secondary"
                      >
                        Add Dropdown Item
                      </button>
                    </div>
                  )}

                  <div className="admin-form__actions">
                    {editingItem ? (
                      <>
                        <button onClick={updateNavbarOption} className="admin-button admin-button--primary">
                          Update Option
                        </button>
                        <button
                          onClick={() => {
                            setEditingItem(null)
                            resetNavbarForm()
                          }}
                          className="admin-button admin-button--secondary"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button onClick={addNavbarOption} className="admin-button admin-button--primary">
                        Add Option
                      </button>
                    )}
                  </div>
                </div>

                <div className="admin-list">
                  <h3>Current Navigation Options</h3>
                  {adminData.options.map((option) => (
                    <div key={option.id} className="admin-list__item">
                      <div className="admin-list__content">
                        <h4>{option.label}</h4>
                        <p>ID: {option.id}</p>
                        <p>Href: {option.href}</p>
                        {option.dropdown && <p>Dropdown: {option.dropdown.length} items</p>}
                      </div>
                      <div className="admin-list__actions">
                        <button
                          onClick={() => editNavbarOption(option)}
                          className="admin-button admin-button--secondary admin-button--small"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteNavbarOption(option.id, option.label)}
                          className="admin-button admin-button--danger admin-button--small"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "cards" && (
              <div className="admin-section">
                <h3 className="admin-section__title">Content Cards Management</h3>

                <div className="admin-form">
                  <h4>{editingItem ? "Edit Content Card" : "Add New Content Card"}</h4>
                  <div className="admin-form__row">
                    <select
                      value={cardForm.type}
                      onChange={(e) =>
                        setCardForm({
                          ...cardForm,
                          type: e.target.value as "our-purpose" | "featured-products" | "spare-parts",
                        })
                      }
                      className="admin-select"
                    >
                      <option value="our-purpose">Our Purpose</option>
                      <option value="featured-products">Featured Products</option>
                      <option value="spare-parts">Spare Parts</option>
                    </select>
                  </div>

                  <div className="admin-form__row">
                    <input
                      type="text"
                      placeholder="Card ID"
                      value={cardForm.id}
                      onChange={(e) => setCardForm({ ...cardForm, id: e.target.value })}
                      className="admin-input"
                    />
                    <input
                      type="text"
                      placeholder="Card Label"
                      value={cardForm.label}
                      onChange={(e) => setCardForm({ ...cardForm, label: e.target.value })}
                      className="admin-input"
                    />
                  </div>

                  <div className="admin-form__row">
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={cardForm.image}
                      onChange={(e) => setCardForm({ ...cardForm, image: e.target.value })}
                      className="admin-input"
                    />
                    <input
                      type="text"
                      placeholder="Href"
                      value={cardForm.href}
                      onChange={(e) => setCardForm({ ...cardForm, href: e.target.value })}
                      className="admin-input"
                    />
                  </div>

                  <div className="admin-form__row">
                    <textarea
                      placeholder="Description"
                      value={cardForm.description}
                      onChange={(e) => setCardForm({ ...cardForm, description: e.target.value })}
                      className="admin-textarea"
                      rows={3}
                    />
                  </div>

                  <div className="admin-form__row">
                    <textarea
                      placeholder="Full Description (optional)"
                      value={cardForm.fullDescription}
                      onChange={(e) => setCardForm({ ...cardForm, fullDescription: e.target.value })}
                      className="admin-textarea"
                      rows={4}
                    />
                  </div>

                  <div className="admin-form__row">
                    <input
                      type="text"
                      placeholder="Keywords (comma separated)"
                      value={cardForm.keywords}
                      onChange={(e) => setCardForm({ ...cardForm, keywords: e.target.value })}
                      className="admin-input"
                    />
                  </div>

                  <div className="admin-form__row">
                    <textarea
                      placeholder="Advantages (one per line)"
                      value={cardForm.advantages}
                      onChange={(e) => setCardForm({ ...cardForm, advantages: e.target.value })}
                      className="admin-textarea"
                      rows={4}
                    />
                  </div>

                  <div className="admin-form__actions">
                    {editingItem ? (
                      <>
                        <button onClick={updateCard} className="admin-button admin-button--primary">
                          Update Card
                        </button>
                        <button
                          onClick={() => {
                            setEditingItem(null)
                            resetCardForm()
                          }}
                          className="admin-button admin-button--secondary"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button onClick={addCard} className="admin-button admin-button--primary">
                        Add Card
                      </button>
                    )}
                  </div>
                </div>

                <div className="admin-cards-grid">
                  <div className="admin-cards-section">
                    <h3>Our Purpose Cards ({adminData.ourPurposeItems.length})</h3>
                    {adminData.ourPurposeItems.map((card) => (
                      <div key={card.id} className="admin-list__item">
                        <div className="admin-list__content">
                          <h4>{card.label}</h4>
                          <p>{card.description}</p>
                        </div>
                        <div className="admin-list__actions">
                          <button
                            onClick={() => editCard(card, "our-purpose")}
                            className="admin-button admin-button--secondary admin-button--small"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteCard(card.id, "our-purpose", card.label)}
                            className="admin-button admin-button--danger admin-button--small"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="admin-cards-section">
                    <h3>Featured Products ({adminData.featuredProducts.length})</h3>
                    {adminData.featuredProducts.map((card) => (
                      <div key={card.id} className="admin-list__item">
                        <div className="admin-list__content">
                          <h4>{card.label}</h4>
                          <p>{card.description}</p>
                        </div>
                        <div className="admin-list__actions">
                          <button
                            onClick={() => editCard(card, "featured-products")}
                            className="admin-button admin-button--secondary admin-button--small"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteCard(card.id, "featured-products", card.label)}
                            className="admin-button admin-button--danger admin-button--small"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="admin-cards-section">
                    <h3>Spare Parts ({adminData.sparePartsSection.length})</h3>
                    {adminData.sparePartsSection.map((card) => (
                      <div key={card.id} className="admin-list__item">
                        <div className="admin-list__content">
                          <h4>{card.label}</h4>
                          <p>{card.description}</p>
                        </div>
                        <div className="admin-list__actions">
                          <button
                            onClick={() => editCard(card, "spare-parts")}
                            className="admin-button admin-button--secondary admin-button--small"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteCard(card.id, "spare-parts", card.label)}
                            className="admin-button admin-button--danger admin-button--small"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "overview" && (
              <div className="admin-section">
                <h3 className="admin-section__title">Website Overview</h3>
                <div className="admin-stats">
                  <div className="admin-stat">
                    <h3>Navigation Items</h3>
                    <p className="admin-stat__number">{adminData.options.length}</p>
                  </div>
                  <div className="admin-stat">
                    <h3>Our Purpose Cards</h3>
                    <p className="admin-stat__number">{adminData.ourPurposeItems.length}</p>
                  </div>
                  <div className="admin-stat">
                    <h3>Featured Products</h3>
                    <p className="admin-stat__number">{adminData.featuredProducts.length}</p>
                  </div>
                  <div className="admin-stat">
                    <h3>Spare Parts</h3>
                    <p className="admin-stat__number">{adminData.sparePartsSection.length}</p>
                  </div>
                </div>

                <div className="admin-actions">
                  <h3>Quick Actions</h3>
                  <div className="admin-actions__grid">
                    <button onClick={() => setActiveTab("navbar")} className="admin-button admin-button--primary">
                      Manage Navigation
                    </button>
                    <button onClick={() => setActiveTab("cards")} className="admin-button admin-button--primary">
                      Manage Content
                    </button>
                    <button onClick={exportData} className="admin-button admin-button--secondary">
                      Export All Data
                    </button>
                    <button onClick={() => navigate("/home")} className="admin-button admin-button--secondary">
                      View Website
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AdminPage
