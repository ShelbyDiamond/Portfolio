import React from "react"
import image from "../../images/ToDoImage.png"
import styled from "styled-components"
const BigContainer = styled.div`
  border: 2px solid black;
  margin: 25px;
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: gray;
`
const Heading = styled.h2`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
`
const Buttons = styled.a`
  padding: 5px;
  border: 1px solid grey;
  background: darkcyan;
  margin: 25px;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2rem;
  text-decoration: none;
  width: 25%;
  color: white;
`

const Image = styled.img`
  padding: 15px;
  margin: 15px;
  background-color: white;
  border: 1px solid black;
  justify-content: center;
  display: flex;
  margin-left: 23%;
`
const Description = styled.p`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  background: white;
`

const ToDo = () => {
  return (
    <BigContainer>
      <Heading>To-Do List</Heading>
      <div>
        <Image src={image} alt="screen shot of my finished project" />
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
        <Buttons href="https://react-todo.shelbydiamond.now.sh">
          Live Site
        </Buttons>
        <Buttons href="https://github.com/shelbydiamond">GitHub Repo</Buttons>
      </strong>
    </BigContainer>
  )
}

export default ToDo
