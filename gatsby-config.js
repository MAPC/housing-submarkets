require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'MAPC Housing Submarkets',
    description: 'Website for MAPC\'s research into housing submarkets in metropolitan Boston',
    author: '@mapcmetroboston',
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./types/gatsby-graphql.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
          './gatsby-node.js',
        ],
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-csv',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MAPC Housing Submarkets',
        short_name: 'Housing Submarkets',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/MAPC_logo.png', // This path is relative to the root of the site.
      },
    },
  ],
};
