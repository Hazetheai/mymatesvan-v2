import { GiDatabase } from "react-icons/gi"

export default {
  name: "homepageStatList",
  title: "Homepage Stat List",
  type: "document",
  icon: GiDatabase,
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    { title: "Text", name: "text", type: "string" },
    { title: "Image", name: "image", type: "image" },
    { title: "Icon", name: "icon", type: "image" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageStat" }],
        },
      ],
    },
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
