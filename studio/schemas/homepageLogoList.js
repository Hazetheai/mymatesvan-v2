import { GiCargoCrate } from "react-icons/gi"

export default {
  name: "homepageLogoList",
  title: "Logo List",
  type: "document",
  icon: GiCargoCrate,
  fields: [
    { title: "Text", name: "text", type: "string" },
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
  ],
}
