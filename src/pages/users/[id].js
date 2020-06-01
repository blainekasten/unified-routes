import React, { useEffect, useState } from "react"

export default function (props) {
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
    <div>
      <h1>User:</h1>
      <pre>
        <code>{JSON.stringify(user, null, 4)}</code>
      </pre>
      <h1>Props:</h1>
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </div>
  )
}
