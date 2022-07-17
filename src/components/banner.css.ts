import { keyframes, style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const leaves = keyframes({
  "0%": { transform: "scale(1)" },
  "100%": { transform: "scale(1.2)" },
})

export const bannerSection = style({ minHeight: "100vh" })

export const bannerSliderLayout = style({
  position: "relative",
})

export const bannerImageHolder = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
})

export const bannerImage = style({
  minHeight: "100vh",
  width: "100%",
  WebkitAnimation: `${leaves} 10s ease-in-out infinite alternate`,
  animation: `${leaves} 10s ease-in-out infinite alternate`,
})

export const bannerContents = style({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  height: "100%",
  display: "flex",
  alignItems: "center",
  lineHeight: 1.5,
  maxWidth: "750px",
  justifyContent: "center",
  margin: "50px auto 0px",
  color: theme.colors.white,
  "@media": {
    [media.small]: { maxWidth: "400px" },
    [media.medium]: { maxWidth: "500px", margin: "30px auto 0px" },
    [media.large]: { maxWidth: "600px" },
  },
})
