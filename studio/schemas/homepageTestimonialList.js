import { GiPerson } from "react-icons/gi"

export default {
  name: "homepageTestimonialList",
  title: "Homepage Testimonial List",
  type: "document",
  icon: GiPerson,
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Kicker", name: "kicker", type: "string" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageTestimonial" }],
        },
      ],
    },
  ],
}
