import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const onStyle: React.CSSProperties = {
  height: "20px",
  width: "20px",
  background: "blue",
}
const offStyle: React.CSSProperties = {}

export default function App() {
  const [state, setState] = React.useState(true)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setState(s => !s)}>Flip Style</button>
      <div style={state ? onStyle : offStyle} />
    </div>
  )
}

export const query = graphql`
  {
    allFile {
      nodes {
        id
      }
    }
  }
`
