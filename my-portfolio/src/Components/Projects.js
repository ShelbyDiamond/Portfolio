import React from "react"
import ToDo from "./Projects/ToDo"
import { Heading, ParentDiv2, ComponentDiv, ParentDiv4 } from "./Styles/styles"
import VeganMeets from "./Projects/VeganMeets"
import RVbnb from "./Projects/RVbnb"

const Projects = () => {
  return (
    <ParentDiv4>
      <Heading>Check out some of my favorite projects!</Heading>
      <ParentDiv2>
        <ComponentDiv>
          <VeganMeets />
          <RVbnb />
        </ComponentDiv>
        <ComponentDiv>
          <ToDo />
        </ComponentDiv>
      </ParentDiv2>
    </ParentDiv4>
  )
}

export default Projects
