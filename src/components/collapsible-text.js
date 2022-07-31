// import { LoremIpsum } from "https://cdn.skypack.dev/lorem-ipsum@2.0.3"
import { debounce } from "../lib/debounce"
import React from "react"
import { clamp } from "./ui.css"
import { Button, Text } from "./ui"
const getText = (paragraphs) => {
  return `Highly recommend My Mates Van! Todd custom built a draw set and sleeping platform into the back of my Subaru Outback - car camper style. He was friendly, easy to work with and had great communication when explaining how the finished product look. I came to My Mates Van with a rough outline of what I wanted, but Todd brought some amazing ideas/fixes and created a plan that utilised the space perfectly. He clearly has a high level of carpentry skill and a creative eye for the intricacies of working in vans. He kept in touch during the build and had it completed within the timeframe. I couldn’t be happier with the work and would happily head back for another project 🚚`
}

const CollapsibleText = ({ text }) => {
  const [clamped, setClamped] = React.useState(true)
  const [showButton, setShowButton] = React.useState(true)
  const containerRef = React.useRef(null)
  const handleClick = () => setClamped(!clamped)

  React.useEffect(() => {
    const hasClamping = (el) => {
      const { clientHeight, scrollHeight } = el
      return clientHeight !== scrollHeight
    }

    const checkButtonAvailability = () => {
      if (containerRef.current) {
        // Save current state to reapply later if necessary.
        const hadClampClass = containerRef.current.classList.contains("clamp")
        // Make sure that CSS clamping is applied if aplicable.
        if (!hadClampClass) containerRef.current.classList.add("clamp")
        // Check for clamping and show or hide button accordingly.
        setShowButton(hasClamping(containerRef.current))
        // Sync clamping with local state.
        if (!hadClampClass) containerRef.current.classList.remove("clamp")
      }
    }

    const debouncedCheck = debounce(checkButtonAvailability, 50)

    checkButtonAvailability()
    window.addEventListener("resize", debouncedCheck)

    return () => {
      window.removeEventListener("resize", debouncedCheck)
    }
  }, [containerRef])

  return (
    <>
      <div
        ref={containerRef}
        className={`long-text ${clamped ? clamp : ""}  ${
          clamped ? "clamp" : ""
        }`}
      >
        <Text as="p" variant="lead">
          {text}
        </Text>
      </div>
      {showButton && (
        <Button variant="link" onClick={handleClick}>
          Read {clamped ? "more" : "less"}
        </Button>
      )}
    </>
  )
}

export default CollapsibleText
