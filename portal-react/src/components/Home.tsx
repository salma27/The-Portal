import type React from "react"
import { useState, useEffect } from "react"
import "../css/Home.css"
import Carousel from "./Carousel"
import { words, ourPurposeCaroueslItems, featuredProducts } from "../data"

const Home: React.FC = () => {
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

  const scrollToOurPurpose = () => {
    const ourPurposeSection = document.getElementById("our-purpose")
    if (ourPurposeSection) {
      ourPurposeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      {/* Video Banner */}
      <div className="video-banner">
        <video className="video-banner__video" autoPlay muted loop>
          <source src="/assets/home/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="video-banner__text-overlay">
          <h1 className="video-banner__static-text">
            UPGRADING YOUR ELECTRICAL NETWORK WITH HIGH QUALITY
            <span className="video-banner__animated-text"> {displayText}</span>
          </h1>
        </div>

        {/* Scroll Down Button */}
        <button className="scroll-down-button" onClick={scrollToOurPurpose} aria-label="Scroll to Our Purpose section">
          <div className="scroll-down-arrow"></div>
        </button>
      </div>

      {/* Our Purpose Section */}
      <div id="our-purpose" className="our-purpose-section">
        <div className="our-purpose-container">
          <Carousel
            items={ourPurposeCaroueslItems}
            title="Our Purpose"
            description="We excell at what makes the perfect, reliable and sustainable electrical network."
            type="our-purpose"
          />
        </div>
      </div>

      {/* Featured Products Section */}
      <div id="our-purpose" className="our-purpose-section">
        
      <Carousel
        items={featuredProducts}
        title="Featured Products"
        description="Discover our premium electrical solutions designed for industrial excellence and reliability."
        type="featured-products"
      />
      </div>
    </>
  )
}

export default Home
