import React from "react"
import { graphql, unstable_collectionGraphql, Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background: skyblue;
  margin: 0;
`

const Body = styled.section`
  width: 100%;
  padding: 1rem;
`

export default function Component(props) {
  return (
    <>
      <Header>
        <Link to="/">Back</Link>
        <h1>{props.data.sitePlugin.name}</h1>
      </Header>

      <Body>
        <h1>Version:</h1>
        <p>{props.data.sitePlugin.version}</p>
      </Body>
    </>
  )
}

export const query = graphql`
  query Plugins($id: String) {
    sitePlugin(id: { eq: $id }) {
      name
      version
    }
  }
`

export const collectionQuery = unstable_collectionGraphql`
    {
      allSitePlugin(filter: { version: { nin: ["1.0.0"] } }) {
        ...CollectionPagesQueryFragment
      }
    }
  `
