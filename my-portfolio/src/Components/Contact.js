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
const Contact = () => {
  return (
    <div>
      <h2>Let's Connect!</h2>
      <p>Shelby Diamond</p>
      <p>shelbydiamond518@gmail.com</p>

      <Icon src={Github} alt="Github Logo" />
      <Icon src={Twitter} alt="Twitter Logo" />
      <Icon src={LinkedIn} alt="LinkedIn Logo" />
    </div>
  )
}

export default Contact
