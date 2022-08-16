export default {
  name: "layoutFooter",
  title: "Layout Footer",
  type: "document",
  fields: [
    {
      name: "contactAddress",
      title: "Contact address",
      type: "string",
    },
    {
      name: "contactAddressLink",
      title: "Contact address link",
      description: "💡 Add a google maps link for easy access",
      type: "url",
    },
    {
      name: "contactOpeningTimes",
      title: "Opening times",
      type: "string",
    },
    {
      name: "contactPhone",
      title: "Contact phone number",
      type: "string",
    },
    {
      name: "contactEmail",
      title: "Contact email",
      type: "string",
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageLink" }],
        },
      ],
    },
    {
      title: "Meta",
      name: "meta",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageLink" }],
        },
      ],
    },
    {
      title: "Social Links",
      name: "socialLinks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "socialLink" }],
        },
      ],
    },
    { title: "Copyright", name: "copyright", type: "string" },
  ],
};
