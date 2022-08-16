import SlugInput from "sanity-plugin-better-slug";

import { GiSurferVan, GiInfo, GiPhotoCamera } from "react-icons/gi";
import EditorMessage from "../components/EditorMessage";

export default {
  name: "homepageProduct",
  title: "Product",
  type: "document",
  groups: [
    {
      title: "Basic",
      name: "basic",
      default: true,
      icon: GiInfo,
    },
    {
      title: "Details",
      name: "details",
      icon: GiSurferVan,
    },
    {
      title: "Gallery",
      name: "gallery",
      icon: GiPhotoCamera,
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "💡 The name of the van. Used to create the slug of the page",
      validation: (Rule) =>
        Rule.required()
          .min(4)
          .warning("Must be at least 4 letters")
          .max(64)
          .warning(
            "Shorter titles are usually better. Use the heading for a longer message."
          ),
      group: "basic",
    },
    {
      name: "slug",
      title: "Slug",
      inputComponent: SlugInput,
      type: "slug",
      description:
        '💡 Click the "Generate" button to create slug from your title.',
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        basePath: "https://mymatesvan.com.au/vans",
        // Use isUnique/maxLength just like you would w/ the regular slug field
        // isUnique: MyCustomIsUniqueFunction,
        // maxLength: 30,
      },
      group: "basic",
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
      description:
        '💡 Place a catchphrase or descriptive heading here. e.g. "Van_Name is our van of the month!"',
      validation: (Rule) => Rule.required(),
      group: "basic",
    },
    { title: "Subheading", name: "text", type: "string", group: "basic" },
    {
      title: "Image",
      name: "image",
      type: "image",
      description:
        "This is the main image that will show up on search and social, and as the icon in menus and layouts.",
      group: "basic",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Banner Image",
      name: "bannerImage",
      type: "image",
      description:
        "💡 This image will create a full screen banner at the top of the page. Only use it for wide angle shots that will look good on a wide screen.",
      group: "basic",
    },
    // Details
    {
      name: "ignoreMe",
      title: "Editor Message",
      type: "string",
      readOnly: true,
      inputComponent: EditorMessage,
      group: "details",
      options: {
        heading: "About Section",
        text: "Main details about the van",
      },
    },
    {
      title: "Heading",
      name: "details_heading",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      group: "details",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "vanHighlight" }],
      group: "details",
      validation: (Rule) => [
        Rule.required().min(1).error("Required field with at least 1 entries."),
      ],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: {
        layout: "grid",
      },
      group: "gallery",
    },
  ],
};
