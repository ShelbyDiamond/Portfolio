import React from "react"
import ToDo from "./Projects/ToDo"
import styled from "styled-components"

const Heading = styled.h1`
  font-size: 3rem;
  color: black;
  display: flex;
  justify-content: center;
  margin: 35px;
  padding: 15px;
`

const Projects = () => {
  return (
    <div>
      <Heading>Check out some of my favorite projects!</Heading>
      <ToDo />
      <ToDo />
      <ToDo />
      <ToDo />
    </div>
  )
}

export default Projects
