module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Verdance',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'FfLO4BfiplcMt4DUwyerdEkTyaokfIVrOyO1go68cqU',
        spaceId: 'dsterl7huwlo',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
};
