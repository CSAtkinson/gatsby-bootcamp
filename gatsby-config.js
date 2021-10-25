/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp!!',
    author: 'James Atkinson'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [ 
          {
            resolve: 'gatsby-remark-relative-images'
          },            
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
        ]
      }
    }
  ],
}


