import S from "@sanity/desk-tool/structure-builder"
import React from "react"
import {
  MdWeb,
  MdSettings,
  MdLink,
  MdAddAlert,
  MdShopTwo,
  MdPhotoCamera,
  MdCollections,
  MdPerson,
  MdPages,
  MdWebStories,
  MdMenu,
  MdOutlinePhoneIphone,
  MdDirectionsBus,
} from "react-icons/md"
import { IoMdAlert, IoAlertCircle, IoMdJournal } from "react-icons/io"
import {
  GiBrain,
  GiFiles,
  GiFootprint,
  GiHomeGarage,
  GiInfo,
  GiLotusFlower,
  GiNotebook,
  GiNothingToSay,
  GiSurferVan,
} from "react-icons/gi"

import { RiPagesLine } from "react-icons/ri"

const JsonPreview = ({ document }) => (
  // The JSON preview
  <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
)

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props

  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ])
}

const hiddenDocTypes = (listItem) =>
  ![
    "homepage",
    "homepageLink",
    "homepageHero",
    "homepageFeature",
    "homepageFeatureList",
    "homepageCta",
    "homepageLogo",
    "homepageLogoList",
    "homepageTestimonial",
    "homepageTestimonialList",
    "homepageBenefit",
    "homepageBenefitList",
    "homepageStat",
    "homepageStatList",
    "homepageProduct",
    "homepageProductList",
    "homepageBanner",
    "navItem",
    "navItemGroup",
    "socialLink",
    "layoutHeader",
    "layoutFooter",
    "layout",
    "imageProfile",
    "globalSocialLinks",
    "vanHighlight",
    "page",
    "aboutPage",
    "aboutHero",
    "aboutStat",
    "aboutStatList",
    "aboutProfile",
    "aboutLeadership",
    "aboutLogoList",
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title("My Mates Van")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(GiHomeGarage)
        .child(
          S.document()
            .schemaType("homepage")
            .documentId("5b579b81-eb00-4580-9c99-c7104379c7e9")
        ),
      S.listItem()
        .title("About Page")
        .id("aboutPageID")
        .icon(GiInfo)
        .child(
          S.document()
            .schemaType("aboutPage")
            .documentId("7ba68316-11d4-4dec-9c10-7d977307a0c1")
        ),
      S.listItem()
        .title("Vans")
        .icon(GiSurferVan)
        .child((pageType) =>
          // load a new document list
          S.documentList()
            .title("Vans")
            // Use a GROQ filter to get documents.
            .filter('_type == "homepageProduct"')
            .params({ pageType })
        ),
      S.listItem()
        .title("Other Pages")
        .icon(GiFiles)
        .child((pageType) =>
          // load a new document list
          S.documentList()
            .title("Pages")
            // Use a GROQ filter to get documents.
            .filter('_type == "page"')
            .params({ pageType })
        ),
      S.listItem()
        .title("Header")
        .icon(GiBrain)
        .child(
          S.document()
            .schemaType("layoutHeader")
            .documentId("1ad92850-0d4e-4d37-b2e0-aac2b6d8893c")
        ),
      S.listItem()
        .title("Footer")
        .icon(GiFootprint)
        .child(
          S.document()
            .schemaType("layoutFooter")
            .documentId("9067df3c-fa82-4007-ba2a-5f6a81c132a4")
        ),
      S.listItem()
        .title("Social Links")
        .icon(GiNothingToSay)
        .child((pageType) =>
          // load a new document list
          S.documentList()
            .title("Social Links")
            // Use a GROQ filter to get documents.
            .filter('_type == "socialLink"')
            .params({ pageType })
        ),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
