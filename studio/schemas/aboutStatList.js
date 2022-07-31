import { GiDatabase } from "react-icons/gi"

export default {
  name: "aboutStatList",
  title: "About Stat List",
  type: "document",
  icon: GiDatabase,
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "aboutStat" }],
        },
      ],
    },
  ],
}
