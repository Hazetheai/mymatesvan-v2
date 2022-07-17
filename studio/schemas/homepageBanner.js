export default {
  name: "homepageBanner",
  title: "Homepage Banner",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Text", name: "text", type: "string" },
    {
      name: "images",
      title: "Images",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "reference",
          to: [{ type: "imageProfile" }],
        },
      ],
    },
  ],
}
