import { GiBackup } from "react-icons/gi"

export default {
  name: "aboutProfile",
  title: "About Profile",
  type: "document",
  icon: GiBackup,
  fields: [
    { title: "Image", name: "image", type: "image" },
    { title: "Name", name: "name", type: "string" },
    { title: "Job Title", name: "jobTitle", type: "string" },
  ],
}
