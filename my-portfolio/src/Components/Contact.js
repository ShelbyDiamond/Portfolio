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
  Input2
} from "./Styles/styles"

const Contact = () => {
  return (
    <ParentDiv>
      <FormDiv
        action="https://mailthis.to/shelbydiamond518@gmail.com"
        method="POST"
      >
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
        <InputDiv>
          <Input2 type="submit" value="Submit" />
        </InputDiv>
      </FormDiv>
    </ParentDiv>
  )
}

export default Contact
