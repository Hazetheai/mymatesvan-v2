import { GiDatabase } from "react-icons/gi"

export default {
  name: "homepageStat",
  title: "Stat",
  type: "document",
  icon: GiDatabase,

  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Value", name: "value", type: "string" },
    { title: "Label", name: "label", type: "string" },
  ],
}
