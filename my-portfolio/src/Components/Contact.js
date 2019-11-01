import React from "react"
import Github from "../images/Github.PNG"
import Twitter from "../images/twitter.PNG"
import LinkedIn from "../images/LinkedIn.PNG"
import styled from "styled-components"
import {
  ParentDiv,
  InputDiv,
  HeaderDiv,
  IconDiv,
  GithubIcon,
  Icon
} from "./Styles/styles"

const Contact = () => {
  return (
    <ParentDiv>
      <HeaderDiv>
        <h2> Let's Connect!</h2>
      </HeaderDiv>
      <form>
        <InputDiv>
          <label>Name:</label>
          <input name="name" placeholder="name" required />
        </InputDiv>
        <InputDiv>
          <label>Email:</label>
          <input name="email" placeholder="email" required />
        </InputDiv>
        <InputDiv>
          <label>Message: </label>
          <textarea
            name="message"
            placeholder="place your message here"
            required
          />
        </InputDiv>
      </form>
      <IconDiv>
        <GithubIcon src={Github} alt="Github Logo" />
        <Icon src={Twitter} alt="Twitter Logo" />
        <Icon src={LinkedIn} alt="LinkedIn Logo" />
      </IconDiv>
    </ParentDiv>
  )
}

export default Contact
