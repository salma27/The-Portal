"use client"

import type React from "react"
import { useState, useEffect } from "react"
import "../css/Home.css"

const Home: React.FC = () => {
  const words = [
    "MV SWITCHGEAR",
    "MV TRANSFORMERS",
    "LV SWITCHGEAR",
    "MV SERVICE",
    "LV SERVICE",
    "MV SPARE PARTS"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 150) // Speed of typing
      } else {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause duration when word is complete
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 100) // Speed of deleting
      } else {
        // Move to next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentWordIndex, words])

  return (
    <>
      {/* Video Banner */}
      <div className="video-banner">
        {/* TODO: Replace with your actual video file */}
        <video className="video-banner__video" autoPlay muted loop>
          <source src="/your-video-here.mp4" type="video/mp4" />
        </video>
        <div className="video-banner__text-overlay">
          <h1 className="video-banner__static-text">UPGRADING YOUR ELECTRICAL NETWORK WITH HIGH QUALITY 
            <span className="video-banner__animated-text"> {displayText}</span>
          </h1>
        </div>
      </div>

      {/* Rest of your content */}
      <div className="home-container">
        <h1 className="home-heading">Industrial Solutions Excellence</h1>
        <p className="home-subheading">
          Your trusted partner for comprehensive spare parts, maintenance services, quality products, and advanced
          retrofit solutions. Delivering reliability and innovation for over two decades.
        </p>
        <a href="#spare-parts" className="home-cta-button">
          Explore Our Services
        </a>
      </div>
    </>
  )
}

export default Home
