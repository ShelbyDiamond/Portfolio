import React from "react"
import HeadShot from "../images/HeadShot.png"
import styled from "styled-components"

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px;
`

const Image = styled.img`
  width: 500px;
  height: auto;
  border-radius: 80%;
  display: inline-flex;
  text-align: right;
  align-items: baseline;
  align-content: center;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);
`
const Sentence = styled.p`
  font-size: 3rem;
  display: inline-flex;
  color: white;
  position: relative;
  width: 60%;
  align-content: center;
  margin: 15px;
  padding: 25px;
`
const Paragraphs = styled.p`
  font-size: 1.4rem;
  color: white;
  padding: 10px;
  margin: 25px;
`

const About = () => {
  return (
    <div>
      <ParentDiv>
        <Image src={HeadShot} alt="Professional headshot" />
        <Sentence>Full Stack Developer</Sentence>
      </ParentDiv>
      <Paragraphs>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        aspernatur ut rerum aliquam, deserunt animi error blanditiis fugit eius
        accusantium sapiente omnis labore reprehenderit dolorem facere,
        architecto eaque ullam, magni quas aut earum. Esse tempore animi
        incidunt dicta voluptatibus nam distinctio, cumque facere officiis
        aperiam nobis doloribus consequuntur a eos obcaecati culpa eligendi
        alias unde perferendis eveniet eum molestias maxime? Voluptas rerum
        facere tenetur, optio corrupti placeat a ipsa assumenda, odit rem hic
        dolor. Nam iure tempora nemo? Ut sapiente natus quae similique! Ducimus
        eligendi soluta, consequatur natus voluptatum excepturi, perspiciatis
        inventore necessitatibus obcaecati, consequuntur at laudantium aliquid
        rem autem.
      </Paragraphs>
      <Paragraphs>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        aspernatur ut rerum aliquam, deserunt animi error blanditiis fugit eius
        accusantium sapiente omnis labore reprehenderit dolorem facere,
        architecto eaque ullam, magni quas aut earum. Esse tempore animi
        incidunt dicta voluptatibus nam distinctio, cumque facere officiis
        aperiam nobis doloribus consequuntur a eos obcaecati culpa eligendi
        alias unde perferendis eveniet eum molestias maxime? Voluptas rerum
        facere tenetur, optio corrupti placeat a ipsa assumenda, odit rem hic
        dolor. Nam iure tempora nemo? Ut sapiente natus quae similique! Ducimus
        eligendi soluta, consequatur natus voluptatum excepturi, perspiciatis
        inventore necessitatibus obcaecati, consequuntur at laudantium aliquid
        rem autem.
      </Paragraphs>
      <Paragraphs>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        aspernatur ut rerum aliquam, deserunt animi error blanditiis fugit eius
        accusantium sapiente omnis labore reprehenderit dolorem facere,
        architecto eaque ullam, magni quas aut earum. Esse tempore animi
        incidunt dicta voluptatibus nam distinctio, cumque facere officiis
        aperiam nobis doloribus consequuntur a eos obcaecati culpa eligendi
        alias unde perferendis eveniet eum molestias maxime? Voluptas rerum
        facere tenetur, optio corrupti placeat a ipsa assumenda, odit rem hic
        dolor. Nam iure tempora nemo? Ut sapiente natus quae similique! Ducimus
        eligendi soluta, consequatur natus voluptatum excepturi, perspiciatis
        inventore necessitatibus obcaecati, consequuntur at laudantium aliquid
        rem autem.
      </Paragraphs>
    </div>
  )
}

export default About
