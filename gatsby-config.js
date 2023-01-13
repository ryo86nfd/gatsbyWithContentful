require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

let contentfulOptions = {}
if (process.env.CONTEXT === "production") {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: process.env.CONTENTFUL_HOST,
    }
} else {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
        host: process.env.CONTENTFUL_PREVIEW_HOST,
    }
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful starter',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulOptions,
    },
  ],
}
