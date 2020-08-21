import React from "react"
import Layout from "../../components/product/layout"

export default function NotFoundProductRoute(props) {
  const name = `${(props.params.name || "").toUpperCase()} Not Found`
  return <Layout name={name} path="" location={props.location} />
}
