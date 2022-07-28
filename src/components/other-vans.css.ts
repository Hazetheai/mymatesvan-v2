import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const vanCard = style({
  borderRadius: theme.radii.large,
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
  boxShadow: theme.shadows.small,
  overflow: "hidden",
  maxWidth: 350,
  margin: "auto",
})

export const vanImageContainer = style({
  overflow: "hidden",
})
export const vanImage = style({
  transition: theme.transitions.base,
  ":hover": {
    transition: theme.transitions.crawl,
    transform: "scale(1.2)",
  },
})

export const textContainer = style({
  backgroundColor: theme.colors.white,
  borderRadius: theme.radii.large,
  padding: theme.space[3],
  width: "100%",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
})
