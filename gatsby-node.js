/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createContentDigest } = require(`gatsby-core-utils`)

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type ProductMetadata {
      sku: Int
    }
    type Product implements Node {
        name: String
        specs: String
        reviews: [String]
        metadata: ProductMetadata
    }
  `)
}

const products = [
  {
    id: 0,
    name: "Burgers! ~Yum~",
    specs: "Meat, mostly",
    metadata: {
      sku: "123",
    },
    reviews: ["Meat is good", "unless your a vegitarian"],
  },
  {
    id: 1,
    name: "Chicken",
    specs: "Birds, I think",
    metadata: {
      sku: "456",
    },
    reviews: ["PETA says NO THANK YOU"],
  },
  // {
  //   id: 2,
  //   name: null,
  //   specs: null,
  //   metadata: {
  //     sku: null,
  //   },
  //   reviews: [],
  // },
]

exports.sourceNodes = ({ actions, createNodeId }) => {
  console.log("SOURCING NODES!!!!")
  products.forEach(product => {
    actions.createNode({
      ...product,
      id: createNodeId(product.id),
      children: [],
      parent: null,
      internal: {
        type: `Product`,
        contentDigest: createContentDigest(product.name),
      },
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
