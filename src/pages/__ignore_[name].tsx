import React from "react"
import { graphql, createPagesFromData } from "gatsby"

const Query = graphql`
  {
    allProduct {
      nodes {
        id
        name
        sku {
          america
        }
      }
    }
  }
`

// file path dynamic key matches node from gql results
// [id] = nodes[i].id
// [foo__bar] = nodes[i].foo.bar (this is copied from gridsome)
export default createPagesFromData<{ name: string }>(props => {
  return (
    <div>
      <h1>{props.data.name}</h1>
    </div>
  )
}, Query)
