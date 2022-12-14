import { GiToolbox } from "react-icons/gi"

export default {
  name: "homepageFeatureList",
  title: "Feature List",
  type: "document",
  icon: GiToolbox,
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
          to: [{ type: "homepageFeature" }],
        },
      ],
    },
  ],
}
