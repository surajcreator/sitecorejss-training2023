// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Article component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Article',
    templateName:'Article',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'articleTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'articleDescription', type: CommonFieldTypes.RichText },
      { name: 'articleAuthor', type: CommonFieldTypes.ItemLink },
      { name: 'articlePublishedDate', type: CommonFieldTypes.DateTime },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
