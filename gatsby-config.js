module.exports = {
  siteMetadata: {
    title: `cibernauta`,
    description: `cibernauta web page.`,
    author: `@cibernauta`,
  },
  pathPrefix: "/cibernauta",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        "ssr": false
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `ubuntu\:Light,Regular,Medium,Bold`,
          `montserrat`
        ],
        display: 'swap'
      }
    },
    `gastsby-plugin-netlify-cms`
  ],
}
