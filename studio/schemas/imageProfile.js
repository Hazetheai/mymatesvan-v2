export default {
  name: "imageProfile",
  title: "Image Profile",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Alt",
      name: "alt",
      type: "string",
      description:
        "💡 Simple description of the image. Used for screen readers.",
      validation: (Rule) => Rule.required(),
    },
  ],
}
