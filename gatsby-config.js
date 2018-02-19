module.exports = {
  siteMetadata: {
    title: 'This awesome website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'David Holbrook',
        short_name: 'davidholbrook',
        start_url: '/',
        background_color: '#2e2f2f',
        theme_color: '#2e2f2f',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-nprogress',
      color: 'tomato',
    },
  ],
};
