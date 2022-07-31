import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"
import { Space } from "./ui"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.noPadding ? null : <Space size="5" padding />}
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
