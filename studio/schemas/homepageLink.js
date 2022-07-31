import { GiAndromedaChain } from "react-icons/gi"

export default {
  name: "homepageLink",
  title: "Link",
  type: "document",
  icon: GiAndromedaChain,
  initialValue: {
    isContactButton: false,
  },
  fields: [
    { title: "Text", name: "text", type: "string" },
    {
      title: "href",
      name: "href",
      type: "string",
      description: '💡 Remember to put a "/" at the start!',
      hidden: ({ document }) => document?.isContactButton,
    },
    {
      name: "isContactButton",
      title: "Is this a contact button?",
      type: "boolean",
      description:
        "💡 If enabled, this will create a button that makes a contact form pop up.",
    },
  ],
}
