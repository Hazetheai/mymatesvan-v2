import { GiTalk } from "react-icons/gi"

export default {
  name: "socialLink",
  title: "Social Link",
  type: "document",
  icon: GiTalk,
  fields: [
    {
      title: "Service",
      name: "service",
      type: "string",
      options: {
        list: [
          { title: "Twitter", value: "TWITTER" },
          { title: "Facebook", value: "FACEBOOK" },
          { title: "Instagram", value: "INSTAGRAM" },
          { title: "YouTube", value: "YOUTUBE" },
          { title: "LinkedIn", value: "LINKEDIN" },
          // { title: "GitHub", value: "GITHUB" },
          // { title: "Discord", value: "DISCORD" },
          { title: "Twitch", value: "TWITCH" },
        ],
      },
    },
    {
      title: "Username",
      name: "username",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tagline",
      name: "tagline",
      type: "string",
    },
  ],
}
