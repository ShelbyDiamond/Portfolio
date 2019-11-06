import React from "react"
import ToDo from "./Projects/ToDo"
import { Heading, ParentDiv2 } from "./Styles/styles"
import VeganMeets from "./Projects/VeganMeets"
import RVbnb from "./Projects/RVbnb"

const Projects = () => {
  return (
    <ParentDiv2>
      <Heading>Check out some of my favorite projects!</Heading>
      <VeganMeets />
      <RVbnb />
      <ToDo />
    </ParentDiv2>
  )
}

export default Projects
