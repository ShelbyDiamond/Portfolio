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
  Input2,
  Paragraphs,
  ParagraphDiv,
  H5Title
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
      <ParagraphDiv>
        <Paragraphs>
          <H5Title>About Me</H5Title>
          When I was first deciding what I wanted to do for a career, helping
          others was the top of the priority list. I decided to become a
          kindergarten teacher to be apart of molding our future generations
          into kind and loving people.
          <br />
          <br />
          After a few years I felt like I could make a difference in more lives
          by becoming a pharmacy technician. Using my compassion, love,
          patience, and understanding, I was able to grow up the chain of
          pharmacy as much as my license would allow, and there was no more room
          to grow the corporate ladder.
          <br />
          <br />I decided to take my skills of attention to detail, compassion,
          understanding, patience, and love of helping others and apply it to
          the coding industry. I had the amazing opportunity to partner with a
          non profit organization for 8 weeks called Miracle Messages and
          finally feel I found a way to help others through technology. My
          career in web development is just getting started, but I am devoted,
          hard working, and excited to make a difference in the community.
          <br />
          <br />
          <br />
          <br />
          <h1> ENTER RESUME PDF HERE</h1>
        </Paragraphs>
      </ParagraphDiv>
    </ParentDiv>
  )
}

export default Contact
