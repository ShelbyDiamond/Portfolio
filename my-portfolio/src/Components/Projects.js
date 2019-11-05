import React from "react"
import ToDo from "./Projects/ToDo"
import { Heading } from "./Styles/styles"
import VeganMeets from "./Projects/VeganMeets"
import RVbnb from "./Projects/RVbnb"

const Projects = () => {
  return (
    <div>
      <Heading>Check out some of my favorite projects!</Heading>
      <VeganMeets />
      <RVbnb />
      <ToDo />
    </div>
  )
}

export default Projects
