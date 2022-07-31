import { keyframes, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "./theme.css"
import { media } from "./components/ui.css"

export const baseTransition = style({
  transition: "all 200ms ease-in-out",
})

const mountKF = keyframes({
  "0%": { opacity: 0, visibility: "hidden" },
  "100%": { opacity: 1, visibility: "visible" },
})
const unmountKF = keyframes({
  "0%": { opacity: 0, visibility: "hidden" },
  "100%": { opacity: 1, visibility: "visible" },
})

export const elementLoading = styleVariants({
  mount: [baseTransition, { animation: `200ms forwards ${mountKF}` }],
  unmount: [baseTransition, { animation: `200ms forwards ${unmountKF}` }],
})
