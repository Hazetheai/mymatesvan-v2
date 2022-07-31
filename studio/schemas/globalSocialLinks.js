import { GiNothingToSay } from "react-icons/gi"
import EditorMessage from "../components/EditorMessage"

export default {
  name: "globalSocialLinks",
  title: "Social Links",
  type: "document",
  icon: GiNothingToSay,
  fields: [
    {
      name: "ignoreMe",
      title: "Editor Message",
      type: "string",
      readOnly: true,
      inputComponent: EditorMessage,
      options: {
        heading: "Social Links",
        text: "This will display the social links you selected in the main menu - FB, IG etc. with a title you can set here.",
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
}
