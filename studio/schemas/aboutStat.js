import { GiDatabase } from "react-icons/gi"

export default {
  name: "aboutStat",
  title: "About Stat",
  type: "document",
  icon: GiDatabase,
  fields: [
    { title: "Value", name: "value", type: "string" },
    { title: "Label", name: "label", type: "string" },
  ],
}
