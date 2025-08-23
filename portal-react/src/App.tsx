import "./App.css"
import Navbar from "./components/Navbar"
import type React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { options } from "./data"
import { routes } from "./routes"
import CarouselCardPage from "./components/CarouselCardPage"
import ProductDetails from "./components/ProductDetails"

/**
 * Main application component that handles routing and layout
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Global Navigation */}
        <Navbar options={options} />

        {/* Main Content Area */}
        <main className="app__content">
          <Routes>
            {/* Default route */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Static routes */}
            {routes.map((route) => (
              <Route key={route.id} path={route.path} element={route.element} />
            ))}

            {/* Product details route */}
            <Route path="/product-details/:productId" element={<ProductDetails />} />

            {/* Dynamic category routes - handles infinite nesting */}
            <Route path="/*" element={<CarouselCardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
