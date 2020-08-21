import React from "react"
import { graphql } from "gatsby"

export default function Page(props) {
  return (
    <>
      <h1>Excerpt: </h1>
      <p>{props.data.datoCmsWork.excerpt}</p>
    </>
  )
}

export const query = graphql`
  query DatoWork($id: String) {
    datoCmsWork(id: { eq: $id }) {
      excerpt
    }
  }
`
