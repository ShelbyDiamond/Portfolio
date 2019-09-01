import React from "react"
import Github from "../images/Github.PNG"
import Twitter from "../images/twitter.PNG"
import LinkedIn from "../images/LinkedIn.PNG"
import styled from "styled-components"

const Icon = styled.img`
  width: 45px;
  height: 45px;
  padding: 15px;
`
const GithubIcon = styled.img`
  width: 45px;
  height: 45px;
  padding: 15px;
  border: 1 px solid black;
  background: white;
`
const Contact = () => {
  return (
    <div>
      <h2>Let's Connect!</h2>
      <p>Shelby Diamond</p>
      <p>shelbydiamond518@gmail.com</p>

      <GithubIcon src={Github} alt="Github Logo" />
      <Icon src={Twitter} alt="Twitter Logo" />
      <Icon src={LinkedIn} alt="LinkedIn Logo" />
    </div>
  )
}

export default Contact
