import React from "react"
import image from "../../images/MiracleMessages.PNG"
import {
  Buttons,
  Description,
  Heading1,
  BigContainer,
  Image1,
  ButtonDiv,
  TechDiv,
  TechParagraph
} from "../Styles/styles"

const ToDo = () => {
  return (
    <BigContainer>
      <Heading1>Miracle Messages</Heading1>
      <TechDiv>
        <TechParagraph>Front End || React | Redux</TechParagraph>
      </TechDiv>
      <TechDiv>
        <TechParagraph>Back End || Node</TechParagraph>
      </TechDiv>
      <div>
        <Image3 src={image} alt="screen shot of my finished project" />
      </div>
      <Description>
        Our team built a functioning map for the Miracle Messages organization
        to use. It shows the locations of the chapters, number of volunteers per
        chapter, and number/locations of the reunions.
      </Description>
      <ButtonDiv>
        <Buttons href="#" target="_blank">
          Live Site
        </Buttons>
        <Buttons
          href="https://github.com/orgs/Lambda-School-Labs/teams/labs-18-miracle-messages/repositories"
          target="_blank"
        >
          GitHub Repo
        </Buttons>
      </ButtonDiv>
    </BigContainer>
  )
}

export default ToDo
