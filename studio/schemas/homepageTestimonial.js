export default {
  name: "homepageTestimonial",
  title: "Homepage Testimonial",
  type: "document",
  preview: {
    select: {
      title: "source",
      subtitle: "quote",
      media: "avatar",
    },
  },
  fields: [
    { title: "Quote", name: "quote", type: "string" },
    { title: "Source", name: "source", type: "string" },
    { title: "Avatar", name: "avatar", type: "image" },
  ],
}
