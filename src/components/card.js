import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const Box = styled.li`
  background: Azure;
  color: DarkSlateGray;
  height: 8rem;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: zoom 0.3s;
  margin: 1rem;
  padding: 0.25rem;

  transition: all 0.3s;

  :hover {
    height: 10rem;
    width: 10rem;
    margin: 0;
  }
`

const Link = styled(GatsbyLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5vw;
  transition: all 0.3s;

  :hover {
    font-size: 1.75vw;
  }
`

export function Card(props) {
  return (
    <Link to={props.gatsbyPath}>
      <Box>{props.name}</Box>
    </Link>
  )
}

export const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
  grid-gap: 1rem;
`
