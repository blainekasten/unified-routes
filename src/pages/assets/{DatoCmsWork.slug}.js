import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Page(props) {
  console.log(props)
  return (
    <>
      <h1>Excerpt: </h1>
      <p>{props.data.datoCmsWork.excerpt}</p>
      <Img fluid={props.data.datoCmsWork.coverImage.fluid} />
    </>
  )
}

export const query = graphql`
  query DatoWork($id: String) {
    datoCmsWork(id: { eq: $id }) {
      excerpt
      coverImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
