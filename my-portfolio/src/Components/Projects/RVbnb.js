import React from "react"
import image2 from "../../images/RVbnb2.PNG"
import {
  Buttons,
  Description,
  Heading1,
  BigContainer,
  ButtonDiv,
  ImageDiv,
  Image3
} from "../Styles/styles"

const RVbnb = () => {
  return (
    <BigContainer>
      <Heading1>Rv bnb</Heading1>
      <ImageDiv>
        <Image3
          src={image2}
          alt="screen shot of my models (or the way the code accepts data)."
        />
      </ImageDiv>
      <Description>
        In this project I was on a team with one other developer. Together we
        built an application for an RV owner to rent land Air bnb style, or a
        land owner to rent out their property. We stayed in 24/7 zoom meetings
        and utilized live share through VS Code. We built it out in 3 days using
        React, Redux, Node, and styled components.
      </Description>
      <ButtonDiv>
        <Buttons
          href="https://rvbnbwebfrontend.noahfranco.now.sh/"
          target="_blank"
        >
          Live Site
        </Buttons>
        <Buttons
          href="https://github.com/RVbnb/rvbnb_web_frontend"
          target="_blank"
        >
          GitHub Repo
        </Buttons>
      </ButtonDiv>
    </BigContainer>
  )
}

export default RVbnb
