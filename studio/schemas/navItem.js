import { GiDirectionSign } from "react-icons/gi"

export default {
  name: "navItem",
  title: "Nav Item",
  type: "document",
  icon: GiDirectionSign,
  fields: [
    { title: "Text", name: "text", type: "string" },
    {
      title: "HREF",
      name: "href",
      type: "string",
      description: '💡 Remember to put a "/" at the start!',
    },
    { title: "Icon", name: "icon", type: "image" },
    { title: "Description", name: "description", type: "string" },
  ],
}
