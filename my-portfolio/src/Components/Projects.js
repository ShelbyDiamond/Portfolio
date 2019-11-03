import React from "react"
import ToDo from "./Projects/ToDo"
import { Heading } from "./Styles/styles"
import VeganMeets from "./Projects/VeganMeets"

const Projects = () => {
  return (
    <div>
      <Heading>Check out some of my favorite projects!</Heading>
      <ToDo />
      <VeganMeets />
      <ToDo />
    </div>
  )
}

export default Projects
