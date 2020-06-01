/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createContentDigest } = require(`gatsby-core-utils`)

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type Product implements Node {
          name: String
      }
    `
  createTypes(typeDefs)
}

const products = [
  { id: 0, name: "Burger" },
  { id: 1, name: "Chicken" },
]

exports.sourceNodes = ({ actions, createNodeId }) => {
  products.forEach(product => {
    actions.createNode({
      id: createNodeId(product.id),
      children: [],
      parent: null,
      internal: {
        type: `Product`,
        contentDigest: createContentDigest(product.name),
      },
      name: product.name,
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  // const { data } = await graphql(`
  //   {
  //     allProduct {
  //       nodes {
  //         id
  //         name
  //       }
  //     }
  //   }
  // `)
  // data.allProduct.nodes.map(product => {
  //   actions.createPage({
  //     path: `/products/${product.id}`,
  //     component: require.resolve("./src/components/product"),
  //     context: { product },
  //   })
  // })
}
