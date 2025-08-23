"use client"

import "./App.css"
import Navbar from "./components/Navbar"
import type React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from "react-router-dom"
import { options } from "./data"
import type { ElementRoute } from "./interfaces"
import { routes } from "./routes"
import CarouselCardPage from "./components/CarouselCardPage"

// Wrapper component to extract URL params and pass to CarouselCardPage
const CarouselCardPageWrapper: React.FC = () => {
  const { cardId } = useParams<{ cardId: string }>()
  return <CarouselCardPage categoryId={cardId || ""} />
}

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar options={options} />
        <Routes>
          {/* Default route - redirect to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Dynamic route for category pages */}
          <Route path="/:cardId" element={<CarouselCardPageWrapper />} />

          {/* Static routes from routes.tsx */}
          {routes?.map((route: ElementRoute) => {
            return <Route key={route.id} path={route.path} element={route.element} />
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
