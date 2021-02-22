const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const postgresData = await graphql(`
    query submarketPageCreate {
      postgres {
        allHousSubmarketsCtsList {
          ct10Id
          submktId
          medhv
          chMedhvP
          medconr
          chMedcrP
          rhuP
          chRhuP
          cash17P
          bizbuy17P
          fd17P
          bdrm3OP
          u1P
          u24P
          u5OvP
          yrblt59P
          yrblt00P
        }
      }
    }`);

  const submarketSummary = await graphql(`
    query submarketSummaries {
      allMarkdownRemark(filter: {frontmatter: {folder: {in: "narratives"}}}, sort: {fields: frontmatter___submarket, order: ASC}) {
        nodes {
          html
        }
      }
    }
  `);

  // Handle errors
  if (postgresData.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  // Create pages for each markdown file.
  const submarketPageTemplate = path.resolve('./src/components/submarkets/SubmarketPage.tsx');

  let submarket = 1;
  while (submarket < 8) {
    createPage({
      path: `/submarkets/${submarket}`,
      component: submarketPageTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: `/submarkets/${submarket}`,
        data: postgresData,
        submarket,
        summary: submarketSummary.data.allMarkdownRemark.nodes[submarket - 1].html,
      },
    });
    submarket += 1;
  }
};
