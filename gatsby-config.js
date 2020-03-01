module.exports = {
  siteMetadata: {
    title: `Gatsby Authentication Template`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        server: { address: `<ADDRESS>`, port: 27017 },
        auth: { user: `<USER>`, password: `<PASSWORD` },
        dbName: `cloud`,
        collection: `documents`,
        extraParams: { replicaSet: `<REPLICASET`, ssl: true, authSource: `admin`, retryWrites: true }
      },
    },
  ],
}