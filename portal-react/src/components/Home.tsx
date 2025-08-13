import type React from "react"
import { useState, useEffect } from "react"

const Home: React.FC = () => {
  const words = ["MV switchgear", 
    "MV transformers", 
    "LV switchgear", 
    "MV service", 
    "LV service", 
    "MV spare parts"];

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

  const containerStyles: React.CSSProperties = {
    padding: "80px 40px",
    textAlign: "center",
    backgroundColor: "#f9fafb",
    minHeight: "calc(100vh - 70px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  const headingStyles: React.CSSProperties = {
    fontSize: "3.5rem",
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: "24px",
    lineHeight: 1.2,
  }

  const subheadingStyles: React.CSSProperties = {
    fontSize: "1.25rem",
    color: "#6b7280",
    maxWidth: "600px",
    lineHeight: 1.6,
    marginBottom: "40px",
  }

  const ctaButtonStyles: React.CSSProperties = {
    backgroundColor: "#1f2937",
    color: "white",
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: 600,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none",
    display: "inline-block",
  }

  const videoBannerStyles: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }

  const videoStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.5)", // This dims the video
  }

  const textOverlayStyles: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  }

  const animatedTextStyles: React.CSSProperties = {
    color: "#FFFC52", // Yellow color
    fontSize: "2.5rem",
    fontWeight: "bold",
    minHeight: "60px", // Prevents layout shift
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <>
      {/* Video Banner */}
      <div style={videoBannerStyles}>
        {/* TODO: Replace with your actual video file */}
        <video style={videoStyles} autoPlay muted loop>
          <source src="/your-video-here.mp4" type="video/mp4" />
        </video>
        <div style={textOverlayStyles}>
          <h1 style={{ margin: 0 }}>Upgrading your electrical network with high quality</h1>
          <div style={animatedTextStyles}>{displayText}</div>
        </div>
      </div>

      {/* Rest of your content */}
      <div style={containerStyles}>
        <h1 style={headingStyles}>Industrial Solutions Excellence</h1>
        <p style={subheadingStyles}>
          Your trusted partner for comprehensive spare parts, maintenance services, quality products, and advanced
          retrofit solutions. Delivering reliability and innovation for over two decades.
        </p>
        <a
          href="#spare-parts"
          style={ctaButtonStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#374151"
            e.currentTarget.style.transform = "translateY(-2px)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#1f2937"
            e.currentTarget.style.transform = "translateY(0)"
          }}
        >
          Explore Our Services
        </a>
      </div>
    </>
  )
}

export default Home
