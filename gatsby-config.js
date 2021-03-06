module.exports = {
  siteMetadata: {
    title: 'This awesome website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/layouts/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'project-pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },

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
  ],
};
