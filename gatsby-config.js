module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.verdance.co/',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/android-chrome-512x512.png',
      },
    },
  ],
};
