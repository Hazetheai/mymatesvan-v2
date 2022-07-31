export default {
  name: "homepageBanner",
  title: "Homepage Banner",
  type: "document",
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      mediaTitle: "images.0.title",
      mediaSubtitle: "images.0.alt",
      media: "images.0.image",
    },
    prepare({ title, subtitle, mediaTitle, mediaSubtitle, media }) {
      return {
        title: `${title || mediaTitle}`,
        subtitle: `${subtitle || mediaSubtitle}`,
        media,
      }
    },
  },
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
