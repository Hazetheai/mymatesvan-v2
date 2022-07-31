import { style, styleVariants } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const galleryImageWrapper = style({
  WebkitBoxFlex: "0",
  flex: "0 0 33.3333%",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  justifyContent: "center",
  display: "flex",
  cursor: "pointer",
  margin: "0",
  "@media": {
    [media.small]: {
      WebkitFlexBasis: "25%",
      flexBasis: "25%",
      maxWidth: "25%",
    },
    [media.medium]: {
      margin: ".5rem 0",
    },
  },
})
