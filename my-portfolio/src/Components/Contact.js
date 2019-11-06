import React from "react"

import {
  ParentDiv,
  InputDiv,
  HeaderDiv,
  FormDiv,
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
      <FormDiv>
        <HeaderDiv>
          <H2Heading> Let's Connect!</H2Heading>
        </HeaderDiv>
        <InputDiv>
          <div>
            <Label>Name:</Label>
          </div>
          <Input name="name" required />
        </InputDiv>
        <InputDiv>
          <div>
            <Label>Email:</Label>
          </div>
          <Input name="email" required />
        </InputDiv>
        <InputDiv>
          <div>
            <Label>Message: </Label>
          </div>
          <TextArea name="message" required />
        </InputDiv>
        <ButtonDiv>
          <Button>Submit</Button>
        </ButtonDiv>
      </FormDiv>
    </ParentDiv>
  )
}

export default Contact
