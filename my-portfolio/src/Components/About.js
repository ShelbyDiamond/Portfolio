import React from "react"
import HeadShot from "../images/Headshot518.png"
import styled from "styled-components"

const Image = styled.img`
  width: 500px;
  height: auto;
  border-radius: 75%;
  display: inline-flex;
  text-align: right;
  align-items: baseline;
`
const Sentence = styled.p`
  font-size: 2.8rem;
  display: inline-flex;
  color: white;
  position: relative;
  width: 60%;
  justify-content: flex-end;
  align-items: baseline;
`

const About = () => {
  return (
    <div>
      <Image src={HeadShot} alt="Professional headshot" />
      <Sentence>Put a sentence about being a Full Stack Web Developer</Sentence>
    </div>
  )
}

export default About
