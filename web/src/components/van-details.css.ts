import { style, styleVariants } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { theme } from "../theme.css"
import { media, widths } from "./ui.css"

export const highlightImage = style({
  border: 4,
  borderColor: theme.colors.white,
  borderRadius: 10,
  borderStyle: "solid",
  "@media": {
    [media.small]: {
      width: "60%",
    },
  },
})

export const textContainer = style({
  display: "none",
  "@media": {
    [media.medium]: {
      display: "flex",
    },
  },
})
export const descriptionText = style({
  display: "inline-block",
  "@media": {
    [media.medium]: {
      width: "50%",
    },
  },
})
export const imageHighlightText = style({
  display: "flex",
  alignItems: "center",
  padding: theme.space[2],
  "@media": {
    [media.medium]: {
      display: "none",
    },
  },
})

export const imageContainer = style({
  width: "100%",
  "@media": {
    [media.medium]: {
      width: "auto",
    },
  },
})
const baseHighLightText = style({
  borderRadius: 10,
  padding: theme.space[1],
  transition: theme.transitions.base,
})

export const highlightText = styleVariants({
  unhovered: [baseHighLightText],
  hovered: [
    baseHighLightText,
    { boxShadow: `${theme.colors.white} 0px 0px 14px 15px` },
  ],
})

export const cardsContainer = style({
  position: "relative",
  "@media": {
    [media.small]: {
      height: "65vh",
      top: theme.space[5],
    },
  },
  // clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
})
export const hidden = style({ overflow: "hidden" })
const square = style({
  position: "relative",
  height: "auto",
  left: 0,
  border: 4,
  borderColor: theme.colors.white,
  borderRadius: 10,
  borderStyle: "solid",
  transition: "all 400ms cubic-bezier(0.96,-0.16, 0.73, 0.27)",

  "@media": {
    [media.small]: {
      width: "60%",
      position: "absolute !important",
      height: "300px",
      left: "20%",
    },
  },
})
export const squareVariants = styleVariants({
  "image-1": [
    square,
    {
      transform: "rotate(0)",
      bottom: "unset",
      "@media": {
        [media.small]: {
          transform: "rotate(40deg)",
          bottom: "12%",
        },
      },
    },
  ],
  "image-2": [
    square,
    {
      "@media": {
        [media.small]: {
          transform: "rotate(23deg)",
          bottom: "17%",
        },
      },
    },
  ],
  "image-3": [
    square,
    {
      "@media": {
        [media.small]: { bottom: "23%" },
      },
    },
  ],
  "image-4": [
    square,
    {
      "@media": {
        [media.small]: {
          transform: "rotate(-21deg)",
          bottom: "32%",
        },
      },
    },
  ],
  "image-5": [
    square,
    {
      "@media": {
        [media.small]: {
          transform: "rotate(-39deg)",
          bottom: "42%",
        },
      },
    },
  ],
})

export const selectedHighlight = style({
  "@media": {
    [media.small]: {
      transform: "rotate(0deg)",
      bottom: "20%",
      zIndex: theme.zIndex.popup,
      width: "90%",
      left: 0,
    },
  },
})
