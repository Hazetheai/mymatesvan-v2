import { GiCargoCrate } from "react-icons/gi"

export default {
  name: "aboutLogoList",
  title: "About Logo List",
  type: "document",
  icon: GiCargoCrate,
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    {
      title: "Logos",
      name: "logos",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageLogo" }],
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
