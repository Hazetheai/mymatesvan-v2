import { GiSurferVan } from "react-icons/gi"

export default {
  name: "homepageProductList",
  title: "Homepage Product List",
  type: "document",
  icon: GiSurferVan,
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    { title: "Text", name: "text", type: "string" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageProduct" }],
        },
      ],
    },
  ],
}
