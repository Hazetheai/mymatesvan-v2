import { GiUpgrade } from "react-icons/gi"

export default {
  name: "homepageBenefitList",
  title: "Benefit List",
  type: "document",
  icon: GiUpgrade,
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Text", name: "text", type: "string" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageBenefit" }],
        },
      ],
    },
  ],
}
