import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { Card, CardsContainer } from "../components/card"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProduct {
        nodes {
          id
          name
          gatsbyPath(filePath: "/products/{Product.metadata__sku}")
        }
      }
      allSitePlugin {
        nodes {
          id
          name
          # gatsbyPath(filePath: "/plugins/{SitePlugin.id}")
        }
      }

      allDatoCmsWork {
        nodes {
          id
          name: slug
          gatsbyPath(filePath: "/assets/{DatoCmsWork.slug}")
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Products</h2>
      <CardsContainer>
        {data.allProduct.nodes.map(product => (
          <Card key={product.id} {...product} />
        ))}
        <Card gatsbyPath="/products/turkey" name="Turkey (doesnt exist)" />
      </CardsContainer>

      <h2>Dato CMS Data</h2>
      <CardsContainer>
        {data.allDatoCmsWork.nodes.map(asset => (
          <Card key={asset.id} {...asset} />
        ))}
      </CardsContainer>

      <h2>Plugins</h2>
      <CardsContainer>
        {data.allSitePlugin.nodes.map(plugin => (
          <Card key={plugin.id} {...plugin} />
        ))}
      </CardsContainer>

      <h2>Users</h2>
      <CardsContainer>
        <Card name="Blaine" path="/users/1" />
      </CardsContainer>
    </Layout>
  )
}

export default IndexPage
