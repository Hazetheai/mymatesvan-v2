import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { elementLoading } from "../animations.css"

export default function BrandLogo({ imageType }) {
  return (
    <>
      {imageType === "color" ? (
        <StaticImage
          alt="logo"
          src="../images/brand/van-color.png"
          placeholder="blurred"
          layout="fixed"
          width={100}
          height={100}
          className={
            elementLoading[imageType === "coloe" ? "mount" : "unmount"]
          }
        />
      ) : (
        <StaticImage
          alt="logo"
          src="../images/brand/van-colored-circle.png"
          placeholder="blurred"
          layout="fixed"
          width={100}
          height={100}
          className={
            elementLoading[imageType === "coloe" ? "unmount" : "mount"]
          }
        />
      )}
    </>
  )
}
