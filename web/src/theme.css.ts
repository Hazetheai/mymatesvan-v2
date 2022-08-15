import { createGlobalTheme } from "@vanilla-extract/css"
import { colors } from "./colors.css"

export type SpaceTokens = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Space = Record<SpaceTokens, string>

const space = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "16px",
  4: "32px",
  5: "64px",
  6: "128px",
}

// add negative margins
Object.assign(
  space,
  Object.entries(space).reduce(
    (a, [key, val]) => ({
      ...a,
      [-1 * Number(key)]: `-${val}`,
    }),
    {}
  )
)

const fontSizes = {
  0: "12px",
  1: "14px",
  2: "16px",
  3: "18px",
  4: "24px",
  5: "32px",
  6: "48px",
  7: "64px",
}

const fontWeights = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
}

const fonts = {
  text: '"Rubik Dirt", sans-serif',
  heading: '"Rubik Dirt", sans-serif',
  cursive: "Gloria Hallelujah, cursive",
}

const lineHeights = {
  text: "1.65",
  heading: "1.25",
  tight: "1.1",
  solid: "1",
}

const letterSpacings = {
  normal: "0",
  tight: "-0.02em",
  wide: "0.08em",
}

const sizes = {
  container: "1280px",
  narrow: "1024px",
  wide: "1440px",
  tight: "848px",
  avatar: "48px",
  navGroupBoxMin: "300px",
  navGroupBoxMax: "400px",
  navIcon: "32px",
  navIconSmall: "30px",
}

const zIndex = {
  hidden: "-1",
  zero: "0",
  base: "1",
  header: "10",
  popup: "20",
  top: "100",
}

export type Radii = "button" | "large" | "circle"

const radii: Record<Radii, string> = {
  button: "10px",
  large: "24px",
  circle: "99999px",
}

export const borders = {
  thin: `2px solid ${colors.white}`,
  base: `4px solid ${colors.white}`,
  thick: `6px solid ${colors.white}`,
}

const shadows = {
  small: "rgb(208 208 208) 0px 0px 16px 0px",
  large:
    "0px 4px 8px 0px #2E29330A, 0px 4px 24px 0px #2E293314, 0px 8px 24px 0px #473F4F29",
}

const transitions = {
  base: "all 300ms ease-in-out",
  crawl: "all 4000ms ease-in-out",
}

const gradients = {
  bwFromLeft:
    'linear-gradient(to right top, rgba(0, 0, 0, 0.75) 0%, rgba(29, 29, 29, 0.8) 8.1%, rgba(56, 56, 56, 0.9) 15.5%, rgba(82, 82, 82, 0.8) 27.5%, rgba(107, 107, 107, 0.7) 34%, rgba(130, 130, 130, 0.6) 39.3%, rgba(151, 151, 151, 0.5) 47.2%, rgba(171, 171, 171, 0.4) 51.1%, rgba(189, 189, 189, 0.2) 52.9%, rgba(205, 205, 205, 0.1) 58.8%, rgba(219, 219, 219, 0.1) 64.7%, rgba(232, 232, 232, 0.1) 71%, rgba(241, 241, 241, 0.1) 77.5%, rgba(249, 249, 249, 0.1) 84.5%, rgba(253, 253, 253, 0.1) 91.9%, rgba(255, 255, 255, 0.1) 100%) center center / cover no-repeat, url("/static/wv-pier-bw-8818a46edbcac89bb3b5698969e6fc78.png")',
}

export const theme = createGlobalTheme(":root", {
  colors,
  space,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  letterSpacings,
  sizes,
  radii,
  borders,
  shadows,
  zIndex,
  transitions,
  gradients,
})
