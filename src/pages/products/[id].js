import React from "react"
import { graphql, createPagesFromData } from "gatsby"

function Product(props) {
  return (
    <div>
      <h1>{props.data.product.name}</h1>
      <h3>{props.data.product.id}</h3>
    </div>
  )
}

export default createPagesFromData(Product, `Product`)

export const query = graphql`
  query Product($id: String) {
    product(id: { eq: $id }) {
      id
      name
    }
  }
`
