import React from "react"
import HeadShot from "../images/Headshot.png"
import { ParentDiv1, Image, Sentence } from "./Styles/styles"

const About = () => {
  return (
    <div>
      <ParentDiv1>
        <Image src={HeadShot} alt="Professional headshot" />
        <Sentence>Full Stack Developer</Sentence>
      </ParentDiv1>
    </div>
  )
}

export default About
