import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Menu, X } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Space,
  NavLink,
  Button,
  InteractiveIcon,
  Nudge,
  VisuallyHidden,
} from "./ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "./header.css"
import NavItemGroup from "./nav-item-group"
import BrandLogo from "./brand-logo"
import * as style from "./header.css"
import Modal from "./modal"
import ContactForm from "./contact-form"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        header {
          id
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              isLinkOrVan
              navProducts {
                id
                title
                slug
                text
                description
                image {
                  id
                  gatsbyImageData
                }
              }
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const { navItems, cta } = data.layout.header
  const [isOpen, setOpen] = React.useState(false)
  const [stickyClass, setStickyClass] = React.useState("clear")

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  React.useEffect(() => {
    function handleScroll() {
      let scrollPos = window.scrollY
      if (scrollPos > 30 && stickyClass === "color") {
        return
      }
      if (scrollPos < 30) {
        setStickyClass("clear")
      } else setStickyClass("color")
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={style.desktopHeader[stickyClass]}>
      <Container className={desktopHeaderNavWrapper}>
        <Flex variant="spaceBetween">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo imageType={stickyClass} />
          </NavLink>
          <nav style={{ fontSize: 18 }}>
            <FlexList gap={4}>
              {navItems &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    {navItem.navItemType === "Group" ? (
                      <NavItemGroup
                        name={navItem.name}
                        navItems={navItem.navItems}
                        navProducts={navItem.navProducts}
                        isLinkOrVan={navItem.isLinkOrVan}
                      />
                    ) : (
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    )}
                  </li>
                ))}
            </FlexList>
          </nav>
          {/* <div>
            {cta?.isContactButton ? (
              <Modal buttonText={cta.text}>
                <ContactForm />
              </Modal>
            ) : (
              cta && <Button to={cta.href}>{cta.text}</Button>
            )}
          </div> */}
        </Flex>
      </Container>
      <Container className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}>
        <Space size={2} />
        <Flex variant="spaceBetween">
          <span
            className={
              mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
            }
          >
            <NavLink to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <BrandLogo />
            </NavLink>
          </span>
          <Flex>
            <Space />
            {/* <div>
              {cta && (
                <Button to={cta.href} variant={isOpen ? "reversed" : "primary"}>
                  {cta.text}
                </Button>
              )}
            </div> */}
            <Nudge right={3}>
              <InteractiveIcon
                title="Toggle menu"
                onClick={() => setOpen(!isOpen)}
                className={
                  mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                }
              >
                {isOpen ? <X /> : <Menu />}
              </InteractiveIcon>
            </Nudge>
          </Flex>
        </Flex>
      </Container>
      {isOpen && (
        <div className={mobileNavOverlay}>
          <nav>
            <FlexList responsive variant="stretch">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  {navItem.navItemType === "Group" ? (
                    <NavItemGroup
                      name={navItem.name}
                      navItems={navItem.navItems}
                      navProducts={navItem.navProducts}
                      isLinkOrVan={navItem.isLinkOrVan}
                    />
                  ) : (
                    <NavLink to={navItem.href} className={mobileNavLink}>
                      {navItem.text}
                    </NavLink>
                  )}
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </header>
  )
}
