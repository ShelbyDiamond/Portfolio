import React from "react"
import image2 from "../../images/VeganMeets.PNG"
import image3 from "../../images/EndPointsVeganMeets.PNG"
import {
  Buttons,
  Description,
  Heading1,
  BigContainer,
  Image2,
  Image3,
  ImageDiv,
  ButtonDiv
} from "../Styles/styles"

const VeganMeets = () => {
  return (
    <BigContainer>
      <Heading1>Vegan Meets</Heading1>
      <ImageDiv>
        <Image3
          src={image3}
          alt="screen shot of my models (or the way the code accepts data)."
        />
        <Image2
          src={image2}
          alt="screen shot of my models (or the way the code accepts data)."
        />
      </ImageDiv>
      <Description>
        In this project I used Java to create a back end database that allows
        users to spread the word of what resturants have vegan options. As a
        user you can register, login, add a new resturant or menu item to an
        exisiting resturant, edit or delete your own postings, and even give a
        star rating to each place you have tried.
      </Description>
      <ButtonDiv>
        <Buttons
          href="https://vegan-meets.herokuapp.com/swagger-ui.html#/"
          target="_blank"
        >
          Link to Documentation
        </Buttons>
        <Buttons
          href="https://github.com/build-week-vegan-meets/BE/tree/diamond"
          target="_blank"
        >
          GitHub Repo
        </Buttons>
      </ButtonDiv>
    </BigContainer>
  )
}

export default VeganMeets
