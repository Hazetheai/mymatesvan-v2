import { GiOnTarget } from "react-icons/gi"

export default {
  name: "homepageCta",
  title: "Homepage CTA",
  type: "document",
  icon: GiOnTarget,
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    { title: "Image", name: "image", type: "image" },
    { title: "Text", name: "text", type: "string" },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageLink" }],
        },
      ],
    },
  ],
}
