import React from "react"
import HeadShot from "../images/HeadShot.png"
import { ParentDiv1, Image, Sentence, Paragraphs } from "./Styles/styles"

const About = () => {
  return (
    <div>
      <ParentDiv1>
        <Image src={HeadShot} alt="Professional headshot" />
        <Sentence>Full Stack Developer</Sentence>
      </ParentDiv1>
      <Paragraphs>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet
        esse nulla perferendis voluptates! Rerum, natus. Minus quasi eum quo est
        repellendus magni quidem ipsam nemo esse! Quisquam, odio dicta!
      </Paragraphs>
      <Paragraphs>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet
        esse nulla perferendis voluptates! Rerum, natus. Minus quasi eum quo est
        repellendus magni quidem ipsam nemo esse! Quisquam, odio dicta!
      </Paragraphs>
      <Paragraphs>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet
        esse nulla perferendis voluptates! Rerum, natus. Minus quasi eum quo est
        repellendus magni quidem ipsam nemo esse! Quisquam, odio dicta!
      </Paragraphs>
    </div>
  )
}

export default About
