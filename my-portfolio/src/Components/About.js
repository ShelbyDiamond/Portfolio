import React from "react"
import HeadShot from "../images/HeadShot.png"
import styled from "styled-components"

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px;
`

const Image = styled.img`
  width: 500px;
  height: auto;
  border-radius: 80%;
  display: inline-flex;
  text-align: right;
  align-items: baseline;
  align-content: center;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);
`
const Sentence = styled.p`
  font-size: 3rem;
  display: inline-flex;
  color: white;
  position: relative;
  width: 60%;
  align-content: center;
  margin: 15px;
  padding: 25px;
`
const Paragraphs = styled.p`
  font-size: 1.4rem;
  color: white;
  padding: 10px;
  margin: 25px;
  line-height: 35px;
  width: 50%;
`

const About = () => {
  return (
    <div>
      <ParentDiv>
        <Image src={HeadShot} alt="Professional headshot" />
        <Sentence>Full Stack Engineer</Sentence>
      </ParentDiv>
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
