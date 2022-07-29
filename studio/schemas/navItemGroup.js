export default {
  name: "navItemGroup",
  title: "Nav Item Group",
  type: "document",
  initialValue: {
    isLinkOrVan: "homepageProduct",
  },
  fields: [
    { title: "Name", name: "name", type: "string" },
    {
      name: "isLinkOrVan",
      title: "Is this a Link or a Van?",
      type: "string",
      options: {
        list: [
          { title: "Vans", value: "homepageProduct" },
          { title: "Links", value: "navItem" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Nav Items",
      name: "navItems",
      type: "array",
      hidden: ({ document }) => document.isLinkOrVan === "homepageProduct",
      of: [
        {
          type: "reference",
          to: [{ type: "navItem" }],
        },
      ],
    },
    {
      title: "Nav Products",
      name: "navProducts",
      type: "array",
      hidden: ({ document }) => document.isLinkOrVan === "navItem",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageProduct" }],
        },
      ],
    },
  ],
}
