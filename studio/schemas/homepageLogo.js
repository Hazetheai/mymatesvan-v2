export default {
  name: "homepageLogo",
  title: "Logo",
  type: "document",
  preview: {
    select: {
      title: "alt",
      media: "image",
    },
  },
  fields: [
    { title: "Image", name: "image", type: "image" },
    { title: "Alt", name: "alt", type: "string" },
  ],
}
