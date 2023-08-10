import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const baseModal = style({
  backgroundColor: theme.colors.white,
  padding: theme.space[3],
  position: "relative",
  maxWidth: "800px",
  margin: "0 auto",

  "@media": {
    [media.small]: {
      padding: theme.space[5],
    },
  },
})
