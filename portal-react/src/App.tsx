import "./App.css"
import Navbar from "./components/Navbar"
import type React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { options } from "./data"
import type { ElementRoute } from "./interfaces"
import { routes } from "./routes"

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar options={options} />
        <Routes>
          {/* Default route - redirect to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {routes?.map((route: ElementRoute) => {
            return <Route key={route.id} path={route.path} element={route.element} />
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
