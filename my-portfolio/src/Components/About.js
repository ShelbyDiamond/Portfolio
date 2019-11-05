import React from "react"
import HeadShot from "../images/Headshot.png"
import { ParentDiv1, Image, Sentence, Paragraphs } from "./Styles/styles"

const About = () => {
  return (
    <div>
      <ParentDiv1>
        <Image src={HeadShot} alt="Professional headshot" />
        <Sentence>Full Stack Developer</Sentence>
      </ParentDiv1>
      <Paragraphs>
        When I was first deciding what I wanted to do for a career, helping
        others was the top of the priority list. I decided to become a
        kindergarten teacher to be apart of molding our future generations into
        kind and loving people.
      </Paragraphs>
      <Paragraphs>
        After a few years I felt like I could make a difference in more lives by
        becoming a pharmacy technician. Using my compassion, love, patience, and
        understanding, I was able to grow up the chain of pharmacy as much as my
        license would allow, and there was no more room to grow the corporate
        ladder.
      </Paragraphs>
      <Paragraphs>
        I decided to take my skills of attention to detail, compassion,
        understanding, patience, and love of helping others and apply it to the
        coding industry. I had the amazing opportunity to partner with a non
        profit organization for 8 weeks called Miracle Messages and finally feel
        I found a way to help others through technology. My career in web
        development is just getting started, but I am devoted, hard working, and
        excited to make a difference in the community.
      </Paragraphs>
    </div>
  )
}

export default About
