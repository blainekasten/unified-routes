import React from "react"
import Layout from "../../components/product/layout"
import { graphql, unstable_collectionGraphql } from "gatsby"

export default function Product(props) {
  console.log(props)
  return <Layout {...props.data.product} location={props.location} />
}

export const query = graphql`
  query RootProduct($id: String) {
    product(id: { eq: $id }) {
      # path(filePath: "/products/{Product.name}")
      name
      reviews
      specs
    }
  }
`

export const collection = unstable_collectionGraphql`
  query { 
    allProduct {
      ...CollectionPagesQueryFragment
    }
  }
`
