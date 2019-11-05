import React from "react"

import {
  ParentDiv,
  InputDiv,
  HeaderDiv,
  H2Heading,
  Label,
  Input,
  TextArea,
  Button,
  ButtonDiv
} from "./Styles/styles"

const Contact = () => {
  return (
    <ParentDiv>
      <form>
        <HeaderDiv>
          <H2Heading> Let's Connect!</H2Heading>
        </HeaderDiv>
        <InputDiv>
          <Label>Name:</Label>
          <Input name="name" required />
        </InputDiv>
        <InputDiv>
          <Label>Email:</Label>
          <Input name="email" required />
        </InputDiv>
        <InputDiv>
          <Label>Message: </Label>
          <TextArea name="message" required />
        </InputDiv>
        <ButtonDiv>
          <Button>Submit</Button>
        </ButtonDiv>
      </form>
    </ParentDiv>
  )
}

export default Contact
