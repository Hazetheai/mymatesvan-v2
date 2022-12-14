import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import isAbsoluteURL from "is-absolute-url"
import * as React from "react"
import { theme } from "../theme.css"
import ContactForm from "./contact-form"
import Modal from "./modal"
import * as styles from "./ui.css"

export const cx = (...args) => args.filter(Boolean).join(" ")

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) {
  delete props.paddingSpace

  return <Component className={cx(..._cx, className)} {...props} />
}

export function Container({ width = "normal", ...props }) {
  return (
    <Base
      cx={[styles.containers[width]]}
      {...props}
      className={props.className || ""}
    />
  )
}

export function Flex({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  responsiveMedium,
  marginY,
  alignItems,
  cx: _cx = [],
  ...props
}) {
  return (
    <Base
      cx={[
        styles.flex,
        variant && styles.flexVariants[variant],
        responsive && styles.flexVariants.responsive,
        responsiveMedium && styles.flexVariants.responsiveMedium,
        wrap && styles.flexVariants.wrap,
        gutter && styles.gutter[gutter],
        gutter ? styles.flexGap[0] : styles.flexGap[gap],
        marginY && styles.marginY[marginY],
        alignItems && styles.flexVariants[alignItems],
        ..._cx,
      ]}
      {...props}
    />
  )
}

export function Box({
  breakMedium = false,
  width = "full",
  background,
  padding,
  paddingY,
  radius,
  center = false,
  order,
  cx: _cx = [],
  ...props
}) {
  return (
    <Base
      cx={[
        styles[breakMedium ? "mediumWidths" : "widths"][width],
        background && styles.backgrounds[background],
        padding && styles.padding[padding],
        paddingY && styles.paddingY[paddingY],
        radius && styles.radii[radius],
        center && styles.box.center,
        order && styles.order[order],
        ..._cx,
      ]}
      {...props}
    />
  )
}

export function FlexList(props) {
  return <Flex as="ul" cx={[styles.list]} {...props} />
}

export function List(props) {
  return <Base as="ul" cx={[styles.list]} {...props} />
}

export function Space({ size = "auto", ...props }) {
  return (
    <Base
      cx={[styles[props.paddingSpace ? "padding" : "margin"][size]]}
      {...props}
      paddingSpace={props.paddingSpace}
    />
  )
}

export function Nudge({ left, right, top, bottom, ...props }) {
  return (
    <Base
      cx={[
        left && styles.marginLeft[-left],
        right && styles.marginRight[-right],
        top && styles.marginTop[-top],
        bottom && styles.marginBottom[-bottom],
      ]}
      {...props}
    />
  )
}

export function Section(props) {
  return (
    <Box
      as="section"
      className={styles.section + " " + props.className || ""}
      {...props}
    />
  )
}

export function Text({
  variant = "body",
  center = false,
  bold = false,
  color = theme.colors["text-body"],
  ...props
}) {
  return (
    <Base
      cx={[
        styles.text[variant],
        center && styles.text.center,
        bold && styles.text.bold,
      ]}
      {...props}
    />
  )
}

export function SuperHeading({ ...props }) {
  return <Text as="h1" variant="superHeading" {...props} />
}

export function Heading({ ...props }) {
  return <Text as="h2" variant="heading" {...props} />
}

export function Subhead({ ...props }) {
  return <Text as="h3" variant="subhead" {...props} />
}

export function Kicker({ ...props }) {
  return <Text variant="kicker" {...props} />
}

export function Link({ to, href, ...props }) {
  if (href === "none" || to === "none")
    return <span className="empty-link">{href || to || ""}</span>
  const url = href || to || ""
  if (isAbsoluteURL(url)) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={url}
        className={styles.link}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      />
    )
  }
  return <GatsbyLink to={url} className={styles.link} {...props} />
}

export function NavLink({ ...props }) {
  return <Base as={Link} cx={[styles.navlink]} {...props} />
}

export function NavButtonLink({ ...props }) {
  return <Base as="button" cx={[styles.navButtonlink]} {...props} />
}

export function Button({ variant = "primary", ...props }) {
  return <Base as="button" cx={[styles.buttons[variant]]} {...props} />
}

export function ButtonList({ links = [], reversed = false, ...props }) {
  const getVariant = (i) => {
    if (reversed) {
      return i === 0 ? "reversed" : "linkReversed"
    }
    return i === 0 ? "primary" : "link"
  }

  return (
    <FlexList marginY={4} {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            {link.isContactButton ? (
              <Modal buttonText={link.text}>
                <ContactForm />
              </Modal>
            ) : (
              <Button as="a" href={link.href} variant={getVariant(i)}>
                {link.text}
              </Button>
            )}
          </li>
        ))}
    </FlexList>
  )
}

export function CTALink(props) {
  return <Base as={Link} cx={[styles.ctaLink]} {...props} />
}

export function LinkList({ links = [], ...props }) {
  return (
    <FlexList {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            <CTALink href={link.href}>{link.text}</CTALink>
          </li>
        ))}
    </FlexList>
  )
}

export function Blockquote(props) {
  return <Base as="blockquote" cx={[styles.blockquote]} {...props} />
}

export function Avatar({ alt, image }) {
  return (
    <GatsbyImage
      alt={alt || ""}
      image={getImage(image)}
      className={styles.avatar}
    />
  )
}

export function Logo({ alt, image, size = "small" }) {
  return (
    <GatsbyImage
      alt={alt || ""}
      image={getImage(image)}
      className={styles.logos[size]}
    />
  )
}

export function Icon({ alt, image, size = "medium" }) {
  return (
    <GatsbyImage
      alt={alt || ""}
      image={getImage(image)}
      className={styles.icons[size]}
    />
  )
}

export function IconLink(props) {
  return <NavLink cx={[styles.iconLink]} {...props} />
}

export function InteractiveIcon(props) {
  return <Base as="button" cx={[styles.interactiveIcon]} {...props} />
}

export function VisuallyHidden(props) {
  return <Base as="span" cx={[styles.visuallyHidden]} {...props} />
}

export function BlockLink(props) {
  return <Link className={styles.blockLink} {...props} />
}
