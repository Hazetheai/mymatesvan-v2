export default {
  name: "vanHighlight",
  title: "Van Highlight",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
}
