import React from "react"
import HeadShot from "../images/Headshot518.png"
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
  border-radius: 75%;
  display: inline-flex;
  text-align: right;
  align-items: baseline;
  align-content: center;
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
        <Sentence>
          Put a sentence about being a Full Stack Web Developer
        </Sentence>
      </ParentDiv>
      <Paragraphs>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor optio
        quod possimus nesciunt. Cupiditate, officia dolor! Excepturi ut fugiat
        deleniti omnis. Dicta, optio hic laudantium cumque ab delectus beatae
        expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus sit illum, reprehenderit esse odio repellendus, quis fuga
        laboriosam nobis fugit accusamus iste dolorum sapiente? Voluptatibus, ea
        nihil non consequatur ratione veniam saepe molestiae ex? Aspernatur
        consequuntur aut in.
      </Paragraphs>
      <Paragraphs>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit
        illum, reprehenderit esse odio repellendus, quis fuga laboriosam nobis
        fugit accusamus iste dolorum sapiente? Voluptatibus, ea nihil non
        consequatur ratione veniam saepe molestiae ex? Aspernatur consequuntur
        aut in. Explicabo veniam voluptate iste totam, asperiores et laboriosam
        similique delectus non dicta! Nam delectus quas officia suscipit quo
        vitae recusandae necessitatibus labore nihil maiores enim temporibus
        nulla quis provident eligendi, qui accusamus excepturi tenetur, mollitia
        eius impedit? A porro odit facilis id, quaerat voluptas nulla corrupti
        consequuntur voluptatem minus, dolorem, blanditiis provident reiciendis.
        Totam neque deserunt aut illum maxime facere, unde veritatis dolor rem
        labore. Inventore, distinctio assumenda et ex obcaecati illo dignissimos
        quaerat. Deleniti harum, veritatis dolorum, neque ipsa nesciunt minus
        dolorem accusantium magnam officia, eaque inventore non nihil omnis
        quam? Esse consequuntur hic eos assumenda, culpa numquam ut qui.
        Pariatur omnis eligendi aspernatur cum, beatae eum soluta doloremque
        repudiandae placeat.
      </Paragraphs>
      <Paragraphs>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit
        illum, reprehenderit esse odio repellendus, quis fuga laboriosam nobis
        fugit accusamus iste dolorum sapiente? Voluptatibus, ea nihil non
        consequatur ratione veniam saepe molestiae ex? Aspernatur consequuntur
        aut in. Explicabo veniam voluptate iste totam, asperiores et laboriosam
        similique delectus non dicta! Nam delectus quas officia suscipit quo
        vitae recusandae necessitatibus labore nihil maiores enim temporibus
        nulla quis provident eligendi, qui accusamus excepturi tenetur, mollitia
        eius impedit? A porro odit facilis id, quaerat voluptas nulla corrupti
        consequuntur voluptatem minus, dolorem, blanditiis provident reiciendis.
        Totam neque deserunt aut illum maxime facere, unde veritatis dolor rem
        labore. Inventore, distinctio assumenda et ex obcaecati illo dignissimos
        quaerat. Deleniti harum, veritatis dolorum, neque ipsa nesciunt minus
        dolorem accusantium magnam officia, eaque inventore non nihil omnis
        quam? Esse consequuntur hic eos assumenda, culpa numquam ut qui.
        Pariatur omnis eligendi aspernatur cum, beatae eum soluta doloremque
        repudiandae placeat.
      </Paragraphs>
    </div>
  )
}

export default About
