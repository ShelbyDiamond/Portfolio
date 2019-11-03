import React from "react"
import image from "../../images/ToDoImage.png"
import {
  Buttons,
  Description,
  Heading1,
  BigContainer,
  Image1
} from "../Styles/styles"

const ToDo = () => {
  return (
    <BigContainer>
      <Heading1>To-Do List</Heading1>
      <div>
        <Image1 src={image} alt="screen shot of my finished project" />
      </div>
      <Description>
        In this project I used react to create a To-Do list. This can help keep
        track of the chores you need to do, and the ones you have already
        completed. Once you have completed a chore you can check off that it is
        finished. When enough of them (or even one) is completed you will be
        able to use the Clear button to delete all the chores that are
        completed.{" "}
      </Description>
      <strong>
        <Buttons href="https://react-todo.shelbydiamond.now.sh" target="_blank">
          Live Site
        </Buttons>
        <Buttons
          href="https://github.com/ShelbyDiamond/React-Todo"
          target="_blank"
        >
          GitHub Repo
        </Buttons>
      </strong>
    </BigContainer>
  )
}

export default ToDo
