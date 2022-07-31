import { style, styleVariants } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { theme } from "../theme.css"

export const form = style({})

export const formGroup = style({ marginBottom: "30px" })

export const inputText = style({
  width: "100%",
  border: "none",
  borderBottom: "1px solid #959595",
  padding: "8px",
  outline: "0",
  fontSize: "15px",
})

export const contactSpanErr = style({ color: "red", fontSize: "14px" })

export const textAreaMessage = style({
  width: "100%",
  border: "none",
  borderBottom: "1px solid #959595",
  padding: "8px",
  height: "100px",
  fontSize: "15px",
  outline: "0",
})
