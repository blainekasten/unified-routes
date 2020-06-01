import React from "react"
import { graphql } from "gatsby"

const Product = function (props) {
  console.log({ props })
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h3>{props.data.id}</h3>
    </div>
  )
}

export default Product
