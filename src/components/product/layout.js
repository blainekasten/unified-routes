import React from "react"
import { /*Outlet,*/ Link } from "gatsby"
import styled from "styled-components"

const Header = styled.h1`
  width: 100%;
  padding: 1rem;
  background: skyblue;
  margin: 0;
`

const Tabs = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  background: powderblue;
`

const Tab = styled.li`
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  background: ${p => (p.selected ? `mediumturquoise` : ``)};
  width: 150px;
  text-align: center;

  a {
    text-decoration: none;
    color: #00000e !important;
    font-family: arial;
  }
`

const Container = styled.div`
  padding: 2rem;

  * {
    font-family: arial;
  }
`

export default function Product(props) {
  return (
    <>
      <Header>{props.name}</Header>

      <Tabs>
        <Tab selected={props.location.pathname === `/products/${props.name}`}>
          <Link to={props.path}>{props.name}</Link>
        </Tab>
        <Tab
          selected={
            props.location.pathname === `/products/${props.name}/reviews`
          }
        >
          <Link to={`${props.path}/reviews`}>Reviews</Link>
        </Tab>
        <Tab>
          <Link to={`${props.path}/specs`}>Specs</Link>
        </Tab>
      </Tabs>

      <Container>{/* <Outlet {...props} /> */}</Container>
    </>
  )
}
