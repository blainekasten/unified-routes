import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background: skyblue;
  margin: 0;
`

export default function (props) {
  console.log(props)
  const [users, setUsers] = useState([])

  useEffect(() => {
    ;(async () => {
      const userJson = await import("../../users.json")
      setUsers(userJson.default)
    })()
  }, [])

  const user =
    users.find(user => user.id === props.params.id) || "User not found"

  return (
    <>
      <Header>
        <Link to="/">Back</Link>
        <h1>{user.name}</h1>
      </Header>
    </>
  )
}
