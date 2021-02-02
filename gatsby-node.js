const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const csvData = await graphql(`
    query submarketPageCreate {
      allDataCsv {
        nodes {
          ct10_id
          class
          mhi
          ch_rhu_p
          rhu_p
        }
      }
    }
    `
  )

  // Handle errors
  if (csvData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const submarketPageTemplate = path.resolve(`./src/components/submarkets/SubmarketPage.tsx`)

  let submarket = 1;
  while (submarket < 8) {
    createPage({
      path: `/submarkets/${submarket}`,
      component: submarketPageTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: `/submarkets/${submarket}`,
        data: csvData,
        submarket,
      },
    })
    submarket+=1;
  }
}